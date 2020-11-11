import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthState} from './auth.reducer';

export const authFeaturesSelector = createFeatureSelector<IAuthState>('auth');

export const authDetails = createSelector(
  authFeaturesSelector,
  (state: IAuthState): IAuthState => state,
);

export const connectedSelector = createSelector(
  authFeaturesSelector,
  (state: IAuthState): boolean => state.authDetails.connected,
);

export const adminSelector = createSelector(
  authFeaturesSelector,
  (state: IAuthState): { [p: string]: any } => {

    if (state.authDetails.claims === null || state.authDetails.claims['admin'] === undefined) {
      return null;
    }

    return state.authDetails.claims['admin'];
  }
);
