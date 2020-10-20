
import {IShop} from '../models/i.shop';
import {LOAD_SHOPS_COMPLETED, ShopActions} from '../actions/shop.action';


export interface ShopState {
  filter: string[];
  shops: IShop[];
}

export const initialState: ShopState = {
  filter: ['All'],
  shops: [],
};

export function shopReducer(state: ShopState = initialState, action: ShopActions): ShopState {

  switch (action.type) {
    case LOAD_SHOPS_COMPLETED:
      return {
        ...state,
        shops: action.payload
      };
    default:
      return state;
  }
}

