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
        paths: [
        {
            params: {
                storeId: '123'
            }
        },
        {
            params: {
                storeId: '1234'
            }
        },
        {
            params: {
                storeId: '12345'
            }
        }
    ],
        fallback: true  
    }   
}

export async function getStaticProps(context) {
    const resStoreData = await fetch(`http://localhost:3000/api/storedata/${context.params.storeId}`, {
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
  
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        revalidate: 60, // Se re-construye la pagina cada 1 minuto
        props: {
            storeData: storeData,
            storeProducts: storeProducts
        }
    }
}

/*
export async function getServerSideProps(context) {
    // Get external data from the file system, API, DB, etc.
    const resStoreData = await fetch(`http://localhost:3000/api/storedata/${context.params.storeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    const storeData = await resStoreData.json();

    const resStoreProducts = await fetch(`http://localhost:3000/api/storeproducts/${context.params.storeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    const storeProducts = await resStoreProducts.json();
  
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: {
          storeData: storeData,
          storeProducts: storeProducts
      }
    }
  }*/


const StoreCmp = props => {
    const router = useRouter();
    
    const [showDownloadView, setShowDownloadView] = useState(false);
    const [showScheduleView, setShowScheduleView] = useState(false);
    
    /*if(!router.isFallback && (!props.storeData || !props.storeData.name)){
        return <div>Error 404</div>
    }*/
    
    
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
                    <StoreSection 
                        storeData={router.isFallback ? undefined : props.storeData}
                        openScheduleView={setShowScheduleView.bind(null, true)}
                    />
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