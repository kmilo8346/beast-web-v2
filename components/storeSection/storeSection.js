import Image from 'next/image';
import classes from './storeSection.module.css';

const StoreSection = (props) => {

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
                                    <Image  
                                        src='/assets/icons/icons8-clock-50.png' 
                                        alt='Time icon'
                                        width={15}
                                        height={15}
                                    /> 
                                }
                            </span>
                            <i>{props.storeData ? props.storeData.timpoentrega : 'Tiempo de entrega'}</i>
                        </div>
                        
                        <div className={[classes.storeSecondaryText, classes.storeHoursText].join(' ')}>
                            <span className={classes.storeTimeMiniIcons} >
                                {
                                    <Image 
                                        src='/assets/icons/icons8-schedule-24.png' 
                                        alt='Time icon' 
                                        width={15}
                                        height={15}
                                    />  
                                }
                            </span>
                            <i>{props.storeData ? props.storeData.horario : 'Horario'   }</i>
                            <span onClick={props.openScheduleView}>
                                {
                                    /*<img 
                                        className={classes.storeOpenScheduleViewIcon} 
                                        src='/assets/icons/icon-expand.png' alt='More icon' /> */
                                    <Image 
                                        className={classes.storeOpenScheduleViewIcon} 
                                        src='/assets/icons/icon-expand.png' 
                                        alt='More icon' 
                                        width={15}
                                        height={15}
                                    />
                                }
                            </span>
                        </div>
                    </div>
                    
                    <p className={classes.storeDescriptionText}><i>{props.storeData && props.storeData.descripcion}</i></p>
                </div>
            </div>
        </section>
    );
}
export default StoreSection ;