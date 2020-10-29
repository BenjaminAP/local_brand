import {AuthActions, LOGIN_COMPLETED} from './auth.action';
import * as firebase from 'firebase';
import {IUser} from "../../models/i.user";
import {IAuth} from "../../models/i.auth";

export interface IAuthState {
  user: IUser;
  authDetails: IAuth;
}

export const initialState: IAuthState = {
  user: undefined,
  authDetails: undefined
};

export function authReducer(state: IAuthState = initialState, action: AuthActions): IAuthState {

  switch (action.type) {

    case LOGIN_COMPLETED:
      return {
        ...state,
        user: action.payload.user,
        authDetails: action.payload.authDetails,
      };

    default:
      return state;

  }
}

