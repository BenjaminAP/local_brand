import {Action} from '@ngrx/store';
import {IShop} from '../models/i.shop';
import {IFilter} from '../models/i.filter';



export const LOAD_SHOPS_STARTED = '[Shops] Load Shops';
export const LOAD_SHOPS_COMPLETED = '[Shops] Load Shops Successful';
export const TOGGLE_FILTER = '[Shops] TOGGLE FILTER';

export class LoadAllShops implements Action {
  public readonly type = LOAD_SHOPS_STARTED;
}

export class LoadShopsCompleted implements Action {
  public readonly type = LOAD_SHOPS_COMPLETED;

  constructor(public payload: IShop[]) {}
}
export class ToggleFilter implements Action {
  public readonly type = TOGGLE_FILTER;

  constructor(public payload: string) {}
}

export type ShopActions = LoadAllShops
  | LoadShopsCompleted
  | ToggleFilter;
