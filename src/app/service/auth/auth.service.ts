import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {connectedSelector, Login, Logout, StateLogin} from '../../store/auth';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store, private afAuth: AngularFireAuth) { }

  beginLogin(): void {
    this.store.dispatch(new Login());
  }

  beginLogout(): void {
    this.store.dispatch(new Logout());
  }

  getConnectionSelector(): Observable<boolean> {
    return this.store.select(connectedSelector);
  }

  checkStateForLogin(): void {
    this.store.dispatch(new StateLogin());
  }

}
