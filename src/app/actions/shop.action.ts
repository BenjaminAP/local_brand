import {Action} from '@ngrx/store';
import {IShop} from '../models/i.shop';



export const LOAD_SHOPS_STARTED = '[Shops] Load Shops';
export const LOAD_SHOPS_COMPLETED = '[Shops] Load Shops Successful';

export class LoadAllShops implements Action {
  public readonly type = LOAD_SHOPS_STARTED;
}

export class LoadShopsCompleted implements Action {
  public readonly type = LOAD_SHOPS_COMPLETED;

  constructor(public payload: IShop[]) {}
}

export type ShopActions = LoadAllShops | LoadShopsCompleted;
