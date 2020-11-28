import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {concatMap, exhaustMap, map, switchMap} from 'rxjs/operators';
import {
  LOAD_SHOPS_STARTED,
  LoadShopsCompleted, LoadTotalShopCount,
  NEXT_SHOPS,
  TOTAL_SHOP_COUNT,
  TotalShopCountLoaded
} from './shop.action';
import {IShop} from '../../models/i.shop';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable()
export class ShopEffects {

  lastVisibleShop: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;

  constructor(private actions$: Actions, private afStore: AngularFirestore) {}

  @Effect()
  public loadedShops$ = this.actions$.pipe(
    ofType(TOTAL_SHOP_COUNT),
    switchMap(() =>  this.loadShopCount()),
    map((totalShopCount: number) => {
      return new TotalShopCountLoaded(totalShopCount);
    })
  );


  @Effect()
  public shopCountLoadCompleted$ = this.actions$.pipe(
    ofType(LOAD_SHOPS_STARTED, NEXT_SHOPS),
    switchMap(() =>  this.loadShops()),
    concatMap((shopsList: IShop[]) => {
      return [new LoadShopsCompleted(shopsList), new LoadTotalShopCount()];
    })
  );

  private loadShopCount(): Observable<number> {
    return this.afStore.collection('app').doc('conf').valueChanges()
      .pipe(map((data: {shops_count: number}) => data.shops_count));
  }

  private loadShops(): Observable<IShop[]> {
    const shopCollection = this.afStore.collection('/shops', shopsList => {

      const nextShops =
        this.lastVisibleShop ? shopsList.startAfter(this.lastVisibleShop).limit(10) : shopsList.limit(10);


      nextShops.get().then(documentSnapshots => {
        this.lastVisibleShop = documentSnapshots.docs[documentSnapshots.docs.length - 1];
      });

      return nextShops;
    });

    return shopCollection.valueChanges({idField: 'id'}).pipe(map((shopsList: IShop[]) => shopsList));
  }
}

