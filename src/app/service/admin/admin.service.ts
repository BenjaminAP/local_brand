import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private afAuth: AngularFireAuth) { }

    isAdmin(): Observable<void> {
      return this.afAuth.idTokenResult.pipe(
        map((tokenData: any) => console.log(tokenData))
      );
}
}
