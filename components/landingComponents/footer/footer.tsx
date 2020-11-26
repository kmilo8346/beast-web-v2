import {FC} from 'react';
import classes from './footer.module.css';

const Footer:FC = props => {

    return (
        <footer className={classes.footer}>
                <p className={classes.text}>&#169; 2020 by Firedevs Team</p>
                <p className={classes.email}>
                    <a 
                        href="gmail:firedevs@gmail.com"
                        className={classes.link}
                    >firedevs@gmail.com</a>
                </p>
        </footer>
    );

}
export default Footer;