import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserProfileDialogComponent} from '../user-profile-dialog/user-profile-dialog.component';

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

  constructor(public dialog: MatDialog) {
    this.USER_DIALOG_CONFIG = {
      data: {
        animal: 'panda'
      },
      position: {
        top: '5em',
        right: '2em'
      }
    };
  }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.toggleSideNavEvent.emit();
  }

  openDialog(): void {
    this.dialog.open(UserProfileDialogComponent, this.USER_DIALOG_CONFIG);
  }

}
