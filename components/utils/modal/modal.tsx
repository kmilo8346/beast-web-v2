import {FC, ReactElement} from 'react';
import Backdrop from '../backdrop/backdrop';
import classes from './modal.module.css';

interface PropTypes {
    black?: boolean;
    show: boolean;
    close: () => void;
    icon: ReactElement
}

const Modal:FC<PropTypes> = props => {

    const modalBlockStyle = [
        classes.modalBlockWrapper,
        props.black ? classes.modalBlockWrapperBlack : classes.modalBlockWrapperWhite
    ].join(' ');

    const modalCloseBtnStyle = [
        classes.modalCloseBtn,
        props.black ? classes.modalCloseBtnWhite : classes.modalCloseBtnBlack
    ].join(' ');

    return (
        <Backdrop show={props.show} close={props.close}>
            <div className={classes.modalWrapper}>
                <div className={classes.modalIconWrapper}>
                    {props.icon}
                </div>
                <div className={modalBlockStyle}>
                    <button 
                        className={modalCloseBtnStyle}
                        style={{color: props.black ? 'white' : 'black'}}
                        onClick={props.close}>&#10006;
                    </button>
                    {props.children}
                </div>
            </div>
        </Backdrop>
    );

}
export default Modal;