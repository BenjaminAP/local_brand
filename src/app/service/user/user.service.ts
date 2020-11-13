import { Injectable } from '@angular/core';
import {CheckForUserData, favShopsSelector$, UploadFavShops, userDetailsSelector} from '../../store/user';
import {Store} from '@ngrx/store';
import {IUser} from '../../models/i.user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: Store){}

  uploadFavoriteShop(user: IUser): void {
    this.store.dispatch(new UploadFavShops(user));
  }

  getFavShopIdsSelector(): Observable<Set<string>> {
    return this.store.select(favShopsSelector$);
  }

  getUserDataSelector(): Observable<IUser> {
    return this.store.select(userDetailsSelector);
  }

  checkForUserData(): void {
    this.store.dispatch(new CheckForUserData());
  }

  saveFavShops(user: IUser): void {
    this.store.dispatch(new UploadFavShops(user));
  }

}
