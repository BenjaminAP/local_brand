import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthState} from './auth.reducer';

export const authFeaturesSelector = createFeatureSelector<IAuthState>('auth');

export const authDetails = createSelector(
  authFeaturesSelector,
  (state: IAuthState): IAuthState => state,
);

export const userConnected = createSelector(
  authFeaturesSelector,
  (state: IAuthState): boolean => state.authDetails.connected,
);
