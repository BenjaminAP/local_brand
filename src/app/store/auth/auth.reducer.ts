import {AuthActions, CHECK_USER_LOGIN, INITIATE_LOGIN, LOGIN_COMPLETED, LOGOUT, RECEIVE_USER_DATA_FROM_DB} from './auth.action';
import {IUser} from '../../models/i.user';
import {IAuth} from '../../models/i.auth';

export interface IAuthState {
  user: IUser;
  authDetails: IAuth;
}

export const initialState: IAuthState = {
  user: undefined,
  authDetails: {
    isNewUser: null,
    verified_email: null,
    access_token: null,
    provider_id: null,
    refresh_token: null,
    connected: false
  }
};

export function authReducer(state: IAuthState = initialState, action: AuthActions): IAuthState {

  switch (action.type) {

    case RECEIVE_USER_DATA_FROM_DB: {
      return {
        ...state,
        user: {...state.user, fav_stores: action.payload}
      };
    }

    case LOGIN_COMPLETED: {
      return {
        ...state,
        user: action.payload.user,
        authDetails: action.payload.authDetails,
      };
    }

    case CHECK_USER_LOGIN: {

      if (action.payload.authDetails.refresh_token === undefined) {
        return state;
      }

      return {
        ...state,
        user: action.payload.user,
        authDetails: action.payload.authDetails,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        user: initialState.user,
        authDetails: initialState.authDetails,
      };
    }

    default:
      return state;

  }
}

