import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Local Brands';

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore) {

  }
  async login(): Promise<any> {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.auth.signInWithPopup(provider);
    console.log(credentials.user);
  }
  logout(): void {
    this.auth.signOut();
  }

}
