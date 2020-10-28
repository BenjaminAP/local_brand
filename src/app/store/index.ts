import * as auth from './auth';
import * as shop from './shops';
import {ActionReducerMap} from '@ngrx/store';

export interface IAppState {
  auth: auth.IAuthState;
  shops: shop.IShopState;
}

export const reducers: ActionReducerMap<IAppState> = {
  auth: auth.authReducer,
  shops: shop.shopReducer
};
