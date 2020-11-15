import Head from 'next/head'
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Navbar from '../../components/navbar/navbar';
import StoreSection from '../../components/storeSection/storeSection';
import ProductSection from '../../components/productSection/productSection';
import DownloadAppModal from '../../components/downloadAppView/downloadAppView'
import ScheduleStoreView from '../../components/scheduleStoreView/scheduleStoreView';

import {purificarDatosTienda, purificarDatosProducto} from '../../utils/responsePurificator';

export async function getStaticPaths() {
    return {
        // La propiedad paths se deja vacío para que el proceso del build no se demore tanto generando 
        // las paginas estaticas para cada tienda, sino que estas sean creadas bajo demanda gracias a
        // la opcion "fallback: true"
        paths: [{
            params: {slug: '1'}
        }], 
        fallback: true  
    }   
}

export async function getStaticProps(context) {
    
    // Revisar si existe un token en cache
    // Validar el token (si es valido y tiempo de expiracion)
    // Si el token no es valido o no existe solicitar un nuevo token y almacenarlo en cache
    // Usando el token para pedir los datos de la tienda
    
    /*const resStoreData = await fetch(`http://localhost:3000/api/storedata/${context.params.slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    const storeData = await resStoreData.json();*/

    const storeData = {
        "reference": "m7i55k-97b86533-4f03-415b-b163-ae499f710a52",
        "phone": "+56964570608",
        "user": "m7i55kpKa0WCWR4A9mhQJAIlzbE3",
        "delivery_area": {
            "center": {
                "route": {
                    "short_name": "Av. José Pedro Alessandri",
                    "long_name": "Avenida José Pedro Alessandri"
                },
                "administrative_area_level_2": {
                    "short_name": "Santiago",
                    "long_name": "Santiago"
                },
                "administrative_area_level_3": {
                    "short_name": "Ñuñoa",
                    "long_name": "Ñuñoa"
                },
                "administrative_area_level_1": {
                    "short_name": "Región Metropolitana",
                    "long_name": "Región Metropolitana"
                },
                "street_number": {
                    "short_name": "927",
                    "long_name": "927"
                },
                "locality": {
                    "short_name": "Ñuñoa",
                    "long_name": "Ñuñoa"
                },
                "location": {
                    "lon": -70.598343,
                    "lat": -33.4634066
                },
                "id": "ChIJmweBCerPYpYR8REuPgm8UIo",
                "url": "https://maps.google.com/?q=Av.+Jos%C3%A9+Pedro+Alessandri+927,+%C3%91u%C3%B1oa,+Regi%C3%B3n+Metropolitana,+Chile&ftid=0x9662cfea0981079b:0x8a50bc093e2e11f1",
                "apartment": "1009"
            },
            "radius": "50m",
            "geometry": {
                "type": "circle",
                "radius": "50m",
                "coordinates": [
                    -70.598343,
                    -33.4634066
                ]
            }
        },
        "delivery_time": {
            "gte": 10,
            "lte": 40
        },
        "opening_hours": [
            {
                "day": "1",
                "close": 2130,
                "open": 900
            },
            {
                "day": "2",
                "close": 1730,
                "open": 900
            },
            {
                "day": "3",
                "close": 1730,
                "open": 900
            },
            {
                "day": "4",
                "close": 1730,
                "open": 900
            },
            {
                "day": "5",
                "close": 2330,
                "open": 900
            },
            {
                "day": "6",
                "close": 1730,
                "open": 900
            },
            {
                "day": "7",
                "close": 1730,
                "open": 900
            }
        ],
        "enabled": true,
        "name": "Kmilo style",
        "images": [
            "https://res.cloudinary.com/firedevs/image/upload/v1604696259/beast/staging/stores/m7i55k-97b86533-4f03-415b-b163-ae499f710a52/0.jpg"
        ],
        "created_at": "2020-11-06T20:57:44.365Z",
        "updated_at": "2020-11-09T22:51:59.010Z",
        "id": "stores|_x1Zn3UBv93224yCzp67"
    };
    const purifiedStoreData = purificarDatosTienda(storeData);


    if(!storeData || !storeData.name){
        return {
            notFound: true
        }
    }

    /*const resStoreProducts = await fetch(`http://localhost:3000/api/storeproducts/${context.params.storeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    const storeProducts = await resStoreProducts.json();*/
    const resStoreProducts = {
        "from": 0,
        "size": 10,
        "sort": {
            "updated_at": "desc"
        },
        "total": 7,
        "hits": [
            {
                "images": [
                    "https://res.cloudinary.com/firedevs/image/upload/v1600702423/beast/staging/stores/a498a656-7588-4a7a-a468-52bc8961b4d4/products/ecc1f238-2a5b-49fc-a367-7bda8ee4291e/0.jpg"
                ],
                "store_info": {
                    "id": "stores|tvJLsXQBv93224yC5F6L"
                },
                "price": 100,
                "name": "Hamburguesa ",
                "description": "Esta es una genial hamburguesa hecha con la mejor carne de vacuno de toda la región de Chile y sus a",
                "store": "stores|tvJLsXQBv93224yC5F6L",
                "id": "products|w_JNsXQBv93224yCjV5A"
            },
            {
                "store_info": {
                    "id": "stores|j3ZKJXUBoi_MUgy42Wbz"
                },
                "images": [
                    "https://res.cloudinary.com/firedevs/image/upload/v1603859220/beast/staging/stores/BF7AJP-b2f63f63-a913-408c-9343-7a43f39e8f8d/products/BF7AJP-812f379d-7d80-4470-b800-11a53e72c04b/0.jpg"
                ],
                "price": 1000,
                "name": "Delycopete",
                "description": "Copete 24/7 aca 😚",
                "store": "stores|j3ZKJXUBoi_MUgy42Wbz",
                "id": "products|W4h2bXUBoi_MUgy4bgT4"
            },
            {
                "images": [
                    "https://res.cloudinary.com/firedevs/image/upload/v1602648562/beast/staging/stores/BF7AJP-b2f63f63-a913-408c-9343-7a43f39e8f8d/products/BF7AJP-a6f5b18c-7a6e-4990-bd2d-7ecedf9d1332/0.jpg"
                ],
                "store_info": {
                    "id": "stores|j3ZKJXUBoi_MUgy42Wbz"
                },
                "price": 1500,
                "name": "Dulcito cubano",
                "description": "Rico dulce tropical hecho en la localidad de cojimar ",
                "store": "stores|j3ZKJXUBoi_MUgy42Wbz",
                "id": "products|U_9OJXUBv93224yCDZd4"
            },
            {
                "images": [
                    "https://res.cloudinary.com/firedevs/image/upload/v1603901958/beast/staging/stores/tTxdKp-215c1033-2f92-4f63-9afa-384abd78fa8f/products/tTxdKp-6c9adfaa-c879-44f9-9eaf-c0e3ea80e409/0.jpg"
                ],
                "store_info": {
                    "id": "stores|EBAAcHUBv93224yC79IV"
                },
                "price": 200,
                "name": "Cilantro",
                "description": "Cilantro en rama",
                "store": "stores|EBAAcHUBv93224yC79IV",
                "id": "products|GBABcHUBv93224yCv9JB"
            },
            {
                "store_info": {
                    "id": "stores|_x1Zn3UBv93224yCzp67"
                },
                "images": [
                    "https://res.cloudinary.com/firedevs/image/upload/v1604962179/beast/staging/stores/m7i55k-97b86533-4f03-415b-b163-ae499f710a52/products/m7i55k-76351bb0-976b-4113-86af-c2d0a3b59c46/1604962169065-0.jpg"
                ],
                "price": 200,
                "name": "Armando",
                "store": "stores|_x1Zn3UBv93224yCzp67",
                "id": "products|8qgzr3UBoi_MUgy4cQHh"
            },
            {
                "store_info": {
                    "id": "stores|_x1Zn3UBv93224yCzp67"
                },
                "images": [
                    "https://res.cloudinary.com/firedevs/image/upload/v1604962153/beast/staging/stores/m7i55k-97b86533-4f03-415b-b163-ae499f710a52/products/m7i55k-31ac8a45-ffc0-408c-a670-bf74a69285d0/1604962139059-0.jpg"
                ],
                "price": 2000,
                "name": "Sus buenos chicles",
                "description": "Brutales",
                "store": "stores|_x1Zn3UBv93224yCzp67",
                "id": "products|tCIzr3UBv93224yCJlmK"
            },
            {
                "store_info": {
                    "id": "stores|_x1Zn3UBv93224yCzp67"
                },
                "images": [
                    "https://res.cloudinary.com/firedevs/image/upload/v1604696309/beast/staging/stores/m7i55k-97b86533-4f03-415b-b163-ae499f710a52/products/m7i55k-d7b140fe-188a-40ba-9fe7-31ecba18a9f7/0.jpg"
                ],
                "price": 1000,
                "name": "Taza",
                "store": "stores|_x1Zn3UBv93224yCzp67",
                "id": "products|BR1an3UBv93224yCz5_G"
            }
        ]
    }

    const purifiedStoreProducts = resStoreProducts.hits.map(p => {
        return purificarDatosProducto(p);
    })

  
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