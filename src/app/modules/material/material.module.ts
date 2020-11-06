import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatOptionModule, MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
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
    MatDialogModule,
    MatListModule
  ],
  exports: [
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
    MatDialogModule,
    MatListModule
  ]
})
export class MaterialModule { }
