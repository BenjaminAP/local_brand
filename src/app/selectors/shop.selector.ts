import {ShopState} from '../reducers/stores.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {shops, filters} from '../reducers/stores.reducer';

export const shopsSelector = createFeatureSelector<ShopState>('shops');

export const allShops = createSelector(
  shopsSelector,
  shops,
);

export const allFilters = createSelector(
  shopsSelector,
  filters,
);
