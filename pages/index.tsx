import {FC} from 'react';
import Head from 'next/head';

import MainCointainer from '../components/landingComponents/mainContainer/container'
import LPNavbar from '../components/landingComponents/navbar/navbar';
import LPDownload from '../components/landingComponents/downloadSection/download';

const LandingPage: FC = props => {

    // Esto es para schema.org SEO
    //const structuredData = {};

    return (
        <>
        <Head>
            <title>Negocios de Shop-Shop</title>
            <meta name="og:title" content='Negocios de Shop-Shop'/>
            <meta
                name="description"
                content='Shop Shop es una herramienta para comprar y vender productos cerca de ti. Descubre lo que venden tus vecinos y más, siempre con despacho gratis.'
            />
            {/*<script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />*/}
        </Head>
       <MainCointainer>
            <LPNavbar />
            <main>
                <LPDownload />
                <section>Tiendas</section>
            </main>
            
            <footer>
                <p>	&#169; 2020 by Firedevs</p>
                <p><a href="gmail:firedevs@gmail.com">firedevs@gmail.com</a></p>
            </footer>
        </MainCointainer>
    </>
    );

}
export default LandingPage;