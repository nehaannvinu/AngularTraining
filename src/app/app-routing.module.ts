import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TodoListComponent } from './todo-list/todo-list.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/calc-layout/calc-layout.module').then(
        (m) => m.CalcLayoutModule,
      ),
  },
  {
    path: 'todo',
    component: TodoListComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
