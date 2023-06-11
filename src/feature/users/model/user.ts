import { ProductI } from '../../wishes/model/product';

export type Role = 'user' | 'admin';

export type UserI = {
    id: string;
    name: string;
    email: string;
    passwd: string;
    role: Role;
    myAppointments: ProductI[];
};

export type ProtoUserI = {
    name: string;
    email: string;
    passwd: string;
    role: Role;
    myAppointments: ProductI[];
};

export type UserToken = {
    user: UserI;
    token: string;
};
