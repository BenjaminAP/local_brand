import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {connectedSelector, Login, Logout, StateLogin} from '../../store/auth';
import {Observable} from 'rxjs';
import {BeginLoading} from "../../store/loading";

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

  checkStateForLogin(): void {
    this.store.dispatch(new BeginLoading());
    this.store.dispatch(new StateLogin());
  }

  getConnectionSelector(): Observable<boolean> {
    return this.store.select(connectedSelector);
  }
}
