import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authDetails$: Observable<firebase.auth.AdditionalUserInfo>;

  constructor(private authService: AuthService) {
    this.authDetails$ = this.authService.authDetails$;
    this.authDetails$.subscribe((details: firebase.auth.AdditionalUserInfo) => console.log('auth details', details));
  }

  ngOnInit(): void {
    this.initLogin();
  }

  initLogin(): void {
    this.authService.initiateLogin();
  }

}
