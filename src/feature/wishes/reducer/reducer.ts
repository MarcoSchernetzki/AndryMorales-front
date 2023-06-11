import { createReducer } from '@reduxjs/toolkit';
import { ProductI } from '../model/product';
import * as ac from './action.creator';

const initialState: {
    products: Array<ProductI>;
    selectedProduct: ProductI | null;
} = {
    products: [],
    selectedProduct: null,
};

export const appointmentReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (state, action) => ({
        ...state,
        products: action.payload,
    }));

    builder.addCase(ac.addActionCreator, (state, action) => ({
        ...state,
        products: [...state.products, action.payload],
    }));

    builder.addCase(ac.updateActionCreator, (state, action) => ({
        ...state,
        products: state.products.map((item) =>
            item.id === action.payload.id ? action.payload : item
        ),
    }));

    builder.addCase(ac.deleteActionCreator, (state, action) => ({
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
    }));

    builder.addCase(ac.selectActionCreator, (state, action) => ({
        ...state,
        selectedProduct: action.payload,
    }));

    builder.addDefaultCase((state) => state);
});
