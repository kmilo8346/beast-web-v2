import DurationFormatter from './duration-formatter';
import { convertSchedule, convertScheduleToSchemaFormat } from './time-formatter';
import { toCurrency } from './number-formatter';
import {Store, PurifiedStore, Product, PurifiedProduct} from '../../../types';

export const purificarDatosTienda = (inpureData:Store):PurifiedStore => {

    const address = inpureData.delivery_area.center;
    const storeData = {
        imageUrl: inpureData.images[0], // TODO siempre debe haber una imagen lazar exeption si no viene
        name: inpureData.name,
        descripcion: inpureData.description || '',
        tiempoentrega: DurationFormatter.humanizeDurationRange(inpureData.delivery_time.gte, inpureData.delivery_time.lte),
        horario: 'Hoy de 09:00 am a 8:30 pm', // TODO esto hay que construirlo la vista
        horarios: inpureData.opening_hours.map(scheduleDay => {
            return convertSchedule(scheduleDay);
        }),
        // Info para schema.org
        direccion: `${address.route.short_name} ${address.street_number.short_name}${address.apartment ? `, ${address.apartment}` : ''
            }, ${address.locality.short_name}`,
        ciudad: address.administrative_area_level_2.short_name,
        region: address.administrative_area_level_1.short_name,
        latitud: address.location.lat,
        longitud: address.location.lon,
        googleMapaUrl: address.url,
        telefono: inpureData.phone,
        openingHours: inpureData.opening_hours.map(schedule => {
                return convertScheduleToSchemaFormat(schedule);
            }).join(' ')
        
    };
    return storeData;
}



export const purificarDatosProducto = (inpureProduct:Product):PurifiedProduct => {
    const product = {
        id: inpureProduct.id,
        imageUrl: inpureProduct.images[0],
        nombre: inpureProduct.name,
        precio: toCurrency(inpureProduct.price)
    };
    return product;
}