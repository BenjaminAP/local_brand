import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IShop} from '../../models/i.shop';
import {Store} from '@ngrx/store';
import * as Shop from '../../actions/shop.action';
import {ShopState} from '../../reducers/stores.reducer';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops$: Observable<IShop[]>;

  constructor(private store: Store<{shops: IShop[]}>) {
    this.store.dispatch({type: Shop.LOAD_SHOPS});
  }

  ngOnInit(): void {
    this.shops$ = this.store.select((state: ShopState) => state.shops);
  }

}
