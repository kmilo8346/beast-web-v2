import React from 'react';
import Modal from '../utils/modal/modal';
import classes from './scheduleStoreView.module.css';

const ScheduleDataRow = ({day, time}) => {
    return (
        <div className={classes.scheduleBodyRow}>
            <div className={classes.scheduleBodyRowLeft}><i>{day}</i></div>
            <div><i>{time}</i></div>
        </div>
    )
}

const DownloadAppView = props => {

    return (
        <Modal
            show={props.isVisible} 
            close={props.close}
            icon={<img className='modal-icon' src="/assets/icons/icon-calendar-32.png" alt="Download icon" />}
        >
            <div className={classes.scheduleBody}>
                {
                    props.data && props.data.map((el, idx) => {
                    return <ScheduleDataRow key={idx} day={el.dia} time={el.horario} />
                })
                }
            </div>
        </Modal>
    );
    
}
export default DownloadAppView;