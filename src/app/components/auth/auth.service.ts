import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {InitiateLogin} from "../../actions/auth.action";
import {AuthState} from "../../reducers/auth.reducer";
import {Observable} from "rxjs";
import {authDetails} from "../../selectors/auth.selector";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authDetails$: Observable<any>;

  constructor(private store: Store<AuthState>) {
    this.authDetails$ = this.store.select(authDetails);
  }
}
