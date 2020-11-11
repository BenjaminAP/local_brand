import {Action} from '@ngrx/store';
import {IAuth} from '../../models/i.auth';

export const RETRIEVE_AUTH = '[Auth] Retrieve Authentication Info';
export const AUTH_RETRIEVED = '[Auth] Login Completed';
export const CLEAR_AUTH = '[Auth] CLEAR AUTH';

export class RetrieveAuth implements Action {
  public readonly type = RETRIEVE_AUTH;
}

export class AuthRetrieved implements Action {
  public readonly type = AUTH_RETRIEVED;

  constructor(public payload: IAuth) {
  }
}

export class ClearAuth implements Action {
  public readonly type = CLEAR_AUTH;
}

export type AuthActions =
  RetrieveAuth
  | AuthRetrieved
  | ClearAuth;
