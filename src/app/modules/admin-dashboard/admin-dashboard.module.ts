import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {AdminsRoutingModule} from './routing.module';
import {AdminToolbarComponent} from './component/admin-toolbar/admin-toolbar.component';
import {ShopsTableComponent} from './component/shops-table/shops-table.component';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [DashboardComponent, AdminToolbarComponent, ShopsTableComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    MaterialModule
  ],
})
export class AdminDashboardModule { }
