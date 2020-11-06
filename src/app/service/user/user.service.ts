import { Injectable } from '@angular/core';
import {UploadFavShops} from '../../store/user';
import {Store} from '@ngrx/store';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: Store){}

  uploadFavoriteShop(): void {
    this.store.dispatch(new UploadFavShops());
  }
}
