export interface AddressProp {
    short_name: string;
    long_name: string;
}
export interface Circle {
    type: 'circle';
    radius: string;
    coordinates: number[];
}

export interface Place {
    id: string;
    url: string;
    street_number: AddressProp;
    route: AddressProp;
    locality: AddressProp;
    administrative_area_level_3: AddressProp;
    administrative_area_level_2: AddressProp;
    administrative_area_level_1: AddressProp;
    apartment: string;
    location: {
        lat: number;
        lon: number;
    };
}

export interface IntegerRange {
    lte: number;
    gte: number;
}
export interface DeliveryArea {
    center: Place;
    radius: string;
    geometry: Circle;
}

export type OpentinHour = {
    day: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    open: number;
    close: number;
}

export type OpeningHours = OpentinHour[];

export interface SellerCredentials {
    access_token: string;
    expires_in: number;
    live_mode: boolean;
    public_key: string;
    refresh_token: string;
    scope: string;
    token_type: string;
    user_id: number;
}

export enum PaymentProvider {
    MERCADOPAGO = 'mercadopago',
}

export enum DispatchProvider {
    OWNER = 'owner',
}

export interface Slug {
    slug: string;
    id: string;
}

export interface Store extends Slug {
    id: string;
    created_at: Date;
    updated_at: Date;
    user: string;
    name: string;
    phone: string;
    images: string[];
    reference: string;
    delivery_time: IntegerRange;
    delivery_area: DeliveryArea;
    opening_hours: OpeningHours;
    seller_credentials: SellerCredentials;
    payment_provider: PaymentProvider;
    dispatch_provider: DispatchProvider;
    description: string;
}

export type Weekday = "Lunes" | "Martes" | "Miercoles" | "Jueves" | "Viernes" | "Sábado" | "Domingo";
export interface Schedule {
    dia: Weekday;
    horario: string;
}

export interface PurifiedStore {
    imageUrl: string;
    name: string;
    descripcion?: string;
    tiempoentrega: string;
    horario: string;
    horarios: Schedule[];
    direccion: string;
    ciudad: string;
    region: string;
    latitud: number;
    longitud: number;
    googleMapaUrl: string;
    telefono: string;
    openingHours: string
}

export type SearchFilters = { [key: string]: any };

export interface SearchParams {
    pathVars?: { [key: string]: any };
    query?: string;
    filters?: SearchFilters;
    from?: number;
    size?: number;
    sort?: { [key: string]: 'asc' | 'desc' };
    source?: string[];
}

export interface SearchResponse<T> {
    query?: string;
    filters?: SearchFilters;
    from: number;
    size: number;
    sort?: { [key: string]: 'asc' | 'desc' };
    total: number;
    hits: T[];
}

type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export interface GetParams {
    pathVars: {
        [key: string]: any;
    };
    source?: string[];
}


export type Es_DayData = {
    short: 'Lun' | 'Mar' | 'Mi' | 'Ju' | 'Vi' | 'Sab' | 'Dom';
    long: Weekday
}

export type En_DayData = {
    short: 'Mon' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
    long: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
}

export type DayData = {
    es: Es_DayData;
    en: En_DayData
}

export interface Product {
    id: string;
    store: string;
    created_at: Date;
    updated_at: Date;
    name: string;
    price: number;
    tags?: string[];
    images: string[];
    enabled: boolean;
    reference: string;
    description: string;
}

export interface PurifiedProduct {
    id: string;
    imageUrl: string;
    nombre: string;
    precio: string;
}