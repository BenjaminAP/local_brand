import { Injectable } from '@angular/core';
import {IAuthState, userConnected, userDetails} from '../../store/auth';
import {Store} from '@ngrx/store';
import {IUser} from '../../models/i.user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderToolbarService {

  userProfile$: Observable<IUser>;
  userConnected$: Observable<boolean>;

  constructor(private store: Store<IAuthState>) {
    this.userProfile$ = this.store.select(userDetails);
    this.userConnected$ = this.store.select(userConnected);
  }
}
