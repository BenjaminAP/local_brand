import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AppService} from "../service/app.service";
import {INITIATE_LOGIN, InitiateLogin, LoginCompleted} from "../actions/auth.action";
import {catchError, map, switchMap} from "rxjs/operators";
import {ERROR} from "@angular/compiler-cli/src/ngtsc/logging/src/console_logger";

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
          catchError(() => ERROR));
      }
    )
  );
}
