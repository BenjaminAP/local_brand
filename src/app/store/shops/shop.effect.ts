import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {LOAD_SHOPS_STARTED, LoadShopsCompleted, NEXT_SHOPS} from './shop.action';
import {IShop} from '../../models/i.shop';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable()
export class ShopEffects {

  lastVisibleShop: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;

  constructor(private actions$: Actions, private afStore: AngularFirestore) {}

  @Effect()
  public loadFirstShops$ = this.actions$.pipe(
    ofType(LOAD_SHOPS_STARTED, NEXT_SHOPS),
    switchMap(() =>  this.loadShops()),
    map((shopsList: IShop[]) => {
      return new LoadShopsCompleted(shopsList);
    })
  );

  private loadShops(): Observable<IShop[]> {
    const shopCollection = this.afStore.collection('/shops', shopsList => {

      console.log(this.lastVisibleShop);

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

