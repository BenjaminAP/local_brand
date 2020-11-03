import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {EMPTY, Observable} from "rxjs";
import {AuthActions, INITIATE_LOGIN, LOGIN_FROM_STATE, LoginFromState} from "../auth";
import {catchError, map, switchMap} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {IUserFireCloud} from "../../models/iuser-fire-cloud";
import {RECEIVE_USER_DATA, ReceiveUserData, ReceiveUserFavShops, UserActions} from "./user.action";


@Injectable()
export class UserEffect {

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afStore: AngularFirestore) {
  }

  @Effect()
  public userFavorites$: Observable<UserActions> =  this.actions$.pipe(
    ofType(RECEIVE_USER_DATA),
    switchMap((action: ReceiveUserData) => {
      return this.getUserData(action.payload.uid).pipe(
        map(userData => {
          return new ReceiveUserFavShops(new Set<string>(userData.fav_shops_ids));
        }),
        catchError(error => EMPTY)
      );
    })
  );

  getUserData(uid: string): Observable<IUserFireCloud> {
    return this.afStore.doc<IUserFireCloud>(`user/${uid}`).valueChanges();
  }
}
