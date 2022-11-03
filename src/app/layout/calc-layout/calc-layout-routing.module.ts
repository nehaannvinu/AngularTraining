import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from 'src/app/auth.guard'
import { CalcLayoutComponent } from './calc-layout.component'

const routes: Routes = [
  {
    path: '',
    component: CalcLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../../auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'calc',
        loadChildren: () =>
          import('../../calc/calc.module').then((m) => m.CalcModule),
        canActivate: [AuthGuard],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcLayoutRoutingModule {}
