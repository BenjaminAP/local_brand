import { Injectable } from '@angular/core';
import {IShop} from '../../models/i.shop';
import {Observable} from 'rxjs';
import {UserService} from '../../service/user/user.service';
import {AppService} from '../../service/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private userService: UserService, private appService: AppService) {
    this.appService.loadShops();
  }

  totalShops(): Observable<number> {
    return this.appService.getTotalShopSelector();
  }

  toggleFavoriteShop(shopId: string): void {
    this.appService.toggleFavShop(shopId);
  }

  allShops(): Observable<IShop[]> {
    return this.appService.getShopsSelector();
  }

  allShopsMatrix(): Observable<IShop[][]> {
    return this.appService.getShopsMatrixSelector();
  }
  //
  // filteredShops(): Observable<Set<IShop> | IShop[]> {
  //   return this.appService.getFilteredShopsSelector();
  // }

  favoriteShops(): Observable<Set<string>> {
    return this.userService.getFavShopIdsSelector();
  }

  nextShops(): void {
    this.appService.getNextShops();
  }
}
