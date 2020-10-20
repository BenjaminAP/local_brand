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
        name: "Jam",
        social_media_type: "Instagram",
        url: "www.shopjampr.com",
        powered_by: "Shopify",
        store_type: "Boutique",
        attire_type: "Clothing",
        social_media: "@shopjampr",
        country: "Puerto Rico",
        email: "",
        image: "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/43129923_159952481610871_8152921480653438976_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=X6PU7B-FvUYAX-MF0kY&oh=807bac9c573565a915ac0d00bf7ad395&oe=5FB775F3"
      },
      {
        name: "Aloha Sandals",
        social_media_type: "Instagram",
        url: "www.alohas.io",
        powered_by: "Shopify",
        store_type: "Brand",
        attire_type: "Shoes",
        social_media: "@alohas",
        country: "España / Barcelona",
        email: "",
        image: "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/103940817_279911593201294_4936711103091584414_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=al2Jb_wd-LUAX_F7K9i&oh=4733214c5263743cc3d792c5a5717582&oe=5FB8EDB9"
      },
      {
        name: "Gypsy Beach",
        social_media_type: "Instagram",
        url: "https://snapppt.com/gypsy_beach",
        powered_by: "SNPT",
        store_type: "Store",
        attire_type: "Swimwear/ Beachwear",
        social_media: "@gypsy_beach",
        country: "Unknown",
        email: "",
        image: "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/11351670_1683952935171599_932888717_a.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=bp9cGe-Nh30AX9KIqKI&oh=acacfc5a50bb7cfc4b7c7d98eaa215c5&oe=5FB6A7CA"
      },
      {
        name: "Fleur of England",
        social_media_type: "Instagram",
        url: "https://www.fleurofengland.com",
        powered_by: "",
        store_type: "Brand",
        attire_type: "Lingerie",
        social_media: "@fleurofengland",
        country: "England",
        email: "",
        image: "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/83115241_168213011081837_1429592118015295488_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=Oy6qwL2xirIAX839VJh&oh=899438233f6d526b30acb15dfb25c44f&oe=5FB6DA8A"
      },
      {
        name: "Costa Jewelry",
        social_media_type: "Instagram",
        url: "https://costajewelrypr.com",
        powered_by: "Shopify",
        store_type: "Brand",
        attire_type: "Jewelry",
        social_media: "@costajewelry_bytmt",
        country: "Puerto Rico, San Juan",
        email: "",
        image: "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/95369548_593729811501415_3630767289621544960_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=eMH3a23P4rAAX_TqkTm&oh=299b43fd0576d74b390e30aee0190741&oe=5FB6F2D3"
      },
      {
        name: "Baghsu Jewels",
        social_media_type: "Instagram",
        url: "https://bahgsujewels.com",
        powered_by: "",
        store_type: "Brand",
        attire_type: "Jewelry",
        social_media: "@bahgsujewels",
        country: "Unknown",
        email: "",
        image: "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/69945956_388679942079871_7946652343368417280_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=x-B2lgvazXgAX-tn4lw&oh=39dc43ece191cef20d592a0cd7843e2b&oe=5FB6A3F1"
      },
      {
        name: "BuDhaGirl",
        social_media_type: "Instagram",
        url: "https://budhagirl.com",
        powered_by: "",
        store_type: "Brand",
        attire_type: "Jewelry",
        social_media: "@budhagirl",
        country: "United States, Texas",
        email: "",
        image: "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/98478419_2948542595236015_418847654542311424_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=IyVgyUa3FcgAX94K_q_&oh=1d673c3a814aad663e3e70cfa8c1dae8&oe=5FB5E094"
      },
      {
        name: "Stillo Boutique ny Camille",
        social_media_type: "Instagram",
        url: "https://sttilobtq.com",
        powered_by: "Shopify",
        store_type: "Boutique",
        attire_type: "Cloth/Designer",
        social_media: "@sttilobtq",
        country: "Puerto Rico, San Juan",
        email: "",
        image: "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/120908816_688417291776996_488417178551617383_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=KqqB72Q3F5EAX8i6tCL&oh=3f8680096791b7bac4e6dd40a8e182b7&oe=5FB7E541"
      },
    );
  }

  public loadShops(): Observable<IShop[]> {
    return of(this.shopList);
  }
}
