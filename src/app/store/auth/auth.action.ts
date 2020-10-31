import {Action} from '@ngrx/store';
import {IAuthState} from './auth.reducer';


export const INITIATE_LOGIN = '[Auth] Initiate Login';
export const LOGIN_COMPLETED = '[Auth] Login Completed';
export const LOGOUT = '[Auth] Logout';
export const CHECK_USER_LOGIN = '[Auth] Check User Login';
export const RECEIVE_USER_DATA_FROM_DB = '[Auth] User data from DB';

export class InitiateLogin implements Action {
  public readonly type = INITIATE_LOGIN;
}

export class LoginCompleted implements Action {
  public readonly type = LOGIN_COMPLETED;

  constructor(public payload: IAuthState) {}
}

export class CheckForUserLogin implements Action {
  public readonly type = CHECK_USER_LOGIN;

  constructor(public payload: IAuthState) {}
}

export class ReceiveUserData implements Action {
  public readonly type = RECEIVE_USER_DATA_FROM_DB;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  public readonly type = LOGOUT;
}

export type AuthActions =
  InitiateLogin
| LoginCompleted
| Logout
| CheckForUserLogin
| ReceiveUserData;


//// Todo: Need to make better logic path for retrieving user fav stores.
