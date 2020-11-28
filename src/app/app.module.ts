import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import {EffectsModule} from '@ngrx/effects';
import { ShopEffects} from './store/shops';
import {StoreModule} from '@ngrx/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthEffect} from './store/auth';
import * as fromStore from './store';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import {RouterModule} from '@angular/router';
import { UserProfileDialogComponent } from './components/user-profile-dialog/user-profile-dialog.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material/material.module';
import {UserEffect} from './store/user';
import appRoutes from './routerConfig';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    FilterBarComponent,
    SidenavComponent,
    HeaderToolbarComponent,
    UserProfileDialogComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    CommonModule,
    BrowserModule,
    EffectsModule.forRoot([ShopEffects, AuthEffect, UserEffect]),
    StoreModule.forRoot(fromStore.reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    }),
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
