import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {AdminsRoutingModule} from './routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
})
export class AdminDashboardModule { }
