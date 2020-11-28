import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ILoadingState} from './loading.reducer';

export const loadFeaturesSelector = createFeatureSelector<ILoadingState>('load');

export const isLoadingSelector = createSelector(
  loadFeaturesSelector,
  (state: ILoadingState) => state.is_loading,
);
