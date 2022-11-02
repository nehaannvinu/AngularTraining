import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CalcRoutingModule } from './calc-routing.module'
import { CalcComponent } from './calc.component'

@NgModule({
  imports: [CommonModule, CalcRoutingModule],
  declarations: [CalcComponent],
})
export class CalcModule {}
