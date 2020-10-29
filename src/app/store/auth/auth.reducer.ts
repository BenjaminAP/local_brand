import {AuthActions, LOGIN_COMPLETED, LOGOUT} from './auth.action';
import {IUser} from '../../models/i.user';
import {IAuth} from '../../models/i.auth';

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

    case LOGOUT:
      return {
        ...state,
        user: undefined,
        authDetails: undefined,
      };

    default:
      return state;

  }
}

