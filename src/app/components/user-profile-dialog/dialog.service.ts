import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../models/i.user';
import {AuthService} from "../../service/auth/auth.service";
import {UserService} from "../../service/user/user.service";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  userData$: Observable<IUser>;
  userConnected$: Observable<boolean>;

  constructor(private authService: AuthService, private userService: UserService) {
    this.userData$ = this.userService.getUserDataSelector();
    this.userConnected$ = this.authService.getConnectionSelector();
  }

  login(): void {
    this.authService.beginLogin();
  }

  logout(): void {
    this.authService.beginLogout();
  }
}
