import {ShopState} from '../reducers/stores.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IShop} from '../models/i.shop';

export const shopFeaturesSelector = createFeatureSelector<ShopState>('shops');

export const allShops = createSelector(
  shopFeaturesSelector,
  (state: ShopState) => state.shops,
);

export const filteredShops = createSelector(
  shopFeaturesSelector,
(state : ShopState) => {

      const activeFilters: Array<string> = [];
      const filteredShopsList = new Set();

      state.filters.forEach(f => {
        if (f.active) {
          activeFilters.push(f.type);
        }
      });

      if (activeFilters.length !== 0) {
        state.shops.forEach(shop => {
          activeFilters.forEach(filterType => {
            if (filterType === shop.store_type || filterType === shop.attire_type) {
              filteredShopsList.add(shop);
            }
          });
        });

        return filteredShopsList;
      }

      return state.shops;
  },
);

export const allFilters = createSelector(
  shopFeaturesSelector,
  (state: ShopState) => state.filters,
);
