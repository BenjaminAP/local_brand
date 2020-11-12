import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {connectedSelector, Login, Logout} from '../../store/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store) { }

  beginLogin(): void {
    this.store.dispatch(new Login());
  }

  beginLogout(): void {
    this.store.dispatch(new Logout());
  }

  getConnectionSelector(): Observable<boolean> {
    return this.store.select(connectedSelector);
  }

}
