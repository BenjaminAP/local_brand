import {AuthActions, LOGIN_COMPLETED, LOGIN_FROM_STATE, LOGOUT, RECEIVE_USER_DATA_FROM_DB, TOGGLE_FAV_SHOP} from './auth.action';
import {IUser} from '../../models/i.user';
import {IAuth} from '../../models/i.auth';

export interface IAuthState {
  user: IUser;
  authDetails: IAuth;
}

export const initialState: IAuthState = {
  user: {
    full_name: null,
    picture: null,
    email: null,
    uid: null,
    fav_stores: new Set<string>()
  },
  authDetails: {
    isNewUser: null,
    verified_email: null,
    provider_id: null,
    connected: false
  }
};

export function authReducer(state: IAuthState = initialState, action: AuthActions): IAuthState {

  switch (action.type) {

    case RECEIVE_USER_DATA_FROM_DB: {
      return {
        ...state,
        user: {...state.user, fav_stores: new Set<string>(action.payload)}
      };
    }

    case LOGIN_COMPLETED: {
      return {
        ...state,
        user: action.payload.user,
        authDetails: action.payload.authDetails,
      };
    }

    case LOGIN_FROM_STATE: {

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

    case TOGGLE_FAV_SHOP: {

      if (state.user.fav_stores.has(action.payload)) {
        state.user.fav_stores.delete(action.payload);
      } else {
        state.user.fav_stores.add(action.payload);
      }

      return {
        ...state,
        user: {...state.user}
      };
    }

    default:
      return state;

  }
}

