import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../models/i.user';
import {Store} from '@ngrx/store';
import {IAuthState, InitiateLogin, connected} from '../../store/auth';
import {AppService} from '../../service/app/app.service';
import {userDetailsSelector} from '../../store/user';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  userData$: Observable<IUser>;
  userConnected$: Observable<boolean>;

  constructor(private store: Store<IAuthState>, private appService: AppService) {
    this.userData$ = store.select(userDetailsSelector);
    this.userConnected$ = store.select(connected);
  }

  login(): void {
    this.store.dispatch(new InitiateLogin());
  }

  logout(): void {
    this.appService.logout();
  }
}
