import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {IShop} from "../../models/i.shop";
import * as Shop from "../../actions/shop.action";
import {ShopState} from "../../reducers/stores.reducer";
import {Observable} from "rxjs";
import {selectAllShops} from "../../selectors/shop.selector";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private store: Store<{shops: IShop[]}>) {
    this.store.dispatch({type: Shop.LOAD_SHOPS});
  }

  getAllShops(): Observable<IShop[]> {
    return this.store.select(selectAllShops);
  }
}
