import {Component, HostListener, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IShop} from '../../models/i.shop';
import {ShopService} from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  shops$: Observable<IShop[]>;
  filteredShops$: Observable<IShop[] | Set<IShop>>;
  favoriteShops$: Observable<Set<string>>;

  columns: number;

  constructor(private shopService: ShopService) {
    this.shops$ = this.shopService.allShops$;
    this.filteredShops$ = this.shopService.filteredShops$;
    this.favoriteShops$ = this.shopService.favoriteShops$;
  }

  ngOnInit(): void {
    this.columns = this.columnNumber();
  }

  toggleFavorite(shopId: string): void {
    this.shopService.toggleFavoriteShop(shopId);
    /// TODO: implement favorite toggle update/read/write from fire cloud
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

    return columnNumber;
}

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.columns = this.columnNumber();
  }

}
