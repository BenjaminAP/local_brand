import {AUTH_RETRIEVED, AuthActions, CLEAR_AUTH} from './auth.action';
import {IAuth} from '../../models/i.auth';

export interface IAuthState {
  authDetails: IAuth;
}

export const initialState: IAuthState = {
  authDetails: {
    token: null,
    signInProvider: null,
    claims: null,
    connected: false
  }
};

export function authReducer(state: IAuthState = initialState, action: AuthActions): IAuthState {

  switch (action.type) {

    case AUTH_RETRIEVED: {
      return {
        ...state,
        authDetails: action.payload,
      };
    }

    case CLEAR_AUTH: {
      return {
        ...state,
        authDetails: initialState.authDetails,
      };
    }

    default:
      return state;

  }
}
