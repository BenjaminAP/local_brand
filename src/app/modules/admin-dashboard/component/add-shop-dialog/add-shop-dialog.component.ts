import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-shop-dialog',
  templateUrl: './add-shop-dialog.component.html',
  styleUrls: ['./add-shop-dialog.component.css']
})
export class AddShopDialogComponent implements OnInit {

  saveShopForm: FormGroup;

  constructor(public dialog: MatDialog) {
    this.saveShopForm = new FormGroup({});
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

}
