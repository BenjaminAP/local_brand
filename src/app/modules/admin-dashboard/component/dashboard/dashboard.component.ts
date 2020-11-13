import { Component, OnInit} from '@angular/core';
import {ShopService} from '../../../../components/shop/shop.service';
import {Observable} from 'rxjs';
import {IShop} from '../../../../models/i.shop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

  allShops$: Observable<IShop[]>;
  dataSource;

  constructor(private shopService: ShopService) {

  }

  ngOnInit(): void {
  }
}
