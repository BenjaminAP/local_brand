import {Action} from '@ngrx/store';
import {IAuth} from '../../models/i.auth';


export const INITIATE_LOGIN = '[Auth] Initiate Login';
export const LOGIN_COMPLETED = '[Auth] Login Completed';
export const SIGNUP_USER = '[Auth] Signup User';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_FROM_STATE = '[Auth] Login from state';

export class InitiateLogin implements Action {
  public readonly type = INITIATE_LOGIN;
}

export class LoginCompleted implements Action {
  public readonly type = LOGIN_COMPLETED;

  constructor(public payload: IAuth) {}
}

export class LoginFromState implements Action {
  public readonly type = LOGIN_FROM_STATE;

  constructor(public payload: IAuth) {}
}

export class LogoutUser implements Action {
  public readonly type = LOGOUT;
}

export type AuthActions =
  InitiateLogin
| LoginCompleted
| LogoutUser
| LoginFromState;
