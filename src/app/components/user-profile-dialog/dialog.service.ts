import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../models/i.user';
import {Store} from '@ngrx/store';
import {IAuthState, userDetails} from '../../store/auth';
import {AppService} from '../../service/app.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  userData$: Observable<IUser>;

  constructor(private store: Store<IAuthState>, private appService: AppService) {
    this.userData$ = store.select(userDetails);
  }

  login(): void {
    this.appService.initiateLogin();
  }

  logout(): void {
    this.appService.logout();
  }
}
