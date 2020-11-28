import {FC} from 'react';
import Modal from '../../utils/modal/modal';
import classes from './scheduleStoreView.module.css';
import Image from 'next/image';
import {Schedule} from '../../../types';

const ScheduleDataRow:FC<Schedule> = ({day, schedule}) => {
    return (
        <div className={classes.scheduleBodyRow}>
            <div className={classes.scheduleBodyRowLeft}><i>{day}</i></div>
            <div><i>{schedule}</i></div>
        </div>
    )
}

interface ScheduleViewPropsType {
    data: Schedule[],
    isVisible: boolean,
    close: () => void
}

const ScheduleView:FC<ScheduleViewPropsType> = props => {

    return (
        <Modal
            show={props.isVisible} 
            close={props.close}
            icon={
                <Image 
                    src="/assets/icons/icon-calendar-32.png" 
                    alt="Download icon" 
                    width={25}
                    height={25}    
                />
            }
        >
            <div className={classes.scheduleBody}>
                {
                    props.data && props.data.map((el, idx) => {
                        return <ScheduleDataRow key={idx} day={el.day} schedule={el.schedule} />
                    })
                }
            </div>
        </Modal>
    );
    
}
export default ScheduleView;