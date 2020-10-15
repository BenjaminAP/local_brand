import {Action} from '@ngrx/store';
import {IShop} from '../models/i.shop';



export const LOAD_SHOPS = '[Shops] Load Shops';
export const LOAD_SHOPS_SUCCESSFUL = '[Shops] Load Shops Successful';

export class LoadAllShops implements Action {
  type = LOAD_SHOPS;

  constructor(public payload: any) {
  }
}

export class LoadShopsSuccessful implements Action {
  type = LOAD_SHOPS_SUCCESSFUL;

  constructor(public payload: IShop[]) {
  }
}

export type Actions = LoadAllShops | LoadShopsSuccessful;

