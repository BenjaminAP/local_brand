import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {IShop} from '../../models/i.shop';
import {IShopState} from '../../store/shops';
import {Observable} from 'rxjs';
import * as ShopSelector from '../../store/shops/shop.selector';
import * as AuthSelector from '../../store/auth/auth.selector';
import {LoadAllShops} from '../../store/shops';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  allShops$: Observable<IShop[]>;
  filteredShops$: Observable<Set<IShop> | IShop[]>;
  userFavoriteShops$: Observable<Set<string>>;

  constructor(private store: Store<IShopState>) {
    this.allShops$ = this.store.select(ShopSelector.allShops);
    this.filteredShops$ = this.store.select(ShopSelector.filteredShops);
    this.userFavoriteShops$ = this.store.select(AuthSelector.userFavoriteShops);
    this.store.dispatch(new LoadAllShops());
  }
}
