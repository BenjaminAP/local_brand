import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserProfileDialogComponent} from '../user-profile-dialog/user-profile-dialog.component';
import {Observable} from 'rxjs';
import {IUser} from '../../models/i.user';
import {AuthService} from '../../service/auth/auth.service';
import {AppService} from '../../service/app/app.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent implements OnInit {

  private readonly USER_DIALOG_CONFIG: any;

  @Output()
  toggleSideNavEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  userDetails$: Observable<IUser>;

  userConnected$: Observable<boolean>;

  isLoading$: Observable<boolean>;

  constructor(public dialog: MatDialog, private authService: AuthService, private appService: AppService) {

    this.USER_DIALOG_CONFIG = {
      position: {
        top: '5em',
        right: '2em'
      }
    };
  }

  ngOnInit(): void {
    this.isLoading$ = this.appService.getIsLoadingSelector();
    this.userConnected$ = this.authService.getConnectionSelector();
  }

  toggleSideNav(): void {
    this.toggleSideNavEvent.emit();
  }

  openDialog(): void {
    this.dialog.open(UserProfileDialogComponent, this.USER_DIALOG_CONFIG);
  }

}
