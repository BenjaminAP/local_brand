import { Injectable } from '@angular/core';
import {IShop} from '../../models/i.shop';
import { Observable, of} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {Store} from '@ngrx/store';
import {
  authDetails,
  IAuthState, connectedSelector, Logout
} from '../../store/auth';
import {AngularFireAuth} from '@angular/fire/auth';
import {IUser} from '../../models/i.user';
import {favShopsSelector$, ToggleFavShop, userDetailsSelector} from '../../store/user';
import * as ShopSelector from "../../store/shops/shop.selector";
import {allFilters, filteredShops} from "../../store/shops/shop.selector";
import {LoadAllShops, ToggleFilter} from "../../store/shops";
import {IFilter} from "../../models/i.filter";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly authDetails$: Observable<IAuthState>;
  temp: Observable<any>;

  constructor(private db: AngularFireDatabase,
              private store: Store<IAuthState>) {

    this.authDetails$ = this.store.select(authDetails);
    // this.temp = db.list('shops').valueChanges();
    // this.temp.subscribe(shops => console.log(shops));
  }

  public toggleFilter(filterId: string): void {
    this.store.dispatch(new ToggleFilter(filterId));
  }


  public getFiltersSelector(): Observable<IFilter[]> {
    return this.store.select(allFilters);
  }

  public getShopsSelector(): Observable<IShop[]> {
    return this.store.select(ShopSelector.allShops);
  }

  public getFilteredShopsSelector(): Observable<IShop[] | Set<IShop>> {
    return this.store.select(filteredShops)
  }

  public loadShops(): void {
    this.store.dispatch(new LoadAllShops());
    // return this.temp;
  }

  public toggleFavShop(shopId: string): void {
    return this.store.dispatch(new ToggleFavShop(shopId));
  }

  /// Todo
  public checkForLoginUserData(): void {

    // this.store.dispatch(new Login());
    // this.store.dispatch(new RetrieveAuth());

    // this.afAuth.onAuthStateChanged((userCredentials: User) => {
    //
    //   if (userCredentials === null) {
    //     this.afAuth.signOut();
    //   } else {
    //
    //     const userObj: IUser = {
    //       email: userCredentials.email,
    //       full_name: userCredentials.displayName,
    //       picture: userCredentials.photoURL,
    //       uid: userCredentials.uid,
    //       fav_stores: new Set<string>()
    //     };
    //
    //     const authObj: IAuth = {
    //       provider_id: null,
    //       verified_email: userCredentials.emailVerified,
    //       isNewUser: false,
    //       connected: true
    //     };
    //
    //     this.store.dispatch(new LoginFromState(authObj));
    //     this.store.dispatch(new ReceiveUserData(userObj));
    //   }
    //
    // })
    //   .catch(error => error);
  }

  checkUserConnection(): Observable<boolean> {
    return this.store.select(connectedSelector);
  }

  userDetails(): Observable<IUser> {
    return this.store.select(userDetailsSelector);
  }

}
