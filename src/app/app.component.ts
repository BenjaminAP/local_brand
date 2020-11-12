import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {AppService} from './service/app/app.service';
import {Observable} from 'rxjs';
import {IUser} from './models/i.user';
import {UserService} from './service/user/user.service';
import {AdminService} from './service/admin/admin.service';
import {AuthService} from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Local Brands';

  @Input()
  sideNavPosition = false;

  @Output()
  userDetails$: Observable<IUser>;

  constructor(private appService: AppService, private userService: UserService, private authService: AuthService) {

    // this.appService.checkForLoginUserData();
    this.userDetails$ = this.userService.getUserDataSelector();
  }

  receiveSideNavEvent(closing: boolean): void {

    if (closing === null || closing === undefined) {
      this.sideNavPosition = !this.sideNavPosition;
    } else {
      this.sideNavPosition = !closing;
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(): void {

    this.authService.beginLogout();
  }

}
