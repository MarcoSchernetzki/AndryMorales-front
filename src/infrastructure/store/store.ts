import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../feature/users/reducer/reducer';
import { appointmentReducer } from '../../feature/wishes/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        products: appointmentReducer,
        users: userReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
