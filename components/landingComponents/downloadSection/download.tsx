import {FC} from 'react';
import Image from 'next/image';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
import classes from './download.module.css';

const LPDownload:FC = () => {

    const isBreakPoit = useMediaQuery(`(min-width: 600px)`);

    return (
        <div className={classes.container}>
            <p className={classes.text1}>
                En Latino América existen millones de pequeñas y medianas empresas sin precencia en aplicaciones de comercio electrónico. 
                Esto se debe principalmente a que muchos no son negocios legalizados, no poseen una tienda física y muchos no se pueden dar 
                el lujo de pagar las comisiones por ventas que son impuestas por las plataformas acuales.     
                En un mundo completamente digitalizado, esto afecta directamente en su economía y por tanto sus posibilidades de crecimiento.
            </p>
            <p className={classes.text1}>
                Shop Shop es una aplicación mobile, creada con el objetivo de eliminar estas limitantes, la cual facilita la compra y venta de 
                productos cercanos, donde no se cobran comisiones por su uso o ventas realizadas. Está diseñada para ser accesible por todos, 
                donde no hay distinsiones entre compañías o personas.
            </p>
            <div className={classes.downloadWrapper}>
                <a href="https://apps.apple.com/us/app/id1531418420"
                    className={classes.downloadBtn}
                    aria-label="Descarga con App Store"
                >
                    <Image 
                        src='/assets/images/app_store_es200x77.png'
                        width={isBreakPoit ? 200 : 140}
                        height={isBreakPoit ? 77 : 54}
                        alt="Descarga desde App Store"
                        className={classes.downloadItem}
                    />
                </a>
                <a href="http://play.google.com/store/apps/details?id=com.firedevs.beast"
                    className={classes.downloadBtn} 
                    aria-label="Descarga con Google Play"
                >
                    <Image 
                        src='/assets/images/google_play_es200x77.png'
                        width={isBreakPoit ? 200 : 140}
                        height={isBreakPoit ? 77 : 54}
                        alt="Descarga desde Google Play"
                        className={classes.downloadItem}
                    />
                </a>
            </div>
        </div>
    );

}
export default LPDownload;