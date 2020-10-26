import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import {EffectsModule} from '@ngrx/effects';
import { ShopEffects} from './effects/shop.effect';
import {StoreModule} from '@ngrx/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {shopReducer} from './reducers/stores.reducer';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    FilterBarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    EffectsModule.forRoot([ShopEffects]),
    StoreModule.forFeature('shops', shopReducer),
    StoreModule.forRoot(shopReducer),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
