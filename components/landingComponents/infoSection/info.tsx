import {FC} from 'react';
import Image from 'next/image';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
import classes from './info.module.css';

const Info:FC = props => {

    const isBreakPoit = useMediaQuery(`(min-width: 600px)`);
    const tall = useMediaQuery(`(min-height: 700px)`);
    const taller = useMediaQuery(`(min-height: 900px)`);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <p className={classes.contentPar}>VENDE POR INTERNET SIN COSTOS NI COMISIONES</p>
                <p className={classes.contentImpar}>HAZTE MÁS ACCESIBLE A TUS CLIENTES</p>
                <p className={classes.contentPar}>CRECE APROVECHANDO LAS VENTAJAS DE INTERNET</p>
                <p className={classes.contentImpar}>Y LO MEJOR DE TODO: <br/> 
                    <span 
                        className={[classes.contentPar, classes.contentResalted].join(' ')}>
                            ¡¡¡TOTALMENTE GRATIS!!!
                    </span>
                </p>
            </div>
            <div className={classes.appImage}>
                <Image 
                    src='/assets/images/phones-view.png'
                    width={taller ? 589.5 : tall ? 471.6 : isBreakPoit ? 393 : 196.5 }
                    height={taller ? 445.5 : tall ? 356.4 : isBreakPoit ? 297 : 148.5}
                    alt="Imagen de aplicación"
                />
            </div>
        </div>
    );

}
export default Info;