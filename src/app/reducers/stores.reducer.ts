
import {IShop} from '../models/i.shop';
import {Action, createReducer, on} from '@ngrx/store';
import * as Shop from '../actions/shop.action';


export interface IShopState {
  filter: string[];
  shops: IShop[];
}

export const initialState: IShopState = {
  filter: ['All'],
  shops: [],
};

// const shopReducer = createReducer(
//   initialState,
//   on(ShopActions.LoadAllShops, state => ({...state, shops: state.shops})),
//   on(ShopActions.loadShopsSuccessful, state => {
//     console.log(state)
//     return ({...state, shops: state.shops})
//   })
// );

export function reducer(state = initialState, action: Shop.Actions): IShopState{
  switch(action.type){
    case(Shop.LOAD_SHOPS):
    case(Shop.LOAD_SHOPS_SUCCESSFUL):
      return {
        filter: ['All'],
        shops: action.payload,
      }

  }
}

