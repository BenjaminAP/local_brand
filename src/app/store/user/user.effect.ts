import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {IUserFireCloud} from '../../models/iuser-fire-cloud';
import {
  DOWNLOAD_FAV_SHOPS,
  DownloadUserFavShops,
  ReceiveUserFavShops, UpdatedFavShopsList,
  UPLOAD_FAV_SHOPS, UploadFavShops,
  UserActions
} from './user.action';
import {IUser} from '../../models/i.user';
@Injectable()
export class UserEffect {

  constructor(private actions$: Actions,
              private afStore: AngularFirestore) {}

  @Effect()
  public downloadedShops$: Observable<UserActions> = this.actions$.pipe(
    ofType(DOWNLOAD_FAV_SHOPS),
    mergeMap((action: DownloadUserFavShops) => {

      return this.downloadFavShops(action.payload).pipe(
        map(userData =>
          new ReceiveUserFavShops(new Set<string>(userData.fav_shops_ids)))
      );
    })
  );

  @Effect()
  public updatedShops$ = this.actions$.pipe(
    ofType(UPLOAD_FAV_SHOPS),
    map((action: UploadFavShops) => {
      this.updateUserFavShops(action.payload);
      return new UpdatedFavShopsList();
    }),
    catchError(err => EMPTY)
  );

  getUserData(uid: string): Observable<IUserFireCloud> {
    return this.afStore.doc<IUserFireCloud>(`user/${uid}`).valueChanges();
  }

  downloadFavShops(userId: string): Observable<IUserFireCloud | undefined> {

    if (localStorage.getItem('userDetails')) {
      const userDetails: IUser = JSON.parse(localStorage.getItem('userDetails'));

      if (userDetails.fav_shops_ids.size > 0) {
        const userFireCloud: IUserFireCloud = {
          email: userDetails.email,
          fav_shops_ids: Object.keys(userDetails.fav_shops_ids).map(favShopsIds => {
            return userDetails.fav_shops_ids[favShopsIds];
          }),
          full_name: userDetails.full_name,
          isNewUser: false};

        return of(userFireCloud);
      }
    }

    return this.afStore.doc<IUserFireCloud>(`user/${userId}`)
      .valueChanges();
  }

  updateUserFavShops(user: IUser): void {
    this.afStore.doc<IUserFireCloud>(`user/${user.uid}`)
      .set({email: user.email, full_name: user.full_name, isNewUser: false, fav_shops_ids: [...user.fav_shops_ids]});
  }

}
