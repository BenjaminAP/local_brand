import { Injectable } from '@angular/core';
import {IShop} from '../../models/i.shop';
import {Observable} from 'rxjs';
import {UserService} from '../../service/user/user.service';
import {AppService} from '../../service/app/app.service';
import {Store} from "@ngrx/store";
import {IFilter2, IFilter3} from '../../models/i.filter';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private userService: UserService, private appService: AppService) {
    this.appService.loadShops();
  }

  filtersTypeSelector(): Observable<IFilter3> {
    return this.appService.getFilterTypeSelector();
  }

  totalShops(): Observable<number> {
    return this.appService.getTotalShopSelector();
  }

  toggleFavoriteShop(shopId: string): void {
    this.appService.toggleFavShop(shopId);
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
