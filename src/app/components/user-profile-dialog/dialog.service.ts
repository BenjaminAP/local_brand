import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../models/i.user';
import {Store} from '@ngrx/store';
import {IAuthState, connectedSelector, Logout, Login} from '../../store/auth';
import {userDetailsSelector} from '../../store/user';
import {AuthService} from "../../service/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  userData$: Observable<IUser>;
  userConnected$: Observable<boolean>;

  constructor(private store: Store<IAuthState>, private authService: AuthService) {
    this.userData$ = store.select(userDetailsSelector);
    this.userConnected$ = store.select(connectedSelector);
  }

  login(): void {
    this.authService.beginLogin();
  }

  logout(): void {
    this.authService.beginLogout();
  }
}
