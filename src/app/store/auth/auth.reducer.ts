import {AuthActions, LOGIN_COMPLETED, LOGOUT_COMPLETED} from './auth.action';
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

    case LOGIN_COMPLETED: {

      return {
        ...state,
        authDetails: action.payload,
      };
    }


    case LOGOUT_COMPLETED: {
      return {
        ...state,
        authDetails: initialState.authDetails,
      };
    }

    default:
      return state;

  }
}
