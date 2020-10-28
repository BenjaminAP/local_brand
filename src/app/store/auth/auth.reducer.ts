import {AuthActions, LOGIN_COMPLETED} from './auth.action';
import * as firebase from 'firebase';

export interface IAuthState {
  auth: firebase.auth.AdditionalUserInfo| any;
}

export const initialState: IAuthState = {
  auth: undefined
};

export function authReducer(state: IAuthState = initialState, action: AuthActions): IAuthState {

  switch (action.type) {

    case LOGIN_COMPLETED:
      return {
        ...state,
        auth: action.payload
      };

    default:
      return state;

  }
}

