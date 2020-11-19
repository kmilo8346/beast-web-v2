
import {FC} from 'react';
import classes from './navbar.module.css';
import Image from 'next/image';

interface PropTypes {
    storeName: string,
    openDownloadView: () => void
}

const Navbar:FC<PropTypes> = props => {
    return (
        <nav className={classes.navbar}>
            <h1 className={classes.navTitle}>{props.storeName}</h1>
            <button className={[classes.navDownloadBtn, classes.navDownloadBtnImg].join(' ')} onClick={props.openDownloadView}>
                <Image 
                    src="/assets/icons/icon-download-blue48x48.png" 
                    alt='Download'
                    width={25}
                    height={25}
                />
            </button>
            <button className={[classes.navDownloadBtn, classes.navDownloadBtnText].join(' ')} onClick={props.openDownloadView}>
                DESCARGA NUESTRA APP
            </button>
        </nav>
    );
}
export default Navbar;