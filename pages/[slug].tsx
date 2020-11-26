import React, {FC, useState, useEffect} from 'react';
import Head from 'next/head'
import {useRouter} from 'next/router';
import {GetStaticPaths, GetStaticProps} from 'next';

import {Store, PurifiedStore, PurifiedProduct} from '../types';

import Navbar from '../components/storeComponents/navbar/navbar';
import StoreSection from '../components/storeComponents/storeSection/storeSection';
import ProductSection from '../components/storeComponents/productSection/productSection';
import DownloadAppModal from '../components/storeComponents/downloadAppView/downloadAppView'
import ScheduleStoreView from '../components/storeComponents/scheduleStoreView/scheduleStoreView';
import Spinner from '../components/utils/spinner/spinner';

import {purificarDatosTienda, purificarDatosProducto} from '../utils/lib/formatters/response-formatter';

import StoreClientObj from '../utils/lib/axios/store-client';
import ProductClass from '../utils/lib/axios/product-client';

export const getStaticPaths:GetStaticPaths = async () => {
    
    const slugs = await StoreClientObj.getAllSlugs();
    
    return {
        paths: slugs.map(slug => {
            return {
                params: {slug: slug.slug}
            }
        }),
        fallback: true  
    }
}

export const getStaticProps:GetStaticProps<any, any> = async (context) => {
    
    const storeData = await StoreClientObj.searchStoreBySlug(context.params.slug);
    
    if(!storeData){
        return {
            notFound: true
        }
    }

    const purifiedStoreData =  purificarDatosTienda(storeData);

    let purifiedStoreProducts:PurifiedProduct[] = [];
    const productClientObj = new ProductClass(`/stores/${storeData.id}/products`);
    const products = await productClientObj.getAllProducts();
    
    
    if(products && products.length > 0){
        purifiedStoreProducts = products.map(p => {
            return purificarDatosProducto(p);
        });
    }

    return {
        // A los 10 segundos de generada la pagina (build-procces), 
        // si entra un nuevo usuario, se reconstruye actualizando la informacion para proximas peticiones en el intervalo de esos 10 segundos,
        // una vez pasados nuevamente estos 10 segundos, si entra otro usuario se le devuelve la version statica creada en el ciclo anterior, 
        // pero se vuelve a generar un re-build de esta pagina especificamente para actualizar su contenido y pueda ser brindada estaticamente
        // para proximas peticiones, 
        revalidate: 10, 
        props: {
            storeData: purifiedStoreData,
            storeProducts: purifiedStoreProducts
        }
    }
}

type PropTypes = {
    storeData: PurifiedStore,
    storeProducts: PurifiedProduct[]
}

const StoreCmp:FC<PropTypes> = props => {

    const router = useRouter();
    
    const [showDownloadView, setShowDownloadView] = useState(false);
    const [showScheduleView, setShowScheduleView] = useState(false);
    
    if(router.isFallback){
        return <Spinner />;
    }

    const structuredData = !router.isFallback && {
        "@context": "http://www.schema.org",
        "@type": "Store",
        "name": props.storeData.name,
        //"url": "http://url.de.la.tienda",
        //"logo": "https://url.to.logo",
        "image": props.storeData.imageUrl,
        "description": props.storeData.descripcion,
        "address": {
           "@type": "PostalAddress",
           "streetAddress": props.storeData.direccion,
           "addressLocality": props.storeData.ciudad,
           "addressRegion": props.storeData.region,
           //"postalCode": "codigo postal",
           "addressCountry": "Chile" // TODO: Cambiar esto para futuros clientes en otros paises
        },
        "geo": {
           "@type": "GeoCoordinates",
           "latitude": props.storeData.latitud,
           "longitude": props.storeData.longitud
        },
        "hasMap": props.storeData.googleMapaUrl,
        "openingHours": props.storeData.openingHours, //"Mo 09:00-17:30 Tu 09:00-17:30 We 09:00-15:30 Th 07:00-19:00 Fr 05:30-18:00 Sa 04:30-22:30",
        "telephone": props.storeData.telefono
      };

    return (
        <>
            <Head>
                <title>{router.isFallback ? '' : props.storeData.name}</title>
                <meta name="og:title" content={router.isFallback ? '' : props.storeData.name} />
                <meta
                    name="description"
                    content={router.isFallback ? '' : props.storeData.descripcion === '' ? props.storeData.name : props.storeData.descripcion}
                />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
           <div className="body">
                <Navbar 
                    openDownloadView={setShowDownloadView.bind(null, true)}
                    storeName={router.isFallback ? '' : props.storeData.name}
                />
               <main>
                    {
                        !router.isFallback &&  
                        <StoreSection 
                            storeData={props.storeData}
                            openScheduleView={setShowScheduleView.bind(null, true)}
                        />
                    }
                    <ProductSection storeProducts={props.storeProducts}/>
                </main>
                 <DownloadAppModal 
                    isVisible={showDownloadView}
                    close={setShowDownloadView.bind(null, false)}
                />
                <ScheduleStoreView 
                    isVisible={showScheduleView}
                    close={setShowScheduleView.bind(null, false)}
                    data={props.storeData.horarios}
                />
            </div> 
        </>
    );

}
export default StoreCmp;