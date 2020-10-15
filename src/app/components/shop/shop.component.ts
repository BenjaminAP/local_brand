import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IShop} from "../../models/i.shop";
import {Store} from "@ngrx/store";
import * as Shop from "../../actions/shop.action";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops$: Observable<IShop[]> = this.store.select(state => state.shops);

  constructor(private store: Store<{shops: IShop[]}>) {
    this.shops$.subscribe((shops: IShop[]) => console.log(shops));
  }

  ngOnInit() {
    this.store.dispatch({type: Shop.LOAD_SHOPS});
  }

}
