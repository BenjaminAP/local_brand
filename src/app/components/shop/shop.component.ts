import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IShop} from '../../models/i.shop';
import {ShopService} from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops$: Observable<IShop[]>;
  filters$: Observable<string[]>;

  breakpoint;

  constructor(private shopService: ShopService) {
    this.shops$ = this.shopService.allShops$;
    this.filters$ = this.shopService.allFilters$;
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 4;
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 4;
  }

}
