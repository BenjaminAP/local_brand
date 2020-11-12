import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../models/i.user';
import {AuthService} from '../../service/auth/auth.service';
import {UserService} from '../../service/user/user.service';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private authService: AuthService, private userService: UserService) {}

  login(): void {
    this.authService.beginLogin();
  }

  logout(): void {
    this.authService.beginLogout();
  }

  isUserConnected(): Observable<boolean> {
    return this.authService.getConnectionSelector();
  }

  getUserData(): Observable<IUser> {
    return this.userService.getUserDataSelector();
  }
}
