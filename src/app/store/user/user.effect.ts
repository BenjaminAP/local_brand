import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {catchError, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {IUserFireCloud} from '../../models/iuser-fire-cloud';
import {RECEIVE_USER_DATA, ReceiveUserData, ReceiveUserFavShops, UPLOAD_FAV_SHOPS, UserActions} from './user.action';
import {IUser} from '../../models/i.user';
import {userDetailsSelector} from './user.selector';


@Injectable()
export class UserEffect {

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afStore: AngularFirestore,
              private store: Store) {
  }

  @Effect()
  public userFavorites$: Observable<UserActions> =  this.actions$.pipe(
    ofType(RECEIVE_USER_DATA),
    mergeMap((action: ReceiveUserData) => {
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

  getUserData(uid: string): Observable<IUserFireCloud> {
    return this.afStore.doc<IUserFireCloud>(`user/${uid}`).valueChanges();
  }

  updateUserFavShops(user: IUser): void {
    this.afStore.doc<IUserFireCloud>(`user/${user.uid}`)
      .set({email: user.email, full_name: user.full_name, isNewUser: false, fav_shops_ids: [...user.fav_stores]});
  }
}
