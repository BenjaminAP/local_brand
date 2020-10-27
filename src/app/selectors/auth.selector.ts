import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "../reducers/auth.reducer";

export const authFeaturesSelector = createFeatureSelector<AuthState>('auth');

export const authDetails = createSelector(
  authFeaturesSelector,
  (state: AuthState) => state,
);
