import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authDetails$: Observable<any>;
  constructor(private authService: AuthService) {
    this.authDetails$ = this.authService.authDetails$;
    this.authDetails$.subscribe(details => console.log(details));
  }

  ngOnInit(): void {
  }

}
