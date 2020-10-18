
import {IShop} from '../models/i.shop';
import * as Shop from '../actions/shop.action';


export interface ShopState {
  filter: string[]
  shops: IShop[];
}

export const initialState: ShopState = {
  filter: ['All'],
  shops: [],
};

export function reducer(state: ShopState = initialState, action: Shop.Actions): ShopState {
  switch (action.type){
    case(Shop.LOAD_SHOPS):
    case(Shop.LOAD_SHOPS_SUCCESSFUL):
      return action.payload;
  }
}

