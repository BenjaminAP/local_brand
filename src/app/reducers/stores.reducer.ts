
import {IShop} from '../models/i.shop';
import {Action, createReducer, on} from '@ngrx/store';
import * as ShopActions from '../actions/shop.action';


export interface IShopState {
  filter: string[];
  shops: IShop[];
}

export const initialState: IShopState = {
  filter: ['All'],
  shops: [],
};

const shopReducer = createReducer(
  initialState,
  on(ShopActions.loadAllShops, (existingState: IShopState) => ({
    ...existingState,
    shops: [...existingState.shops],
  }))
)

export function reducer(state: IShopState, action: Action){
  return shopReducer(state, action);
}

