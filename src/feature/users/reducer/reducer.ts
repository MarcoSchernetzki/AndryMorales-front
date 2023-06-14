import { createReducer } from '@reduxjs/toolkit';
import { UserI } from './../model/user';
import * as ac from './action.creators';

const initialState: {
    user: UserI | null;
    token: string | null;
    isLogged: boolean;
} = { isLogged: false, token: '', user: null };

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loginActionCreator, (state, action) => ({
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogged: !!action.payload.token,
    }));

    builder.addCase(ac.logoutActionCreator, (state) => ({
        ...state,
        user: null,
        token: null,
        isLogged: false,
    }));

    builder.addCase(ac.getActionCreator, (state, action) => ({
        ...state,
        user: action.payload,
    }));

    builder.addCase(ac.addProductActionUser, (state, action) => ({
        ...state,
        user: {
            ...state.user,
            myAppointments: [
                ...(state.user as UserI).myAppointments,
                action.payload,
            ],
        } as UserI,
    }));

    builder.addCase(ac.updateProductActionUser, (state, action) => ({
        ...state,
        user: {
            ...state.user,
            myAppointments: [...(state.user as UserI).myAppointments].map(
                (item) =>
                    item.id === action.payload.id ? action.payload : item
            ),
        } as UserI,
    }));

    builder.addCase(ac.deleteProductActionUser, (state, action) => ({
        ...state,
        user: {
            ...state.user,
            myAppointments: state.user?.myAppointments.filter(
                (item) => item.id !== action.payload
            ),
        } as UserI,
    }));

    builder.addDefaultCase((state) => state);
});
