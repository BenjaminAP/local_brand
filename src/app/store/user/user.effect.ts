import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, from, Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {catchError, concatMap, exhaustMap, map, mergeMap, switchAll, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {IUserFireCloud} from '../../models/iuser-fire-cloud';
import {
  DOWNLOAD_FAV_SHOPS,
  DownloadUserFavShops,
  INIT_LOGIN,
  LoginCompleted, LOGOUT, LogoutCompleted,
  RECEIVE_USER_DATA,
  ReceiveUserData,
  ReceiveUserFavShops,
  UPLOAD_FAV_SHOPS,
  UserActions
} from './user.action';
import {IUser} from '../../models/i.user';
import {userDetailsSelector} from './user.selector';
import * as firebase from 'firebase';
import {RetrieveAuth} from '../auth';


@Injectable()
export class UserEffect {

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afStore: AngularFirestore,
              private store: Store) {
  }

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
          fav_stores: new Set<string>()
        };

        if (userCredentials.additionalUserInfo.isNewUser){
          this.signUpUser(user);
        }
        return user;
      }),
      catchError(() => EMPTY))
    ),
    switchMap((user: IUser) => [new LoginCompleted(user), new DownloadUserFavShops(user.uid), new RetrieveAuth()])
  );

  @Effect()
  public downloadedShops$: Observable<UserActions> = this.actions$.pipe(
    ofType(DOWNLOAD_FAV_SHOPS),
    switchMap((action: DownloadUserFavShops) => {
      return this.downloadFavShops(action.payload).pipe(
        map(userData => new ReceiveUserFavShops(new Set<string>(userData.fav_shops_ids)))
      );
    })
  );

  @Effect()
  public logoutUser$: Observable<any> = this.actions$.pipe(
    ofType(LOGOUT),
    withLatestFrom(this.store.select(userDetailsSelector)),
    concatMap(
      ([action, user]) => {
      this.updateUserFavShops(user);
      return from(this.afAuth.signOut().then(() => new LogoutCompleted()));
    }),
    catchError(err => EMPTY)
  );

  @Effect()
  public userFavorites$: Observable<UserActions> =  this.actions$.pipe(
    ofType(RECEIVE_USER_DATA),
    mergeMap((action: ReceiveUserData): Observable<ReceiveUserFavShops> => {
      return this.getUserData(action.payload.uid).pipe(
        map(userData => {
          return new ReceiveUserFavShops(new Set<string>(userData.fav_shops_ids));
        }),
        catchError(error => EMPTY)
      );
    })
  );

  @Effect()
  public uploadShops$ = this.actions$.pipe(
    ofType(UPLOAD_FAV_SHOPS),
    withLatestFrom(this.store.select(userDetailsSelector)),
    mergeMap(([action, user]) => {
      this.updateUserFavShops(user);
      return EMPTY;
    })
  );

  popupLogin(): Observable<firebase.auth.UserCredential | void> {

    return from(this.afAuth.setPersistence('session')
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

  getUserData(uid: string): Observable<IUserFireCloud> {
    return this.afStore.doc<IUserFireCloud>(`user/${uid}`).valueChanges();
  }

  downloadFavShops(userId: string): Observable<IUserFireCloud | undefined> {
    return this.afStore.doc<IUserFireCloud>(`user/${userId}`)
      .valueChanges();
  }

  updateUserFavShops(user: IUser): void {
    this.afStore.doc<IUserFireCloud>(`user/${user.uid}`)
      .set({email: user.email, full_name: user.full_name, isNewUser: false, fav_shops_ids: [...user.fav_stores]});
  }
}
