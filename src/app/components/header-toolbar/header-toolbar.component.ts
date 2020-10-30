import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserProfileDialogComponent} from '../user-profile-dialog/user-profile-dialog.component';
import {HeaderToolbarService} from "./header-toolbar.service";
import {Observable} from "rxjs";
import {IUser} from "../../models/i.user";

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

  userDetails$: Observable<IUser>;

  constructor(public dialog: MatDialog, private headerService: HeaderToolbarService) {

    this.userDetails$ = this.headerService.userProfile$;

    this.USER_DIALOG_CONFIG = {
      position: {
        top: '5em',
        right: '2em'
      }
    };
  }

  ngOnInit(): void {
    this.userDetails$.subscribe(user => console.log(user));
  }

  toggleSideNav(): void {
    this.toggleSideNavEvent.emit();
  }

  openDialog(): void {
    this.dialog.open(UserProfileDialogComponent, this.USER_DIALOG_CONFIG);
  }

}
