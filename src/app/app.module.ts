import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import {EffectsModule} from '@ngrx/effects';
import { ShopEffects} from './store/shops';
import {StoreModule} from '@ngrx/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatOptionModule, MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AuthComponent } from './components/auth/auth.component';
import {AuthEffect} from './store/auth';
import * as fromStore from './store';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    FilterBarComponent,
    AuthComponent,
    SidenavComponent,
    HeaderToolbarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    EffectsModule.forRoot([ShopEffects, AuthEffect]),
    StoreModule.forRoot(fromStore.reducers),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    MatChipsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
