import { OpentinHour, Schedule, DayData } from '../../../types';

const fillWithCero = (time:string) => {
    const arrtime = time.split('');
    if(arrtime.length < 4){
        let i = arrtime.length;
        while(4 - i > 0){
            arrtime.unshift('0')
            i++;
        }
    }
    return arrtime;
}
const convertMilitaryTimeToOrdinalTime = (militaryTime:number):string[] => {
    let comodin = 'am';
    let civilTime = militaryTime;
    if(Number(militaryTime) > 1200){
        comodin = 'pm';
        civilTime = militaryTime - 1200;
    }
    const time = civilTime.toString();
    const arrFullTime = fillWithCero(time);
    
    return [arrFullTime[0], arrFullTime[1], ':', arrFullTime[2], arrFullTime[3], comodin];
}

const getDayByNumber = (dayOfTheWeek:string): DayData => {
    switch(dayOfTheWeek){
        case "1": return {
                es: {
                    short: 'Lun',
                    long: 'Lunes'
                },
                en: {
                    short: 'Mon',
                    long: 'Monday'
                }
        };
        case "2": return {
            es: {
                short: 'Mar',
                long: 'Martes'
            },
            en: {
                short: 'Tu',
                long: 'Tuesday'
            }
        };
        case "3": return{
            es: {
                short: 'Mi',
                long: 'Miercoles'
            },
            en: {
                short: 'We',
                long: 'Wednesday'
            }
        };
        case "4": return {
            es: {
                short: 'Ju',
                long: 'Jueves'
            },
            en: {
                short: 'Th',
                long: 'Thursday'
            }
        };
        case "5": return {
            es: {
                short: 'Vi',
                long: 'Viernes'
            },
            en: {
                short: 'Fr',
                long: 'Friday'
            }
        };
        case "6": return {
            es: {
                short: 'Sab',
                long: 'Sábado'
            },
            en: {
                short: 'Sa',
                long: 'Saturday'
            }
        };
        case "7": return {
            es: {
                short: 'Dom',
                long: 'Domingo'
            },
            en: {
                short: 'Su',
                long: 'Sunday'
            }
        };
        default: return {
            es: {
                short: 'Dom',
                long: 'Domingo'
            },
            en: {
                short: 'Su',
                long: 'Sunday'
            }
        }
    }
}

export const convertSchedule = (schedule:OpentinHour): Schedule => {

    const time = [ ...convertMilitaryTimeToOrdinalTime(schedule.open), ' - ',  ...convertMilitaryTimeToOrdinalTime(schedule.close)];
    const dia = getDayByNumber(schedule.day); 
    return {
        dia: dia.es.long,
        horario: time.join('')
    }
}

export const convertScheduleToSchemaFormat = (schedule:OpentinHour) => {
    const dia = getDayByNumber(schedule.day); 
    const shortDay = dia.en.short;
    const openArrTime = fillWithCero(schedule.open.toString());   
    const openTime = [openArrTime[0], openArrTime[1], ':', openArrTime[2], openArrTime[3]].join('');
    const closeArrTime = fillWithCero(schedule.close.toString());
    const closeTime = [closeArrTime[0], closeArrTime[1], ':', closeArrTime[2], closeArrTime[3]].join('');
    return [shortDay, ' ', openTime, '-', closeTime].join('');
}