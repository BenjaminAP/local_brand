import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {IShop} from '../../models/i.shop';
import {ShopService} from './shop.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {AppService} from "../../service/app/app.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit{

  /// TODO: make a call to get the count of shops from the DB
  /// insert shopsCount  in this line:
  /// <mat-paginator [length]="(allShops$ | async)?.length * 20"

  allShops$: Observable<IShop[]>;
  allShopsMatrix$: Observable<IShop[][]>;
  filteredShops$: Observable<IShop[] | Set<IShop>>;
  favoriteShops$: Observable<Set<string>>;
  totalShops: Observable<number>;
  isLoading$: Observable<boolean>;

  columns: number;
  paginationIndex = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private shopService: ShopService, private appService: AppService) {
  }

  ngOnInit(): void {
    this.columns = this.columnNumber();
    // this.filteredShops$ = this.shopService.filteredShops();
    this.favoriteShops$ = this.shopService.favoriteShops();
    this.totalShops = this.shopService.totalShops();
    this.isLoading$ = this.appService.getIsLoadingSelector();
  }

  ngAfterViewInit(): void {
    this.allShops$ = this.shopService.allShops();
    this.allShopsMatrix$ = this.shopService.allShopsMatrix();
    this.allShopsMatrix$.subscribe(data => console.log('shop matrix', data));
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

    this.allShops$.subscribe((shops: IShop[]) => {
      if (shops.length <= this.paginationIndex * 10) {
        console.log('pagination', this.paginationIndex);
        this.shopService.nextShops();
      }
    }).unsubscribe();

  }
}
