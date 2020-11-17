import {Component, HostListener, Input, Output} from '@angular/core';
import {AppService} from './service/app/app.service';
import {Observable} from 'rxjs';
import {IUser} from './models/i.user';
import {UserService} from './service/user/user.service';
import {AuthService} from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /// TODO: save user data in browser state to make less read calls.
  /// TODO: add shops list to the browser state and check for if its less/greater than chopCount and handle accordingly.

  title = 'Local Brands';

  @Input()

  sideNavPosition = false;

  @Output()
  userDetails$: Observable<IUser>;

  constructor(private appService: AppService,
              private userService: UserService,
              private authService: AuthService) {

    this.authService.checkStateForLogin();
    this.userDetails$ = this.userService.getUserDataSelector();
  }

  receiveSideNavEvent(closing: boolean): void {

    if (closing === null || closing === undefined) {
      this.sideNavPosition = !this.sideNavPosition;
    } else {
      this.sideNavPosition = !closing;
    }
  }


  /// Todo: not upload when no changes have been made to favorite list.
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(): void {
    this.userDetails$
      .subscribe((user: IUser) => this.userService.saveFavShops(user))
      .unsubscribe();
  }

}
