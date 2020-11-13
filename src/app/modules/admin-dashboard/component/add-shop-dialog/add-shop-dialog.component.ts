import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-shop-dialog',
  templateUrl: './add-shop-dialog.component.html',
  styleUrls: ['./add-shop-dialog.component.css']
})
export class AddShopDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

}
