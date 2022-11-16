import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TodoListComponent } from './pages/todo-list/todo-list.component'
import { TodoListModule } from './pages/todo-list/todo-list.module'
import { RegisterComponent } from './pages/register/register.component'
import { RegisterModule } from './pages/register/register.module'
import { ChildComponent } from './components/child/child.component'
import { AuthGuard } from './shared/auth/auth.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/calc-layout/calc-layout.module').then(
        (m) => m.CalcLayoutModule,
      ),
  },
  // {
  //   path: 'child',
  //   component: ChildComponent,
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'todo',
    component: TodoListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes), TodoListModule, RegisterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
