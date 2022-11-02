import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'calc',
    loadChildren: () => import('./calc/calc.module').then((m) => m.CalcModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
