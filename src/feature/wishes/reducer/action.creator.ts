import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { ProductI } from '../model/product';

export const loadActionCreator = createAction<ProductI[]>(actionTypes.load);
export const addActionCreator = createAction<ProductI>(actionTypes.add);
export const updateActionCreator = createAction<ProductI>(actionTypes.update);
export const deleteActionCreator = createAction<ProductI['id']>(
    actionTypes.delete
);
export const selectActionCreator = createAction<ProductI>(actionTypes.select);
