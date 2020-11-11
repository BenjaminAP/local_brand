import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AuthRetrieved,
  RETRIEVE_AUTH
} from './auth.action';
import {exhaustMap, map, mergeMap} from 'rxjs/operators';
import { from, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
// @ts-ignore
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {IUser} from '../../models/i.user';
import {IAuth} from '../../models/i.auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {IUserFireCloud} from '../../models/iuser-fire-cloud';
import {User} from 'firebase';
import IdTokenResult = firebase.auth.IdTokenResult;

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private afStore: AngularFirestore) {}

  /// Todo: trigger after user logs in....
  @Effect()
  public initAuth$: Observable<any> = this.actions$.pipe(
    ofType(RETRIEVE_AUTH),
    mergeMap(() => {
      return this.afAuth.idTokenResult.pipe(
        map((authResult: IdTokenResult) => {
          const authDetails: IAuth = {
            connected: true,
            claims: authResult.claims,
            signInProvider: authResult.signInProvider,
            token: authResult.token
          };

          return new AuthRetrieved(authDetails);
        })
      );
      }
    )
  );
}
