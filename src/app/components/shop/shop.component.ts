import {Component, HostListener, OnInit} from '@angular/core';
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
    this.columns = this.columnNumber();
    this.rowFormat = this.rowHeight();
  }

  columnNumber(): number {
    let columnNumber: number;
    const windowWidth = window.innerWidth;

    if (windowWidth <= 525) {
      columnNumber = 1;
    } else if (windowWidth <= 800)  {
      columnNumber = 2;
    } else if (windowWidth <= 1320)  {
      columnNumber = 3;
    }else if (windowWidth <= 2560)  {
      columnNumber = 5;
    } else {
      columnNumber = 4;
    }

    // console.log('width: ', windowWidth);
    return columnNumber;
}

  rowHeight(): string {
    let rowFormat: string;
    const windowHeight = window.innerHeight;

    if (windowHeight <= 747) {
      rowFormat = '1:1.5';
    } else if (windowHeight <= 1024) {
      rowFormat = '1:2';
    } else {
      // windowHeight <= 1366
      // windowHeight > 1024
      rowFormat = '1:1.5';
    }

    // console.log('height: ', windowHeight);
    return rowFormat;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.columns = this.columnNumber();
    this.rowFormat = this.rowHeight();
  }

}
