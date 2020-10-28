import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthState} from './auth.reducer';

export const authFeaturesSelector = createFeatureSelector<IAuthState>('auth');

export const authDetails = createSelector(
  authFeaturesSelector,
  (state: IAuthState) => state,
);
