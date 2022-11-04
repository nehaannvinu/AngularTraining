import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CalcRoutingModule } from './calc-routing.module'
import { CalcComponent } from './calc.component'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [CommonModule, CalcRoutingModule, MatButtonModule, MatInputModule],
  declarations: [CalcComponent],
})
export class CalcModule {}
