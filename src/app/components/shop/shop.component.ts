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
  filteredShops$: Observable<IShop[] | Set<IShop>>;

  columns: number;
  rowFormat: string;

  constructor(private shopService: ShopService) {
    this.shops$ = this.shopService.allShops$;
    this.filteredShops$ = this.shopService.filteredShops$;
  }

  ngOnInit(): void {
    this.columns = 4;
    this.rowFormat = '1:1.5';
  }

  columnNumber(): number {
    let columnNumber: number;
    const windowWidth = window.innerWidth;

    if (windowWidth <= 414) {
      columnNumber = 1;
    } else if (windowWidth <= 800)  {
      columnNumber = 2;
    } else if (windowWidth <= 1024)  {
      columnNumber = 3;
    } else {
      columnNumber = 4;
    }

    return columnNumber;
}

  rowHeight(): string {
    let rowFormat: string;
    const windowHeight = window.innerHeight;

    if (windowHeight <= 823) {
      rowFormat = '1:1.5';
    } else if (windowHeight <= 1024) {
      rowFormat = '1:2';
    } else {
      // windowHeight <= 1366
      // windowHeight > 1024
      rowFormat = '1:1.5';
    }

    return rowFormat;
  }

  onResize(): void {
    this.columns = this.columnNumber();
    this.rowFormat = this.rowHeight();
  }

}
