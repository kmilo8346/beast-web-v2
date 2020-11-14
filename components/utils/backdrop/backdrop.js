import React from 'react';
import classes from './backdrop.module.css';

const Backdrop = props => {

    const styles = [
                    classes.backdrop, 
                    props.show 
                        ? classes.backdropOpen 
                        : classes.backdropClose
                ];    

    return (
        <div className={styles.join(' ')} onClick={props.close}>
            {props.children}
        </div>
    );

}
export default Backdrop;