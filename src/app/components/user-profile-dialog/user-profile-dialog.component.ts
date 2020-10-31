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

  constructor(private dialogService: DialogService) {
    this.userDetails$ = this.dialogService.userData$;
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
