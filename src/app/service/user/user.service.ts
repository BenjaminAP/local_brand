import { Injectable } from '@angular/core';
import {UploadFavShops} from '../../store/user';
import {Store} from '@ngrx/store';
import {IUser} from "../../models/i.user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: Store){}

  uploadFavoriteShop(user: IUser): void {
    this.store.dispatch(new UploadFavShops(user));

  }
}
