import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {INITIATE_LOGIN, LoginCompleted} from './auth.action';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import { EMPTY, from, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions, private afAuth: AngularFireAuth) {
  }

  @Effect()
  public initLogIn$ = this.actions$.pipe(
    ofType(INITIATE_LOGIN),
    exhaustMap(() => {
      return from(this.popupLogin()).pipe(
        map((userCredentials: firebase.auth.UserCredential) => {
          console.log(userCredentials);
          return new LoginCompleted(userCredentials.additionalUserInfo);
        }),
        catchError(() => EMPTY));
      }
    )
  );

  popupLogin(): Promise<firebase.auth.UserCredential | void> {

    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .catch(error => error);
  }
}
