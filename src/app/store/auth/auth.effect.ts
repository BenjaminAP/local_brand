import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActions, INITIATE_LOGIN, LoginCompleted} from './auth.action';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {EMPTY, from, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import * as firebase from 'firebase';
import {IUser} from "../../models/i.user";
import {IAuth} from "../../models/i.auth";
import {IAuthState} from "./auth.reducer";

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions, private afAuth: AngularFireAuth) {
  }

  @Effect()
  public initLogIn$: Observable<AuthActions> = this.actions$.pipe(
    ofType(INITIATE_LOGIN),
    exhaustMap(() => {
      return from(this.popupLogin()).pipe(
        map((userCredentials: firebase.auth.UserCredential) => {
          // console.log(userCredentials);
          const user: IUser = {
            email: userCredentials.user.email,
            family_name: userCredentials.additionalUserInfo.profile['family_name'],
            name: userCredentials.additionalUserInfo.profile['given_name'],
            full_name: userCredentials.user.displayName,
            picture: userCredentials.user.photoURL,
            uid: userCredentials.user.uid,
          }

          const authDetails: IAuth = {
            access_token: userCredentials.credential['accessToken'],
            provider_id: userCredentials.credential.providerId,
            refresh_token: userCredentials.user.refreshToken,
            verified_email: userCredentials.user.emailVerified,
            isNewUser: userCredentials.additionalUserInfo.isNewUser,
            connected: true
          }
          const payload: IAuthState = {
            user: user,
            authDetails: authDetails
          }

          return new LoginCompleted(payload);
        }),
        catchError(() => EMPTY));
      }
    )
  );

  popupLogin(): Promise<firebase.auth.UserCredential | void> {

    return this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()))
      .catch(error => error);
  }
}
