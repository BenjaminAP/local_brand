import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {IShop} from '../../models/i.shop';
import {ShopState} from '../../reducers/stores.reducer';
import {Observable} from 'rxjs';
import * as ShopSelector from '../../selectors/shop.selector';
import {LOAD_SHOPS_STARTED, LoadAllShops} from '../../actions/shop.action';
import {IFilter} from '../../models/i.filter';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  allShops$: Observable<IShop[]>;
  allFilters$: Observable<IFilter[]>;

  constructor(private store: Store<ShopState>) {
    this.allShops$ = this.store.select(ShopSelector.allShops);
    this.allFilters$ = this.store.select(ShopSelector.allFilters);
    this.store.dispatch(new LoadAllShops());
  }
}
