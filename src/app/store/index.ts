import * as auth from './auth';
import * as shop from './shops';
import * as user from './user';
import * as load from './loading';

import {ActionReducerMap} from '@ngrx/store';

export interface IAppState {
  auth: auth.IAuthState;
  shops: shop.IShopState;
  user: user.IUserState;
  load: load.ILoadingState;
}

export const reducers: ActionReducerMap<IAppState> = {
  auth: auth.authReducer,
  shops: shop.shopReducer,
  user: user.userReducer,
  load: load.loadingReducer
};
