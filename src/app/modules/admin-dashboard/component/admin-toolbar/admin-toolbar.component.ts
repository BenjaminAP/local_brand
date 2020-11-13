import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddShopDialogComponent} from '../add-shop-dialog/add-shop-dialog.component';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.css']
})
export class AdminToolbarComponent implements OnInit {

  private readonly ADD_SHOP_DIALOG_CONFIG: any;

  constructor(public dialog: MatDialog) {
    this.ADD_SHOP_DIALOG_CONFIG = {
      closeOnNavigation: false,
      disableClose: true,
      hasBackdrop: true,
      role: 'dialog'
    };
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(AddShopDialogComponent, this.ADD_SHOP_DIALOG_CONFIG);
  }

}
