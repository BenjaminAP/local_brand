import {Component, Input, Output} from '@angular/core';
import {AppService} from './service/app.service';
import {Observable} from 'rxjs';
import {IUser} from './models/i.user';

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
  userConnected$: Observable<boolean>;

  @Output()
  userDetails$: Observable<IUser>;

  constructor(private appService: AppService) {

    this.appService.checkForLoginUser();
    this.userConnected$ = this.appService.checkUserConnection();
    this.userDetails$ = this.appService.userDetails();
  }

  receiveSideNavEvent(): void {
    this.sideNavPosition = !this.sideNavPosition;
  }

}
