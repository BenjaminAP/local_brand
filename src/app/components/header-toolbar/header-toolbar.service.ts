import { Injectable } from '@angular/core';
import {IAuthState, userConnected} from '../../store/auth';
import {Store} from '@ngrx/store';
import {IUser} from '../../models/i.user';
import {Observable} from 'rxjs';
import {userDetailsSelector} from "../../store/user";

@Injectable({
  providedIn: 'root'
})
export class HeaderToolbarService {

  userProfile$: Observable<IUser>;
  userConnected$: Observable<boolean>;

  constructor(private store: Store<IAuthState>) {
    this.userProfile$ = this.store.select(userDetailsSelector);
    this.userConnected$ = this.store.select(userConnected);
  }
}
