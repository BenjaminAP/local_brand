import {Action} from '@ngrx/store';
import {IShop} from '../../models/i.shop';

export const LOAD_SHOPS_STARTED = '[Shops] Load Shops';
export const LOAD_SHOPS_COMPLETED = '[Shops] Load Shops Successful';
export const TOGGLE_FILTER = '[Shops] TOGGLE FILTER';
export const NEXT_SHOPS = '[Shops] Next shops';

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

export class NextShops implements Action {
  public readonly type = NEXT_SHOPS;
}

export type ShopActions = LoadAllShops
  | NextShops
  | LoadShopsCompleted
  | ToggleFilter;
