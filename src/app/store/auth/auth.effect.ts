import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActions, CHECK_USER_LOGIN, INITIATE_LOGIN, LOGIN_COMPLETED, LoginCompleted, ReceiveUserData} from './auth.action';
import {catchError, exhaustMap, map, switchMap} from 'rxjs/operators';
import {EMPTY, from, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
// @ts-ignore
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {IUser} from '../../models/i.user';
import {IAuth} from '../../models/i.auth';
import {IAuthState} from './auth.reducer';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afStore: AngularFirestore) {}

  @Effect()
  public initLogIn$: Observable<AuthActions> = this.actions$.pipe(
    ofType(INITIATE_LOGIN),
    exhaustMap(() => {
      return from(this.popupLogin()).pipe(
        map((userCredentials: firebase.auth.UserCredential) => {
          // console.log(userCredentials);
          const user: IUser = {
            email: userCredentials.user.email,
            full_name: userCredentials.user.displayName,
            picture: userCredentials.user.photoURL,
            uid: userCredentials.user.uid,
            fav_stores: []
          };

          const authDetails: IAuth = {
            access_token: userCredentials.credential['accessToken'],
            provider_id: userCredentials.credential.providerId,
            refresh_token: userCredentials.user.refreshToken,
            verified_email: userCredentials.user.emailVerified,
            isNewUser: userCredentials.additionalUserInfo.isNewUser,
            connected: true
          };
          const payload: IAuthState = {
            user,
            authDetails
          };

          return new LoginCompleted(payload);
        }),
        catchError(() => EMPTY));
      }
    )
  );

  @Effect()
  public userFavorites$: Observable<AuthActions> =  this.actions$.pipe(
    ofType(LOGIN_COMPLETED),
    switchMap((action: LoginCompleted) => {
      return this.getUserData(action.payload.user.uid).pipe(
        map(userData => new ReceiveUserData(userData)),
        catchError(error => EMPTY)
      );
    })
  );

  popupLogin(): Promise<firebase.auth.UserCredential | void> {

    return this.afAuth.setPersistence('local')
      .then(() => this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
      .catch(error => error);
  }

  getUserData(uid: string): Observable<any> {
    return this.afStore.doc<string[]>(`user/${uid}`).valueChanges();
  }
}
