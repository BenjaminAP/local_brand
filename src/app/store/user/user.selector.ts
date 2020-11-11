import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IUserState} from './user.reducer';
import {IUser} from '../../models/i.user';

export const userFeaturesSelector = createFeatureSelector<IUserState>('user');

export const favShopsSelector$ = createSelector(
  userFeaturesSelector,
  (state: IUserState) => {

    if (state.user === undefined) {
      return new Set<string>();
    }

    return state.user.fav_stores;
  },
);

export const userDetailsSelector = createSelector(
  userFeaturesSelector,
  (state: IUserState): IUser => state.user,
);
