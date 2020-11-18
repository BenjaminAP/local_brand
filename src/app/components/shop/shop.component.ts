import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {IShop} from '../../models/i.shop';
import {ShopService} from './shop.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  /// TODO: make a call to get the count of shops from the DB
  /// insert shopsCount  in this line:
  /// <mat-paginator [length]="(allShops$ | async)?.length * 20"

  allShops$: Observable<Array<IShop[]>>;
  filteredShops$: Observable<IShop[] | Set<IShop>>;
  favoriteShops$: Observable<Set<string>>;
  totalShops: Observable<number>;

  columns: number;
  paginationIndex = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.columns = this.columnNumber();
    this.allShops$ = this.shopService.allShops();
    // this.filteredShops$ = this.shopService.filteredShops();
    this.favoriteShops$ = this.shopService.favoriteShops();
    this.totalShops = this.shopService.totalShops();
    this.allShops$.subscribe(data => console.log(data));
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

  pageHandler($event: PageEvent): void {
    this.paginationIndex = $event.pageIndex;

    this.allShops$.subscribe((shops: Array<IShop[]>) => {
      if (shops.length === this.paginationIndex) {
        console.log('page index', this.paginationIndex);
        console.log('shop length', shops.length);
        this.shopService.nextShops();
      }
    }).unsubscribe();

  }
}
