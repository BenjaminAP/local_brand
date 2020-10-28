import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {AppService} from '../../service/app.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {LOAD_SHOPS_STARTED, LoadShopsCompleted} from './shop.action';

@Injectable()
export class ShopEffects {

  constructor(private actions$: Actions, private appService: AppService) {
  }

  @Effect()
  public loadAllShops$ = this.actions$.pipe(
    ofType(LOAD_SHOPS_STARTED),
    switchMap(() => {
      return this.appService.loadShops().pipe(
          map(shops => new LoadShopsCompleted(shops)),
          catchError(() => EMPTY));
      }
    )
  );
}

