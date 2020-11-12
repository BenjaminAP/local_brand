import {Action} from '@ngrx/store';
import {IAuth} from '../../models/i.auth';

export const RETRIEVE_AUTH = '[auth] Retrieve Authentication Info';
export const CLEAR_AUTH = '[auth] CLEAR AUTH';
export const INIT_LOGIN = '[auth] Init Login';
export const LOGIN_COMPLETED = '[auth] Login Completed';
export const LOGOUT = '[auth] Begin Logout';
export const LOGOUT_COMPLETED = '[auth] Logout Completed';


export class Login implements Action {
  public readonly type = INIT_LOGIN;
}

export class RetrieveAuth implements Action {
  public readonly type = RETRIEVE_AUTH;
}

export class LoginCompleted implements Action {
  public readonly type = LOGIN_COMPLETED;

  constructor(public payload: IAuth) {
  }
}

export class Logout implements Action {
  public readonly type = LOGOUT;
}

export class LogoutCompleted implements Action {
  public readonly type = LOGOUT_COMPLETED;
}

export class ClearAuth implements Action {
  public readonly type = CLEAR_AUTH;
}

export type AuthActions =
  Login
  | RetrieveAuth
  | LoginCompleted
  | ClearAuth
  | Logout
  | LogoutCompleted;
