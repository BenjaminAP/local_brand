import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../models/i.user';
import {Store} from '@ngrx/store';
import {IAuthState, userConnected, userDetails} from '../../store/auth';
import {AppService} from '../../service/app.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  userData$: Observable<IUser>;
  userConnected$: Observable<boolean>;

  constructor(private store: Store<IAuthState>, private appService: AppService) {
    this.userData$ = store.select(userDetails);
    this.userConnected$ = store.select(userConnected);
  }

  login(): void {
    this.appService.initiateLogin();
  }

  logout(): void {
    this.appService.logout();
  }
}
