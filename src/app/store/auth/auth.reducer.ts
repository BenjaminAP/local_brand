import {AuthActions, LOGIN_COMPLETED, LOGIN_FROM_STATE, LOGOUT, RECEIVE_USER_DATA_FROM_DB, TOGGLE_FAV_SHOP} from './auth.action';
import {IUser} from '../../models/i.user';
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
        authDetails: action.payload.authDetails,
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

