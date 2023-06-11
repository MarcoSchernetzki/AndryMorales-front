import { EventApi } from '@fullcalendar/core';

export type Category = 'producto' | 'servicio';
export type Area = 'cejas' | 'pestañas' | 'manicura';

export type ProtoProductI = {
    id?: string;
    name?: string;
    image?: string;
    price?: number;
    category?: Category;
    area?: Area;
    description?: string;
    duration?: string;
    isAvailable?: boolean;
    clients?: Array<string>;
};

export type ProductI = {
    id?: string;
    name: string;
    image: string;
    price: number;
    category: Category;
    area: Area;
    description: string;
    duration: string;
    isAvailable: boolean;
    clients: Array<string>;
};

export interface DemoAppState {
    weekendsVisible: boolean;
    currentEvents: EventApi[];
}
