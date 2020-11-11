import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../models/i.user';
import {Store} from '@ngrx/store';
import {IAuthState, connected, RetrieveAuth} from '../../store/auth';
import {AppService} from '../../service/app/app.service';
import {Login, userDetailsSelector} from '../../store/user';
import {UserService} from '../../service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  userData$: Observable<IUser>;
  userConnected$: Observable<boolean>;

  constructor(private store: Store<IAuthState>,
              private appService: AppService,
              private userService: UserService) {
    this.userData$ = store.select(userDetailsSelector);
    this.userConnected$ = store.select(connected);
  }

  login(): void {
    this.store.dispatch(new Login());
    this.store.dispatch(new RetrieveAuth());
  }

  logout(): void {
    this.userService.uploadFavoriteShop();
    this.appService.logout();
  }
}
