import { Injectable } from '@angular/core';
import {IShop} from '../../models/i.shop';
import {Observable} from 'rxjs';
import {UserService} from "../../service/user/user.service";
import {AppService} from "../../service/app/app.service";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  allShops$: Observable<IShop[]>;
  filteredShops$: Observable<Set<IShop> | IShop[]>;
  favoriteShops$: Observable<Set<string>>;

  constructor(private userService: UserService, private appService: AppService) {
    this.appService.loadShops();
    this.allShops$ = this.appService.getShopsSelector();
    this.filteredShops$ = this.appService.getFilteredShopsSelector();
    this.favoriteShops$ = this.userService.getFavShopIdsSelector();
  }

  toggleFavoriteShop(shopId: string): void {
    this.appService.toggleFavShop(shopId);
  }
}
