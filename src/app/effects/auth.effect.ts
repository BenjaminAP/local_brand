import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {INITIATE_LOGIN, LoginCompleted} from "../actions/auth.action";
import {catchError, exhaustMap, map, switchMap} from "rxjs/operators";
import {EMPTY, from, Observable, of} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import {auth} from "firebase";
import * as firebase from "firebase";
import {Action} from "@ngrx/store";

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions, private afAuth: AngularFireAuth) {
  }

  @Effect()
  public initLogIn$: Observable<Action> = this.actions$.pipe(
    ofType(INITIATE_LOGIN),
    exhaustMap(() => {
      return from(this.popupLogin().pipe(
        map(result => new LoginCompleted(result)),
        catchError(() => EMPTY)));
      }
    )
  );

  popupLogin(): Observable<firebase.auth.UserCredential> {
    let res: auth.UserCredential;

    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(function (result) {
        console.log('results' + result);
        res = result;
      })
      .catch(error => console.log(error));

    return of(res);
  }
}
