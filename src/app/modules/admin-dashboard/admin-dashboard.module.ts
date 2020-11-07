import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {AdminsRoutingModule} from './routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule
  ],
})
export class AdminDashboardModule { }
