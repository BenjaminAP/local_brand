import {Action} from '@ngrx/store';
import {IShop} from '../../models/i.shop';
import {IFilter, IFilter2, IFilter3} from '../../models/i.filter';

export const LOAD_SHOPS_STARTED = '[Shops] Load Shops';
export const LOAD_SHOPS_COMPLETED = '[Shops] Load Shops Successful';
export const TOGGLE_FILTER = '[Shops] TOGGLE FILTER';
export const NEXT_SHOPS = '[Shops] Next shops';
export const TOTAL_SHOP_COUNT = '[Shops] Total shop count';
export const TOTAL_SHOP_COUNT_LOADED = '[Shops] Total shop count loaded';
export const SAVE_FILTERS_TYPE = '[Shops] Save Filters in DB';
export const SAVE_FILTERS_TYPE_COMPLETED = '[Shops] Save Filters in DB Completed';
export const LOAD_FILTER_TYPE_STARTED = '[Shops] Started Filters Type Download';
export const LOAD_FILTER_TYPE_COMPLETED = '[Shops] Completed Filters Type Download';


export class SaveFilterTypeCompleted implements Action {
  public readonly type = SAVE_FILTERS_TYPE;
}

export class SaveFiltersType implements Action {
  public readonly type = SAVE_FILTERS_TYPE;
}

export class LoadFilterTypes implements Action {
  public readonly type = LOAD_FILTER_TYPE_STARTED;
}

export class LoadFilterTypesCompleted implements Action {
  public readonly type = LOAD_FILTER_TYPE_COMPLETED;

  constructor(public payload: IFilter3) {}
}

export class LoadAllShops implements Action {
  public readonly type = LOAD_SHOPS_STARTED;
}

export class TotalShopCountLoaded implements Action {
  public readonly type = TOTAL_SHOP_COUNT_LOADED;

  constructor(public payload: number) {}
}

export class LoadTotalShopCount implements Action {
  public readonly type = TOTAL_SHOP_COUNT;
}

export class LoadShopsCompleted implements Action {
  public readonly type = LOAD_SHOPS_COMPLETED;

  constructor(public payload: IShop[]) {}
}

export class ToggleFilter implements Action {
  public readonly type = TOGGLE_FILTER;

  constructor(public payload: {filter: IFilter, section: string} ) {}
}

export class NextShops implements Action {
  public readonly type = NEXT_SHOPS;
}

export type ShopActions = LoadAllShops
  | TotalShopCountLoaded
  | LoadTotalShopCount
  | NextShops
  | LoadShopsCompleted
  | SaveFiltersType
  | SaveFilterTypeCompleted
  | ToggleFilter
  | LoadFilterTypes
  | LoadFilterTypesCompleted;
