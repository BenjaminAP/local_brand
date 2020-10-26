import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Local Brands';

  constructor(public auth: AngularFireAuth) {

  }
  login(): void {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.auth.getRedirectResult().then(result => console.log(result.user));
  }
  logout(): void {
    this.auth.signOut();
  }

}
