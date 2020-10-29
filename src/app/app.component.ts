import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Local Brands';

  @Input()
  sideNavPosition = false;

  constructor() {

  }
  receiveSideNavEvent(): void {
    this.sideNavPosition = !this.sideNavPosition;
  }

}
