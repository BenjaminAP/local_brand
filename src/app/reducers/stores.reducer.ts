
import {IShop} from '../models/i.shop';
import {Action, createReducer, on} from '@ngrx/store';
import * as Shop from '../actions/shop.action';


export interface ShopState {
  shops: IShop[];
}

export const initialState: ShopState = {
  shops: [],
};

export function reducer(state: ShopState = initialState, action: Shop.Actions): ShopState {
  switch (action.type){
    case(Shop.LOAD_SHOPS):
    case(Shop.LOAD_SHOPS_SUCCESSFUL):
      return action.payload;
  }
}

