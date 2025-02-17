import { Injectable } from '@angular/core';
import {IShop} from '../../models/i.shop';
import { Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {
  IAuthState
} from '../../store/auth';
import { ToggleFavShop} from '../../store/user';
import * as ShopSelector from '../../store/shops/shop.selector';
import {LoadAllShops, ToggleFilter, allFilters, NextShops} from '../../store/shops';
import {IFilter} from '../../models/i.filter';
import {AngularFirestore} from '@angular/fire/firestore';
import {totalShopCount} from "../../store/shops";
// @ts-ignore
// import {default as jsonShops} from './local_brands.json';
// import {json} from 'express';
// import {hidePoweredBy} from 'helmet';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  temp: Observable<any>;

  constructor(private afStore: AngularFirestore,
              private store: Store<IAuthState>) {

    // this.temp = db.list('shops').valueChanges();
    // this.temp.subscribe(shops => console.log(shops));
  }

  getTotalShopSelector(): Observable<number> {
    return this.store.select(totalShopCount)
  }

  public toggleFilter(filterId: string): void {
    this.store.dispatch(new ToggleFilter(filterId));
  }


  public getFiltersSelector(): Observable<IFilter[]> {
    return this.store.select(allFilters);
  }

  public getShopsSelector(): Observable<Array<IShop[]>> {
    return this.store.select(ShopSelector.allShops);
  }

  // public getFilteredShopsSelector(): Observable<IShop[] | Set<IShop>> {
  //   return this.store.select(filteredShops);
  // }

  public loadShops(): void {
    this.store.dispatch(new LoadAllShops());
  }

  public toggleFavShop(shopId: string): void {
    this.store.dispatch(new ToggleFavShop(shopId));
  }

  public getNextShops(): void {
    this.store.dispatch(new NextShops());
  }

}
