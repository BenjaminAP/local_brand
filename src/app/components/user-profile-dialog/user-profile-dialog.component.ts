import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../header-toolbar/header-toolbar.component';
import {Observable} from 'rxjs';
import {IUser} from '../../models/i.user';
import {DialogService} from './dialog.service';

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.css']
})
export class UserProfileDialogComponent implements OnInit {

  userDetails$: Observable<IUser>;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
  }

  login(): void {
    this.dialogService.login();
    this.userDetails$ = this.dialogService.userData$;
  }

  logout(): void {
    this.dialogService.logout();
  }

}
