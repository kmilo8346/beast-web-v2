import {FC} from 'react';
import Modal from '../../utils/modal/modal';
import classes from './scheduleStoreView.module.css';
import Image from 'next/image';


interface ScheduleType {
    dia: string,
    horario: string
} 

const ScheduleDataRow:FC<ScheduleType> = ({dia, horario}) => {
    return (
        <div className={classes.scheduleBodyRow}>
            <div className={classes.scheduleBodyRowLeft}><i>{dia}</i></div>
            <div><i>{horario}</i></div>
        </div>
    )
}

interface ScheduleViewPropsType {
    data: ScheduleType[],
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
                        return <ScheduleDataRow key={idx} dia={el.dia} horario={el.horario} />
                    })
                }
            </div>
        </Modal>
    );
    
}
export default ScheduleView;