import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  CLEAR_AUTH, ClearAuth, INIT_LOGIN, LoginCompleted, LOGOUT, LogoutCompleted,
  RETRIEVE_AUTH, RetrieveAuth, STATE_LOGIN
} from './auth.action';
import {catchError, concatMap, exhaustMap, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {EMPTY, from, Observable, of} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
// @ts-ignore
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {IUser} from '../../models/i.user';
import {IAuth} from '../../models/i.auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {IUserFireCloud} from '../../models/iuser-fire-cloud';
import IdTokenResult = firebase.auth.IdTokenResult;
import {
  CHECK_USER_DATA,
  ClearUserData,
  DownloadUserFavShops,
  ReceiveUserData,
  UploadFavShops,
  userDetailsSelector
} from '../user';
import {Store} from '@ngrx/store';
import {idTokenResult} from '@angular/fire/auth-guard';
import {User} from 'firebase';

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afStore: AngularFirestore,
              private store: Store) {}

  @Effect()
  public authClear$ = this.actions$.pipe(
    ofType(CLEAR_AUTH),
    concatMap(() => {
      this.afAuth.signOut();
      return [new LogoutCompleted(), new ClearUserData()];
    }),
  );

  @Effect()
  public beginLogout$: Observable<any> = this.actions$.pipe(
    ofType(LOGOUT),
    withLatestFrom(this.store.select(userDetailsSelector)),
    concatMap(([action, user]) => [new UploadFavShops(user), new ClearAuth()]),
    catchError(err => EMPTY)
  );

  @Effect()
  public loginCompleted$: Observable<any> = this.actions$.pipe(
    ofType(RETRIEVE_AUTH),
    switchMap(() => {
      return this.afAuth.idTokenResult.pipe(
        map((authResult: IdTokenResult) => {

          const authDetails: IAuth = {
            connected: true,
            claims: authResult.claims ? authResult.claims : null,
            signInProvider: authResult.signInProvider,
            token: authResult.token
          };

          return new LoginCompleted(authDetails);
        }),
        catchError(err => EMPTY)
      );
    })
  );

  @Effect()
  public authFromState$ = this.actions$.pipe(
    ofType(STATE_LOGIN),
    exhaustMap(() => {

      if (localStorage.getItem('userDetails')) {
        console.log('user details ls', JSON.parse(localStorage.getItem('userDetails')));
        const user: IUser = JSON.parse(localStorage.getItem('userDetails'));
        return of(user);
      }

      return this.afAuth.user.pipe(
        map((user: User) => {

          const userDetails: IUser = {
            uid: user.uid,
            fav_shops_ids: null,
            email: user.email,
            full_name: user.displayName,
            picture: user.photoURL
          };

          return userDetails;
        }),
        catchError(err => EMPTY)
      );
    }),
    concatMap((user: IUser) => [new ReceiveUserData(user), new DownloadUserFavShops(user.uid), new RetrieveAuth()])
  );

  @Effect()
  public initLogIn$: Observable<any> = this.actions$.pipe(
    ofType(INIT_LOGIN),
    switchMap(() => this.popupLogin().pipe(
      map((userCredentials: firebase.auth.UserCredential): IUser => {

        const user: IUser = {
          email: userCredentials.user.email,
          full_name: userCredentials.user.displayName,
          picture: userCredentials.user.photoURL,
          uid: userCredentials.user.uid,
          fav_shops_ids: new Set<string>()
        };

        if (userCredentials.additionalUserInfo.isNewUser){
          this.signUpUser(user);
        }
        return user;
      }),
      catchError(() => EMPTY))
    ),
    switchMap((user: IUser) => [new ReceiveUserData(user), new DownloadUserFavShops(user.uid), new RetrieveAuth()])
  );


  popupLogin(): Observable<firebase.auth.UserCredential | void> {

    return from(this.afAuth.setPersistence('local')
      .then(() => this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
      .catch(error => error));
  }

  signUpUser(newUserData: IUser): void {

    const newUser: IUserFireCloud = {
      email: newUserData.email,
      fav_shops_ids: [],
      full_name: newUserData.full_name,
      isNewUser: false
    };

    const userDoc = this.afStore.doc<{ isNewUser: boolean }>(`user/${newUserData.uid}`);
    userDoc.set({isNewUser: true})
      .then(() => userDoc.set(newUser))
      .catch(error => error);
  }

}

