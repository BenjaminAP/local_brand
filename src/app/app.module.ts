import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import {EffectsModule} from "@ngrx/effects";
import {ShopEffect} from "./effects/shop.effect";
import {StoreModule} from "@ngrx/store";

import * as fromShop from "../app/reducers/stores.reducer"

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([ShopEffect]),
    StoreModule.forRoot({shops: fromShop.reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
