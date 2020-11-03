import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AuthActions,
  LOGIN_FROM_STATE,
  LoginFromState,
  INITIATE_LOGIN,
  LoginCompleted
} from './auth.action';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {EMPTY, from, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
// @ts-ignore
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {IUser} from '../../models/i.user';
import {IAuth} from '../../models/i.auth';
import {IAuthState} from './auth.reducer';
import {AngularFirestore} from '@angular/fire/firestore';
import {IUserFireCloud} from '../../models/iuser-fire-cloud';
import {ReceiveUserData} from "../user";

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afStore: AngularFirestore) {}

  @Effect()
  public initLogIn$: Observable<any> = this.actions$.pipe(
    ofType(INITIATE_LOGIN),
    exhaustMap(() => {
      return from(this.popupLogin()).pipe(
        map((userCredentials: firebase.auth.UserCredential) => {
          const user: IUser = {
            email: userCredentials.user.email,
            full_name: userCredentials.user.displayName,
            picture: userCredentials.user.photoURL,
            uid: userCredentials.user.uid,
            fav_stores: new Set<string>()
          };

          const authDetails: IAuth = {
            provider_id: userCredentials.credential.providerId,
            verified_email: userCredentials.user.emailVerified,
            isNewUser: userCredentials.additionalUserInfo.isNewUser,
            connected: true
          };
          const userPayload: IAuthState = {
            user,
            authDetails
          };

          if (userPayload.authDetails.isNewUser){
            this.signUpUser(userPayload);
          }

          return [new LoginCompleted(userPayload.authDetails), new ReceiveUserData(userPayload.user)];
        }),
        catchError(() => EMPTY));
      }
    )
  );

  popupLogin(): Promise<firebase.auth.UserCredential | void> {

    return this.afAuth.setPersistence('local')
      .then(() => this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
      .catch(error => error);
  }

  signUpUser(newUserData: IAuthState): void {

    const newUser: IUserFireCloud = {
      email: newUserData.user.email,
      fav_shops_ids: [],
      full_name: newUserData.user.full_name,
      isNewUser: false
    };

    const userDoc = this.afStore.doc<{ isNewUser: boolean }>(`user/${newUserData.user.uid}`);
    userDoc.set({isNewUser: true})
      .then(() => userDoc.set(newUser))
      .catch(error => error);
  }
}
