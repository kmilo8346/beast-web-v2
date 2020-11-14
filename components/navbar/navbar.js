import classes from './navbar.module.css';

const Navbar = props => {

    return (
        <nav className={classes.navbar}>
            {/*<img className='nav-logo' src='/assets/images/shop-shop-logo2.png' alt='Logo'/>*/}
            <h1 className={classes.navTitle}>{props.storeName}</h1>
            
            <button className={classes.navDownloadBtn} onClick={props.openDownloadView}>
                <img className={classes.navDownloadBtnImg} src="/assets/icons/icon-download-blue48x48.png" alt='download'/>
                <div className={classes.navDownloadBtnText}>
                    DESCARGA NUESTRA APP
                </div>
            </button>
        </nav>
    );
}
export default Navbar;