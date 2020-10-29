import {Action} from '@ngrx/store';
import * as firebase from 'firebase';
import {IAuthState} from "./auth.reducer";


export const INITIATE_LOGIN = '[Auth] Initiate Login';
export const LOGIN_COMPLETED = '[Auth] Login Completed';

export class InitiateLogin implements Action {
  public readonly type = INITIATE_LOGIN;

}

export class LoginCompleted implements Action {
  public readonly type = LOGIN_COMPLETED;

  constructor(public payload: IAuthState) {}
}

export type AuthActions =
  InitiateLogin
| LoginCompleted;
