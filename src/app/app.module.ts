import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import {EffectsModule} from '@ngrx/effects';
import { ShopEffects} from './effects/shop.effect';
import {StoreModule} from '@ngrx/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {shopReducer} from '../app/reducers/stores.reducer';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([ShopEffects]),
    StoreModule.forFeature('shops', shopReducer),
    StoreModule.forRoot(shopReducer),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
