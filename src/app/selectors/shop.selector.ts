import {ShopState} from '../reducers/stores.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const shopFeaturesSelector = createFeatureSelector<ShopState>('shops');

export const allShops = createSelector(
  shopFeaturesSelector,
  (state: ShopState) => state.shops,
);

export const allFilters = createSelector(
  shopFeaturesSelector,
  (state: ShopState) => state.filter,
);
