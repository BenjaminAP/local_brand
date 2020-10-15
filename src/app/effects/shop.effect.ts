import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {EMPTY, Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {ShopService} from "../service/shop.service";
import * as Shop from "../actions/shop.action";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";

@Injectable()
export class ShopEffect {

  @Effect()
  shops$: Observable<Action> = this.actions$.pipe(
    ofType(Shop.LOAD_SHOPS),
    switchMap(() => {
      return this.shopService.getAllShops().pipe(
          map(shops => {
            return (new Shop.LoadShopsSuccessful(shops))
          }),
          catchError(() => EMPTY))
      }
    ));

  constructor(private actions$: Actions, private shopService: ShopService) {
  }
}

