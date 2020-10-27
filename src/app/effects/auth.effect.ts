import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AppService} from "../service/app.service";
import {INITIATE_LOGIN, LoginCompleted} from "../actions/auth.action";
import {catchError, switchMap} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions, private appService: AppService) {
  }

  @Effect()
  public initLogIn$ = this.actions$.pipe(
    ofType(INITIATE_LOGIN),
    switchMap(() => {
      return this.appService.login().then(
          r => new LoginCompleted(r),
          catchError(() => EMPTY));
      }
    )
  );
}
