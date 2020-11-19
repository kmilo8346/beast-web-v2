import {FC} from 'react';
import Image from 'next/image';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
import Separador from '../../utils/separador/separador';
import classes from './download.module.css';

const LPDownload:FC = () => {

    const isBreakPoit = useMediaQuery(`(min-width: 600px)`);

    return (
        <div className={classes.container}>
            <div className={classes.downloadWrapper}>
                <a href="https://apps.apple.com/us/app/id1531418420"
                    className={classes.downloadBtn}
                    aria-label="Descarga con App Store"
                >
                    <Image 
                        src='/assets/images/app_store_es200x77.png'
                        width={140}
                        height={54}
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
                        width={140}
                        height={54}
                        alt="Descarga desde Google Play"
                        className={classes.downloadItem}
                    />
                </a>
            </div>
            {isBreakPoit &&
                <>
                    <Image 
                        src='/assets/images/phones-view.png'
                        width={393}
                        height={297}
                        alt="Imagen de aplicación"
                    />
                    <Separador />
                </>
            }


        </div>
    );

}
export default LPDownload;