import {Action} from '@ngrx/store';
import {IAuthState} from './auth.reducer';
import {IAuth} from "../../models/i.auth";


export const INITIATE_LOGIN = '[Auth] Initiate Login';
export const LOGIN_COMPLETED = '[Auth] Login Completed';
export const SIGNUP_USER = '[Auth] Signup User';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_FROM_STATE = '[Auth] Login from state';
export const RECEIVE_USER_DATA_FROM_DB = '[Auth] User data from DB';
export const TOGGLE_FAV_SHOP = '[Shops] TOGGLE favorite shop';

export class InitiateLogin implements Action {
  public readonly type = INITIATE_LOGIN;
}

export class LoginCompleted implements Action {
  public readonly type = LOGIN_COMPLETED;

  constructor(public payload: IAuth) {}
}

export class LoginFromState implements Action {
  public readonly type = LOGIN_FROM_STATE;

  constructor(public payload: IAuthState) {}
}

/// TODO make store file for user.
export class ToggleFavShop implements Action {
  public readonly type = TOGGLE_FAV_SHOP;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  public readonly type = LOGOUT;
}

export type AuthActions =
  InitiateLogin
| LoginCompleted
| Logout
| LoginFromState
| ToggleFavShop;
