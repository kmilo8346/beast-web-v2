import DurationFormatter from './lib/duration-formatter';
import { convertSchedule, convertScheduleToSchemaFormat } from './lib/time-formatter';
import { toCurrency } from './lib/number-formatter';

export const purificarDatosTienda = (inpureData) => {

    const address = inpureData.delivery_area.center;
    const storeData = {
        imageUrl: inpureData.images[0],
        name: inpureData.name,
        descripcion: inpureData.description || '',
        timpoentrega: DurationFormatter.humanizeDurationRange(inpureData.delivery_time.gte, inpureData.delivery_time.lte),
        horario: 'Hoy de 09:00 am a 8:30 pm',
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



export const purificarDatosProducto = (inpureProduct) => {

    const product = {
        id: inpureProduct.id,
        imageUrl: inpureProduct.images[0],
        nombre: inpureProduct.name,
        precio: toCurrency(inpureProduct.price)
    };

    return product;
}