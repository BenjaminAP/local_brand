import {ShopState} from '../reducers/stores.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IShop} from "../models/i.shop";
import {IFilter} from "../models/i.filter";
import {filter} from "rxjs/operators";

export const shopFeaturesSelector = createFeatureSelector<ShopState>('shops');

export const allShops = createSelector(
  shopFeaturesSelector,
  (state: ShopState) => {

    const filterTypes = state.filters.filter((filter: IFilter) => filter.active)

    if (filterTypes.length != 0) {
      state.shops.map((shop: IShop) => {
        filterTypes.forEach((filter: IFilter) => {
          if (shop.store_type === filter.type || shop.attire_type === filter.type) {
            return shop;
          }
        })
      });
    }

    return state.shops;
  }
);

export const allFilters = createSelector(
  shopFeaturesSelector,
  (state: ShopState) => state.filters,
);
