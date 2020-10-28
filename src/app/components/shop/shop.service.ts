import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {IShop} from '../../models/i.shop';
import {IShopState} from '../../store/shops/shop.reducer';
import {Observable} from 'rxjs';
import * as ShopSelector from '../../store/shops/shop.selector';
import {LoadAllShops} from '../../store/shops/shop.action';
import {IFilter} from '../../models/i.filter';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  allShops$: Observable<IShop[]>;
  filteredShops$: Observable<Set<IShop> | IShop[]>;

  constructor(private store: Store<IShopState>) {
    this.allShops$ = this.store.select(ShopSelector.allShops);
    this.filteredShops$ = this.store.select(ShopSelector.filteredShops);
    this.store.dispatch(new LoadAllShops());
  }
}
