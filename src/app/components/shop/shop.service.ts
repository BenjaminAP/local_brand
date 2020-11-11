import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {IShop} from '../../models/i.shop';
import {IShopState} from '../../store/shops';
import {Observable} from 'rxjs';
import * as ShopSelector from '../../store/shops/shop.selector';
import * as UserSelector from '../../store/user/user.selector';
import {LoadAllShops} from '../../store/shops';
import {ToggleFavShop} from '../../store/user';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  allShops$: Observable<IShop[]>;
  filteredShops$: Observable<Set<IShop> | IShop[]>;
  favoriteShops$: Observable<Set<string>>;

  constructor(private store: Store<IShopState>) {
    this.allShops$ = this.store.select(ShopSelector.allShops);
    this.filteredShops$ = this.store.select(ShopSelector.filteredShops);
    this.favoriteShops$ = this.store.select(UserSelector.favShopsSelector$);
    this.store.dispatch(new LoadAllShops());
  }

  toggleFavoriteShop(shopId: string): void {
    this.store.dispatch(new ToggleFavShop(shopId));
  }
}
