import { Injectable } from '@angular/core';
import {IAuthState} from '../../store/auth';
import {Store} from '@ngrx/store';
import {IUser} from '../../models/i.user';
import {Observable} from 'rxjs';
import {UserService} from "../../service/user/user.service";

@Injectable({
  providedIn: 'root'
})
export class HeaderToolbarService {

  userProfile$: Observable<IUser>;

  constructor(private userService: UserService) {
    this.userProfile$ = this.userService.getUserDataSelector();
  }
}
