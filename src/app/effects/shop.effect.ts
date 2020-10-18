import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {AppService} from '../service/app.service';
import * as Shop from '../actions/shop.action';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';

@Injectable()
export class ShopEffect {

  @Effect()
  shops$: Observable<Action> = this.actions$.pipe(
    ofType(Shop.LOAD_SHOPS),
    mergeMap(() => {
      return this.appService.loadShops().pipe(
          map(shops => new Shop.LoadShopsSuccessful(shops)),
          catchError(() => EMPTY));
      }
    ));

  constructor(private actions$: Actions, private appService: AppService) {
  }
}

