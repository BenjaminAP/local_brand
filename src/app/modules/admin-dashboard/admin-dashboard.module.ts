import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {AdminsRoutingModule} from './routing.module';
import {AdminToolbarComponent} from './component/admin-toolbar/admin-toolbar.component';
import {ShopsTableComponent} from './component/shops-table/shops-table.component';
import {MaterialModule} from '../material/material.module';
import {AddShopDialogComponent} from './component/add-shop-dialog/add-shop-dialog.component';
import {ShopFormComponent} from './component/shop-form/shop-form.component';
import {FilterTypesComponent} from "./component/filter-types/filter-types.component";



@NgModule({
  declarations: [
    DashboardComponent,
    AdminToolbarComponent,
    ShopsTableComponent,
    AddShopDialogComponent,
    ShopFormComponent,
    FilterTypesComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    MaterialModule
  ],
})
export class AdminDashboardModule { }
