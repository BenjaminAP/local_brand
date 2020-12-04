import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, concatMap, exhaustMap, map, mergeMap, startWith, switchMap, withLatestFrom} from 'rxjs/operators';
import {
  LOAD_FILTER_TYPE_STARTED,
  LOAD_SHOPS_STARTED, LoadFilterTypes, LoadFilterTypesCompleted,
  LoadShopsCompleted, LoadTotalShopCount,
  NEXT_SHOPS,
  TOTAL_SHOP_COUNT,
  TotalShopCountLoaded
} from './shop.action';
import {IShop} from '../../models/i.shop';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {BeginLoading, StopLoading} from '../loading';
import {Store} from '@ngrx/store';
import {allShops, filterTemp} from './shop.selector';
import {IFilter, IFilter2, IFilter3} from '../../models/i.filter';

@Injectable()
export class ShopEffects {

  lastVisibleShop: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;

  constructor(private actions$: Actions, private afStore: AngularFirestore, private store: Store) {}

  // @Effect({dispatch: false})
  // public saveFiltersCompleted$ = this.actions$.pipe(
  //   ofType(SAVE_FILTERS_TYPE),
  //   withLatestFrom(this.store.select(filterTemp)),
  //   map(([action, stateFilters]) => {
  //     this.updateFilters(stateFilters);
  //     return new SaveFilterTypeCompleted();
  //   }),
  //   catchError(err => err)
  // );

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
  public LoadedFilterTypes$ = this.actions$.pipe(
    ofType(LOAD_FILTER_TYPE_STARTED),
    mergeMap(() => this.loadFilters()),
    map((filterTypes: IFilter2) => {

      const storeType: IFilter[] = [];
      const attireType: IFilter[] = [];
      const countryObj: IFilter[] = [];
      const stateObj: IFilter[] = [];
      const cityObj: IFilter[] = [];

      filterTypes.store_type.forEach(
        (typeName: string) => {
          storeType.push({
            type: typeName,
            active: false,
          });
        });

      filterTypes.attire_type.forEach(
        (typeName: string) => {
          attireType.push({
            type: typeName,
            active: false,
          });
        });

      filterTypes.country.forEach(
        (typeName: string) => {
          countryObj.push({
            type: typeName,
            active: false,
          });
        });

      filterTypes.state.forEach(
        (typeName: string) => {
          stateObj.push({
            type: typeName,
            active: false,
          });
        });

      filterTypes.city.forEach(
        (typeName: string) => {
          cityObj.push({
            type: typeName,
            active: false,
          });
        });

      const mappedFilters: IFilter3 = {
        store_type: storeType,
        attire_type: attireType,
        country: countryObj,
        state: stateObj,
        city: cityObj,
      };


      return new LoadFilterTypesCompleted(mappedFilters);
    })
  );

  @Effect()
  public loadedShops$ = this.actions$.pipe(
    ofType(LOAD_SHOPS_STARTED),
    withLatestFrom(this.store.select(allShops)),
    switchMap(([action, stateShops]) => {
      return  this.loadShops(stateShops);
    }),
    concatMap((shopsList: IShop[]) => {
      return [new LoadShopsCompleted(shopsList), new LoadFilterTypes(), new LoadTotalShopCount()];
    })
  );

  @Effect()
  public loadedNextShops$ = this.actions$.pipe(
    ofType(NEXT_SHOPS),
    withLatestFrom(this.store.select(allShops)),
    switchMap(([action, stateShops]) => {
      return  this.loadShops(stateShops);
    }),
    concatMap((shopsList: IShop[]) => {
      return [new LoadShopsCompleted(shopsList), new StopLoading()];
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

  private loadFilters(): Observable<IFilter2> {
    return this.afStore.collection('app').doc('filters').valueChanges()
      .pipe(map((filtersVersion: {v1 :  IFilter2}) => {
        return filtersVersion.v1;
      }));
  }

  private updateFilters(filters: IFilter2): void {
    console.log('save Filters');
    this.afStore.collection(`app/`).doc<any>('filters')
      .set({v1 : {
        attire_type: [...filters.attire_type],
        city: [...filters.city],
        country: [...filters.country],
        state: [...filters.state],
        store_type: [...filters.store_type]
      }});
  }

}

