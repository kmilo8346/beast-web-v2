import React from 'react';
import Modal from '../utils/modal/modal';
import classes from './downloadAppView.module.css';
import Image from 'next/image';

const DownloadAppView = props => {



    return (
        <Modal
            black
            show={props.isVisible} 
            close={props.close}
            icon={
                <Image 
                    src="/assets/icons/icon-download-white48x48.png" 
                    alt="Download icon" 
                    width={25}
                    height={25}
                />
            }
        >
            <div className={classes.downloadButonsContainer}>
                <a href="https://apps.apple.com/us/app/id1531418420"
                    className={classes.downloadBtn}
                    aria-label="Descarga con App Store"
                >
                    
                    <Image 
                        src='/assets/images/app_store_es200x77.png' 
                        alt="Descarga con App Store" 
                        style={{margin: '10px'}}
                        width={200}
                        height={77}
                    />

                </a>
                <a href="http://play.google.com/store/apps/details?id=com.firedevs.beast"
                    className={classes.downloadBtn} 
                    aria-label="Descarga con Google Play"
                >
                    <Image
                        src='/assets/images/google_play_es200x77.png' 
                        alt="Descarga con Google Play" 
                        width={200}
                        height={77}
                    />
                </a>
            </div>
        </Modal>
    );

}
export default DownloadAppView;