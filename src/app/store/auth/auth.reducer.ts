import {AuthActions, LOGIN_COMPLETED, LOGIN_FROM_STATE, LOGOUT} from './auth.action';
import {IAuth} from '../../models/i.auth';

export interface IAuthState {
  authDetails: IAuth;
}

export const initialState: IAuthState = {
  authDetails: {
    isNewUser: null,
    verified_email: null,
    provider_id: null,
    connected: false
  }
};

export function authReducer(state: IAuthState = initialState, action: AuthActions): IAuthState {

  switch (action.type) {

    case LOGIN_COMPLETED: {
      return {
        ...state,
        authDetails: action.payload,
      };
    }

    case LOGIN_FROM_STATE: {

      return {
        ...state,
        authDetails: action.payload,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        authDetails: initialState.authDetails,
      };
    }

    default:
      return state;

  }
}
