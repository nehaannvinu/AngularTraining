import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcLayoutRoutingModule } from './calc-layout-routing.module';
import { RouterModule } from '@angular/router';
import { CalcLayoutComponent } from './calc-layout.component';


@NgModule({
  declarations: [CalcLayoutComponent],
  imports: [
    CommonModule,
    CalcLayoutRoutingModule,
    RouterModule,
  ]
})
export class CalcLayoutModule { }
