import {Component, HostListener, Input, Output} from '@angular/core';
import {AppService} from './service/app/app.service';
import {Observable} from 'rxjs';
import {IUser} from './models/i.user';
import {UserService} from './service/user/user.service';

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

  constructor(private appService: AppService, private userService: UserService) {

    // this.appService.checkForLoginUserData();
    this.userDetails$ = this.userService.getUserDataSelector()
  }

  receiveSideNavEvent(): void {
    this.sideNavPosition = !this.sideNavPosition;
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(): void {

    this.userDetails$
      .subscribe((user: IUser) => this.userService.uploadFavoriteShop(user))
      .unsubscribe();
  }

  ngOnDestroy() {
  }

}
