import {ShopState} from "../reducers/stores.reducer";
import {createSelector} from "@ngrx/store";
import {IShop} from "../models/i.shop";

export const selectShops = (state: ShopState) => state.shops;
export const selectFilter = (state: ShopState) => state.filter;

export const selectAllShops = createSelector(
  selectShops,
  (allShops: IShop[]) => {
    return allShops;
  }
)

export const selectAllFilters = createSelector(
  selectFilter,
  (allFilters: string[]) => {
    return allFilters;
  }
)
