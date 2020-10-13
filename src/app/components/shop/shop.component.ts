import { Component, OnInit } from '@angular/core';
import {ShopService} from './service/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    console.log(this.shopService.getShopsDetail());
  }

}
