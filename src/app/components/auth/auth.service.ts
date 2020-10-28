import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {IAuthState} from '../../store/auth';
import {Observable} from 'rxjs';
import {authDetails} from '../../store/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authDetails$: Observable<any>;

  constructor(private store: Store<IAuthState>) {
    this.authDetails$ = this.store.select(authDetails);
  }
}
