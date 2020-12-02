import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, concatMap, exhaustMap, map, mergeMap, startWith, switchMap, withLatestFrom} from 'rxjs/operators';
import {
  LOAD_SHOPS_STARTED,
  LoadShopsCompleted, LoadTotalShopCount,
  NEXT_SHOPS, SAVE_FILTERS_TYPE, SaveFilterTypeCompleted,
  TOTAL_SHOP_COUNT,
  TotalShopCountLoaded
} from './shop.action';
import {IShop} from '../../models/i.shop';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {BeginLoading, StopLoading} from '../loading';
import {Store} from '@ngrx/store';
import {allShops, filterTemp} from './shop.selector';
import {snapshotChanges} from '@angular/fire/database';
import {IUserFireCloud} from "../../models/iuser-fire-cloud";
import {IFilter2} from "../../models/i.filter";

@Injectable()
export class ShopEffects {

  lastVisibleShop: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;

  constructor(private actions$: Actions, private afStore: AngularFirestore, private store: Store) {}

  @Effect({dispatch: false})
  public saveFiltersCompleted$ = this.actions$.pipe(
    ofType(SAVE_FILTERS_TYPE),
    withLatestFrom(this.store.select(filterTemp)),
    map(([action, stateFilters]) => {
      this.saveFilters(stateFilters);
      return new SaveFilterTypeCompleted();
    }),
    catchError(err => err)
  );

  @Effect()
  public shopCountLoadCompleted$ = this.actions$.pipe(
    ofType(TOTAL_SHOP_COUNT),
    mergeMap((s) => {
      return this.loadShopCount();
    }),
    concatMap((totalShopCount: number) => {
      return [new TotalShopCountLoaded(totalShopCount), new StopLoading()];
    })
  );


  @Effect()
  public loadedShops$ = this.actions$.pipe(
    ofType(LOAD_SHOPS_STARTED, NEXT_SHOPS),
    withLatestFrom(this.store.select(allShops)),
    switchMap(([action, stateShops]) => {
      return  this.loadShops(stateShops);
    }),
    concatMap((shopsList: IShop[]) => {
      return [new LoadShopsCompleted(shopsList), new LoadTotalShopCount()];
    })
  );

  private loadShopCount(): Observable<number> {
    return this.afStore.collection('app').doc('conf').valueChanges()
      .pipe(map((data: {shops_count: number}) => data.shops_count));
  }

  private loadShops(stateShops: IShop[]): Observable<IShop[]> {
    const shopCollection = this.afStore.collection('/shops', shopsList => {

      const nextShops =
        this.lastVisibleShop ? shopsList.startAfter(this.lastVisibleShop).limit(10) : shopsList.limit(10);

      nextShops.get().then(documentSnapshots => {
        this.lastVisibleShop = documentSnapshots.docs[documentSnapshots.docs.length - 1];
      });

      return nextShops;
    });

    return shopCollection.valueChanges({idField: 'id'}).pipe(map((shopsList: IShop[]) => {
      if (!stateShops) {
        return shopsList;
      }

      return stateShops.concat(shopsList);
    }));
  }

  private saveFilters(filters: IFilter2): void {
    console.log("save Filters");
     this.afStore.collection(`app/`).doc<any>('filters')
      .set({'v1' : {
        attire_type: [...filters.attire_type],
        city: [...filters.city],
        country: [...filters.country],
        state: [...filters.state],
        store_type: [...filters.store_type]
      }});
  }

}

