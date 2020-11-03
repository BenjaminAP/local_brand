import * as auth from './auth';
import * as shop from './shops';
import * as user from './user';

import {ActionReducerMap} from '@ngrx/store';

export interface IAppState {
  auth: auth.IAuthState;
  shops: shop.IShopState;
  user: user.IUserState;
}

export const reducers: ActionReducerMap<IAppState> = {
  auth: auth.authReducer,
  shops: shop.shopReducer,
  user: user.userReducer
};
