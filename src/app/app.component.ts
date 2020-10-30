import {Component, Input} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AppService} from "./service/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Local Brands';

  @Input()
  sideNavPosition = false;

  constructor(private appService: AppService) {

    this.appService.checkForLoginUser();
  }

  receiveSideNavEvent(): void {
    this.sideNavPosition = !this.sideNavPosition;
  }

}
