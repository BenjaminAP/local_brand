import {IUser} from '../../models/i.user';
import {
  CLEAR_USER_DATA,
  RECEIVE_USER_DATA,
  RECEIVE_USER_FAV_SHOPS,
  TOGGLE_FAV_SHOP,
  UserActions
} from './user.action';


export interface IUserState {
  user: IUser;
}

export const initialState: IUserState = {
  user: {
    full_name: null,
      picture: null,
      email: null,
      uid: null,
      fav_shops_ids: new Set<string>()
  },
};

export function userReducer(state: IUserState = initialState, action: UserActions): IUserState {

  switch (action.type) {

    case RECEIVE_USER_DATA: {
      localStorage.setItem('userDetails', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload
      };
    }

    case RECEIVE_USER_FAV_SHOPS: {

      if (localStorage.getItem('userDetails')) {
        const user: IUser = JSON.parse(localStorage.getItem('userDetails'));
        user.fav_shops_ids = action.payload;

        localStorage.setItem('userDetails', JSON.stringify(user));
      }

      return {
        ...state,
        user: {...state.user, fav_shops_ids: action.payload}
      };
    }

    case CLEAR_USER_DATA: {
      return {
        ...state,
        user: initialState.user
      };
    }

    case TOGGLE_FAV_SHOP: {

      if (state.user.fav_shops_ids.has(action.payload)) {
        state.user.fav_shops_ids.delete(action.payload);
      } else {
        state.user.fav_shops_ids.add(action.payload);
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
