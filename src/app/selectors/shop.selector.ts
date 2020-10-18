import {ShopState} from '../reducers/stores.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {shops, filters} from '../reducers/stores.reducer';

export const shopsSelector = createFeatureSelector<ShopState>('shops');

export const selectShops = (state: ShopState) => state.shops;
export const selectFilter = (state: ShopState) => state.filter;

export const allShops = createSelector(
  shopsSelector,
  shops,
);

export const allFilters = createSelector(
  shopsSelector,
  filters
);
