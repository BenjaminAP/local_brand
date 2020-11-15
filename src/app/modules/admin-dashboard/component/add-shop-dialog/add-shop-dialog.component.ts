import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-add-shop-dialog',
  templateUrl: './add-shop-dialog.component.html',
  styleUrls: ['./add-shop-dialog.component.css']
})
export class AddShopDialogComponent implements OnInit {

  saveShopForm: FormGroup;

  saveFormSubject: Subject<void>;

  constructor(public dialog: MatDialog) {
    this.saveShopForm = new FormGroup({});
    this.saveFormSubject = new Subject<void>();
  }

  ngOnInit(): void {
  }

  saveFormTrigger(): void {
    this.saveFormSubject.next();
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }



}
