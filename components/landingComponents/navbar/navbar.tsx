import { FC, useState } from 'react';
import Image from 'next/image';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useMediaQuery from '../../utils/hooks/useMediaQuery';


import classes from './navbar.module.css';

const LPNavbar:FC = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const isBreakPoit = useMediaQuery(`(min-width: 600px)`);

    const openMenuIconStyle = 
        [classes.fontAwesome, 'fas', 'fa-bars', mobileMenuOpen && classes.menuPhoneIconHide].join(' ');
    const closeMenuIconStyle = 
        [classes.fontAwesome, 'fas', 'fa-times', !mobileMenuOpen && classes.menuPhoneIconHide].join(' ');
    const menuVerticalStyle = [classes.menuNavVerticalStyle, mobileMenuOpen && classes.menuNavVerticalClosed].join(' ')

    return (
        <header id="navbar">
            <div className={classes.navbar}>
                <div style={{float: 'left'}}>
                    <Image 
                        src='/assets/images/shop-shop-logo-text.png'
                        width={isBreakPoit ? 208 : 150}
                        height={isBreakPoit ? 91 : 66}
                        alt="Shop Shop Logo"
                        className={classes.logo}
                    />
                </div>
                <div className={classes.menuPhoneIcon}  onClick={setMobileMenuOpen.bind(this, !mobileMenuOpen)}>
                    <FontAwesomeIcon icon={faBars} className={openMenuIconStyle}/>
                    <FontAwesomeIcon icon={faTimes} className={closeMenuIconStyle}/>
                </div>
                <nav className={classes.menuNavHorizaontal}>
                    <ul className={classes.menuHorizontal}>
                        <li className={[classes.menuItemHorizontal, classes.menuItemHorizontalSelected].join(' ')}>INICIO</li>
                        <li className={classes.menuItemHorizontal}>QUIENES SOMOS</li>
                        <li className={classes.menuItemHorizontal}>PREGUNTAS</li>
                    </ul>
                </nav>
                <nav className={menuVerticalStyle} onClick={setMobileMenuOpen.bind(this, false)}>
                    <ul className={classes.menuVertical}>
                        <li className={[classes.menuItemVertical, classes.menuItemVerticalSelected].join(' ')}>INICIO</li>
                        <li className={classes.menuItemVertical}>QUIENES SOMOS</li>
                        <li className={classes.menuItemVertical}>PREGUNTAS</li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}
export default LPNavbar;