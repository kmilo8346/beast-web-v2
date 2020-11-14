import React from 'react';
import Modal from '../utils/modal/modal';
import classes from './downloadAppView.module.css';

const DownloadAppView = props => {



    return (
        <Modal
            black
            show={props.isVisible} 
            close={props.close}
            icon={<img className='modal-icon' src="/assets/icons/icon-download-white48x48.png" alt="Download icon" />}
        >
            <div className={classes.downloadButonsContainer}>
                <a href="https://apps.apple.com/us/app/id1531418420" >
                    <img 
                        src='/assets/images/app_store_es200x77.png' 
                        alt="Descarga con App Store" 
                        className={classes.downloadBtn}
                    />
                </a>
                <a href="http://play.google.com/store/apps/details?id=com.firedevs.beast" >
                    <img 
                        src='/assets/images/google_play_es200x77.png' 
                        alt="Descarga con Google Play" 
                        className={classes.downloadBtn}
                    />
                </a>
            </div>
        </Modal>
    );

}
export default DownloadAppView;