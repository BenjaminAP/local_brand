import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {IAuth} from "../../models/i.auth";
import {IAuthState} from "../../store/auth";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authDetails$: Observable<IAuthState>;

  constructor(private authService: AuthService) {
    this.authDetails$ = this.authService.authDetails$;
    this.authDetails$.subscribe((details: IAuthState) => console.log('auth details', details));
  }

  ngOnInit(): void {
    this.initLogin();
  }

  initLogin(): void {
    this.authService.initiateLogin();
  }

}
