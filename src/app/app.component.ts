import {Component} from '@angular/core';
import * as firebase from 'firebase';
import {Shop} from './models/shop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Local Brands';

  constructor() {

  }

}
