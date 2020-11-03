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

  userDetailsSelector$: Observable<IUser>;
  userConnected$: Observable<boolean>;

  constructor(private dialogService: DialogService) {
    this.userDetailsSelector$ = this.dialogService.userData$;
    this.userConnected$ = this.dialogService.userConnected$;
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
