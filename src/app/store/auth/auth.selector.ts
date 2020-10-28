import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthState} from './auth.reducer';
import * as firebase from 'firebase';

export const authFeaturesSelector = createFeatureSelector<IAuthState>('auth');

export const authDetails = createSelector(
  authFeaturesSelector,
  (state: IAuthState): firebase.auth.AdditionalUserInfo => state.auth,
);
