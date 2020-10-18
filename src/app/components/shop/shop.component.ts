import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IShop} from '../../models/i.shop';
import {Store} from '@ngrx/store';
import * as Shop from '../../actions/shop.action';
import {ShopState} from '../../reducers/stores.reducer';
import {ShopService} from "./shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops$: Observable<IShop[]>;
  filters$: Observable<string[]>;

  constructor(private shopService: ShopService) {
    this.shops$ = this.shopService.getAllShops();
    this.filters$ = this.shopService.getFilters();
  }

  ngOnInit(): void {
  }

}
