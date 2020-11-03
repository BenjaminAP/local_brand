import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IUserState} from './user.reducer';
import {IUser} from '../../models/i.user';

export const userFeaturesSelector = createFeatureSelector<IUserState>('user');

export const userFavoriteShops = createSelector(
  userFeaturesSelector,
  (state: IUserState) => {

    if (state.user === undefined){
      return new Set<string>();
    }

    return new Set<string>(state.user.fav_stores);
  },
);

export const userDetailsSelector = createSelector(
  userFeaturesSelector,
  (state: IUserState): IUser => state.user,
);
