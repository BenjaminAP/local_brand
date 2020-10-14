import { Component, OnInit } from '@angular/core';
import {ShopService} from '../../service/shop.service';
import {Observable} from "rxjs";
import {IShop} from "../../models/i.shop";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops$: Observable<IShop[]> = this.store.select(state => state.shops);

  constructor(private store: Store<{shops: IShop[]}>) {
    this.shops$.subscribe(shop => console.log(shop));
  }

  ngOnInit() {
    this.store.dispatch({type: '[Shops] Load Shops'});
  }

}
