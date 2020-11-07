import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private afAuth: AngularFireAuth) { }

    isAdmin(): Observable<boolean> {
      return this.afAuth.idTokenResult.pipe(
        map((tokenData: auth.IdTokenResult) => {

          if (tokenData === null || !tokenData.claims['admin']) {
            return false;
          }

          return tokenData.claims['admin'];
        })
      );
}
}
