import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {InitiateLogin} from '../../store/auth';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authDetails$: Observable<any>;
  constructor(private authService: AuthService, private store: Store) {
    this.store.dispatch(new InitiateLogin());
    this.authDetails$ = this.authService.authDetails$;
    this.authDetails$.subscribe(details => console.log('auth details', details));
  }

  ngOnInit(): void {
  }

}
