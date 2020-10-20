import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IShop} from '../../models/i.shop';
import {ShopService} from './shop.service';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops$: Observable<IShop[]>;
  filters$: Observable<string[]>;

  constructor(private shopService: ShopService) {
    this.shops$ = this.shopService.allShops$;
    this.filters$ = this.shopService.allFilters$;
  }

  ngOnInit(): void {

    this.shops$.subscribe(shop => console.log(shop));
    this.filters$.subscribe(filter => console.log(filter));
  }

}
