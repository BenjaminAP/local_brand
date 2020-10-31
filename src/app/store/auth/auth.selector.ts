import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthState} from './auth.reducer';
import {IUser} from '../../models/i.user';

export const authFeaturesSelector = createFeatureSelector<IAuthState>('auth');

export const authDetails = createSelector(
  authFeaturesSelector,
  (state: IAuthState): IAuthState => state,
);

export const userDetails = createSelector(
  authFeaturesSelector,
  (state: IAuthState): IUser => state.user,
);

export const userConnected = createSelector(
  authFeaturesSelector,
  (state: IAuthState): boolean => state.authDetails.connected,
);
