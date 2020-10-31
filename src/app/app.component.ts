import {Component, Input, Output} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AppService} from "./service/app.service";
import {Observable} from 'rxjs';

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

  constructor(private appService: AppService) {

    this.appService.checkForLoginUser();
    this.userConnected$ = this.appService.checkUserConnection();
  }

  receiveSideNavEvent(): void {
    this.sideNavPosition = !this.sideNavPosition;
  }

}
