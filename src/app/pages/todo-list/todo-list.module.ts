import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodoListRoutingModule } from './todo-list-routing.module'

import { TodoListComponent } from './todo-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import {DragDropModule} from '@angular/cdk/drag-drop';

import { ChildComponent } from 'src/app/components/child/child.component'
import { TodoService } from './todo.service'

@NgModule({
  declarations: [TodoListComponent, ChildComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule
  ],
  providers: [TodoService]
})
export class TodoListModule {}
