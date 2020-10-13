import {Action, createAction, props} from '@ngrx/store';
import {IShop} from '../models/i.shop';

export const loadAllShops =  createAction(
  '[Shops] Load shops',
  props<{shops: IShop}>(),
);
