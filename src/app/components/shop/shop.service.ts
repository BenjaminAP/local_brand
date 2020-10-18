import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {IShop} from '../../models/i.shop';
import * as Shop from '../../actions/shop.action';
import {ShopState} from '../../reducers/stores.reducer';
import {Observable} from 'rxjs';
import * as ShopSelector from '../../selectors/shop.selector';
import {LOAD_SHOPS_STARTED} from '../../actions/shop.action';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  allShops$: Observable<IShop[]>;
  allFilters$: Observable<string[]>;

  constructor(private store: Store<ShopState>) {
    this.allShops$ = this.store.select(ShopSelector.allShops);
    this.allFilters$ = this.store.select(ShopSelector.allFilters);
    this.store.dispatch({type: LOAD_SHOPS_STARTED});
  }
}
