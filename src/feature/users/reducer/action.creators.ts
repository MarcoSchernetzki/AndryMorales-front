import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { UserI } from '../model/user';
import { ProductI } from '../../wishes/model/product';

export const loginActionCreator = createAction<{ user: UserI; token: string }>(
    actionTypes.login
);
export const logoutActionCreator = createAction<void>(actionTypes.logout);
export const getActionCreator = createAction<UserI>(actionTypes.get);
export const addProductActionUser = createAction<ProductI>(
    actionTypes.addProduct
);
export const updateProductActionUser = createAction<ProductI>(
    actionTypes.updateProduct
);
export const deleteProductActionUser = createAction<ProductI['id']>(
    actionTypes.deleteProduct
);
