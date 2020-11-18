import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IUserState} from './user.reducer';
import {IUser} from '../../models/i.user';

export const userFeaturesSelector = createFeatureSelector<IUserState>('user');

export const favShopsSelector$ = createSelector(
  userFeaturesSelector,
  (state: IUserState): Set<string> => state.user.fav_shops_ids,
);

export const userDetailsSelector = createSelector(
  userFeaturesSelector,
  (state: IUserState): IUser => state.user,
);
