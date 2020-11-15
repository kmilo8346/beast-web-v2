const convertMilitaryTimeToOrdinalTime = (militaryTime) => {

    let comodin = Number(militaryTime) > 1200 ? 'pm' : 'am';
    let time = militaryTime.toString().split('');
    
    if(time.length < 4){
        let i = time.length;
        while(4 - i >= 0){
            time.unshift('0')
            i++;
        }
    }
    return [time[0], time[1], ':', time[2], time[3], comodin];
}

const getDayByNumber = (dayOfTheWeek) => {
    switch(dayOfTheWeek){
        case "1": return "Lunes";
        case "2": return "Martes";
        case "3": return "Miercoles";
        case "4": return "Jueves";
        case "5": return "Viernes";
        case "6": return "Sábado";
        case "7": return "Domingo";
        default: return "";
    }
}

export const convertSchedule = (schedule) => {

    const time = [ ...convertMilitaryTimeToOrdinalTime(schedule.open), ' - ',  ...convertMilitaryTimeToOrdinalTime(schedule.close)];
    return {
        dia: getDayByNumber(schedule.day),
        horario: time.join('')
    }
}