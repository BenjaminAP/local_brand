import {AuthActions, LOGIN_COMPLETED} from './auth.action';

export interface IAuthState {
  auth: any | undefined;
}

export const initialState: IAuthState = {
  auth: undefined
};

export function authReducer(state: IAuthState = initialState, action: AuthActions): IAuthState {

  switch (action.type) {

    case LOGIN_COMPLETED:
      console.log('reducer', action.payload);
      return {
        ...state,
        auth: action.payload
      };

    default:
      return state;

  }
}

