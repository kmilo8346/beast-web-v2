//import Head from 'next/head';
import Head from 'next/head'
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Navbar from '../../components/navbar/navbar';
import StoreSection from '../../components/storeSection/storeSection';
import ProductSection from '../../components/productSection/productSection';
import DownloadAppModal from '../../components/downloadAppView/downloadAppView'
import ScheduleStoreView from '../../components/scheduleStoreView/scheduleStoreView';

export async function getStaticPaths() {
    return {
        // La propiedad paths se deja vacío para que el proceso del build no se demore tanto generando 
        // las paginas estaticas para cada tienda, sino que estas sean creadas bajo demanda gracias a
        // la opcion "fallback: true"
        paths: [], 
        fallback: true  
    }   
}

export async function getStaticProps(context) {
    
    // Revisar si existe un token en cache
    // Validar el token (si es valido y tiempo de expiracion)
    // Si el token no es valido o no existe solicitar un nuevo token y almacenarlo en cache
    // Usando el token para pedir los datos de la tienda
    
    const resStoreData = await fetch(`http://localhost:3000/api/storedata/${context.params.slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    const storeData = await resStoreData.json();

    if(!storeData || !storeData.name){
        return {
            notFound: true
        }
    }

    const resStoreProducts = await fetch(`http://localhost:3000/api/storeproducts/${context.params.storeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    const storeProducts = await resStoreProducts.json();
  
    return {
        revalidate: 60, // Se re-construye la pagina cada 1 minuto
        props: {
            storeData: storeData,
            storeProducts: storeProducts
        }
    }
}


const StoreCmp = props => {
    const router = useRouter();
    
    const [showDownloadView, setShowDownloadView] = useState(false);
    const [showScheduleView, setShowScheduleView] = useState(false);
    
    if(router.isFallback){
        return <div>Cargando...</div>;
    }
    
    return (
        <>
            <Head>
                <title>{router.isFallback ? '' : props.storeData.name}</title>
                <meta name="og:title" content={router.isFallback ? '' : props.storeData.name} />
                <meta
                    name="description"
                    content={router.isFallback ? '' : props.storeData.descripcion}
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
                            storeData={router.isFallback ? undefined : props.storeData}
                            openScheduleView={setShowScheduleView.bind(null, true)}
                        />
                    }
                    <ProductSection storeProducts={router.isFallback ? undefined : props.storeProducts}/>

                </main>
                 <DownloadAppModal 
                    isVisible={showDownloadView}
                    close={setShowDownloadView.bind(null, false)}
                />
                <ScheduleStoreView 
                    isVisible={showScheduleView}
                    close={setShowScheduleView.bind(null, false)}
                    data={router.isFallback ? undefined : props.storeData.horarios}
                />
            </div> 
        </>
    );

}
export default StoreCmp;