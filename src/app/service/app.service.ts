import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';
import {IShop} from '../models/i.shop';
import {Observable, of} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class AppService {
  // protected config: DbConfig;
  // protected database: firebase.database.Database;
  private shopList: IShop[];

  constructor() {
    // this.config = {
    //   apiKey: 'AIzaSyAaVgvtFxivNr2YR06RpakeVq0K8xTbxrQ',
    //   authDomain: 'localbrands-966b6.firebaseio.com',
    //   databaseURL: 'https://localbrands-966b6.firebaseio.com',
    //   storageBucket: 'localbrands-966b6.appspot.com',
    // };

    // firebase.initializeApp(this.config);
    // this.database = firebase.database();

    // this.database.ref('/').once('value').then((snapshot => {
    //
    //   snapshot.val().forEach((shop: IShop) => {
    //     this.shopList.push({
    //       name: shop.name,
    //       social_media_type: shop.social_media_type,
    //       url: shop.url,
    //       powered_by: shop.powered_by,
    //       store_type: shop.store_type,
    //       attire_type: shop.attire_type,
    //       social_media: shop.social_media,
    //       country: shop.country,
    //       email: shop.email
    //     });
    //   });
    // }));

    this.shopList = new Array<IShop>();
    this.shopList.push(
      {
        name: 'Jam',
        social_media_type: 'Instagram',
        url: 'www.shopjampr.com',
        powered_by: 'Shopify',
        store_type: 'Boutique',
        attire_type: 'Clothing',
        social_media: '@shopjampr',
        country: 'Puerto Rico',
        email: ''
      },
      {
        name: 'Aloha Sandals',
        social_media_type: 'Instagram',
        url: 'www.alohas.io',
        powered_by: 'Shopify',
        store_type: 'Brand',
        attire_type: 'Shoes',
        social_media: '@alohas',
        country: 'España / Barcelona',
        email: ''
      },
      {
        name: 'Gypsy Beach',
        social_media_type: 'Instagram',
        url: 'https://snapppt.com/gypsy_beach',
        powered_by: 'SNPT',
        store_type: 'Store',
        attire_type: 'Swimwear/ Beachwear',
        social_media: '@gypsy_beach',
        country: 'Unknown',
        email: ''
      },
      {
        name: 'Fleur of England',
        social_media_type: 'Instagram',
        url: 'https://www.fleurofengland.com',
        powered_by: '',
        store_type: 'Brand',
        attire_type: 'Lingerie',
        social_media: '@fleurofengland',
        country: 'England',
        email: ''
      },
      {
        name: 'Costa Jewelry',
        social_media_type: 'Instagram',
        url: 'https://costajewelrypr.com',
        powered_by: 'Shopify',
        store_type: 'Brand',
        attire_type: 'Jewelry',
        social_media: '@costajewelry_bytmt',
        country: 'Puerto Rico, San Juan',
        email: ''
      },
      {
        name: 'Baghsu Jewels',
        social_media_type: 'Instagram',
        url: 'https://bahgsujewels.com',
        powered_by: '',
        store_type: 'Brand',
        attire_type: 'Jewelry',
        social_media: '@bahgsujewels',
        country: 'Unknown',
        email: ''
      }
    );
  }

  public loadShops(): Observable<IShop[]> {
    return of(this.shopList);
  }
}
