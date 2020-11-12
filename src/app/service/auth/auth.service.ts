import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {Login, Logout} from "../../store/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store) { }

  beginLogin(): void {
    this.store.dispatch(new Login());
  }

  beginLogout(): void {
    this.store.dispatch(new Logout());
  }

}
