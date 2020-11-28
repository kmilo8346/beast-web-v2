import {FC} from 'react';
import Image from 'next/image';
import classes from './storeSection.module.css';  
import { faClock, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {PurifiedStore} from '../../../types';

interface StoreSectionPropTypes {
    storeData: PurifiedStore,
    openScheduleView: () => void
}

const StoreSection:FC<StoreSectionPropTypes> = (props) => {

    return (
        <section className={classes.storeSection}>
            <div className={classes.storeContainer}>
                
                <div className={classes.storeImgWrapper}>
                    {
                    <Image
                        className={classes.storeImg}
                        src={props.storeData.imageUrl} 
                        alt={`Imagen de ${props.storeData?.name || 'la tienda'}`}
                        width={800}
                        height={500}
                    /> 
                    }
                </div>
                
                
                <div className={classes.storeInfoContainer}>
                    <div className={classes.storeTimesContainer}>
                        <div className={[classes.storeSecondaryText, classes.storeTimeText].join(' ')}>
                        
                            <span className={classes.storeTimeMiniIcons}>
                                {
                                    <FontAwesomeIcon icon={faClock} width={15} height={15}/>
                                }
                            </span>
                            <i>{props.storeData ? props.storeData.deliveryTime : 'Tiempo de entrega'}</i>
                        </div>
                        
                        <div className={[classes.storeSecondaryText, classes.storeHoursText].join(' ')}>
                            <span className={classes.storeTimeMiniIcons} >
                                {
                                    <FontAwesomeIcon icon={faCalendarCheck} width={15} height={15}/>
                                    
                                }
                            </span>
                            <i>{props.storeData ? props.storeData.schedule : 'Horario'   }</i>
                            <span onClick={props.openScheduleView}>
                                {
                                    <FontAwesomeIcon icon={faChevronDown} width={15} height={15} className={classes.storeOpenScheduleViewIcon} />
                                }
                            </span>
                        </div>
                    </div>
                    
                    <p className={classes.storeDescriptionText}><i>{props.storeData && props.storeData.description}</i></p>
                </div>
            </div>
        </section>
    );
}
export default StoreSection ;