import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {IAuthState, InitiateLogin} from '../../store/auth';
import {Observable} from 'rxjs';
import {authDetails} from '../../store/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authDetails$: Observable<IAuthState>;

  constructor(private store: Store<IAuthState>) {
    this.authDetails$ = this.store.select(authDetails);
  }

  initiateLogin(): void {
    this.store.dispatch(new InitiateLogin());
  }
}
