import {Component, OnInit} from '@angular/core';
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
  userConnected$: Observable<boolean>;

  constructor(private dialogService: DialogService) {
    this.userDetails$ = this.dialogService.getUserData();
    this.userConnected$ = this.dialogService.isUserConnected();
  }

  ngOnInit(): void {
  }

  login(): void {
    this.dialogService.login();
  }

  logout(): void {
    this.dialogService.logout();
  }

}
