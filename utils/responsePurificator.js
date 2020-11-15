import DurationFormatter from './lib/duration-formatter';
import { convertSchedule } from './lib/time-formatter';
import {toCurrency} from './lib/number-formatter';

export const purificarDatosTienda = (inpureData) => {

    const storeData = {
        imageUrl: inpureData.images[0],
        name: inpureData.name,
        descripcion: inpureData.description || '',
        timpoentrega: DurationFormatter.humanizeDurationRange(inpureData.delivery_time.gte, inpureData.delivery_time.lte),
        horario: 'Hoy de 09:00 am a 8:30 pm',
        horarios: inpureData.opening_hours.map(scheduleDay => {
            return convertSchedule(scheduleDay);
        })
    };
    return storeData;
}



export const purificarDatosProducto = (inpureProduct) => {

    const product = {
        id: inpureProduct.id, 
        imageUrl: inpureProduct.images[0], 
        nombre: inpureProduct.name, 
        precio: toCurrency(inpureProduct.price)
    };

    return product;
}