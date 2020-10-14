import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {EMPTY, Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {ShopService} from "../service/shop.service";
import * as ShopActions from "../actions/shop.action";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class ShopEffect {

  @Effect()
  shops$ = createEffect( () => this.actions$.pipe(
    ofType(ShopActions.loadAllShops),
    mergeMap(() => this.shopService.getAllShops()
        .pipe(
          map(shops => ({type: '[Shops] Shops Loaded Success', payload: shops})),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(private actions$: Actions, private shopService: ShopService) {
  }
}

