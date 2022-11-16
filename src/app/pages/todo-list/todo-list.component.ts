import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

import { Todo } from 'src/app/models/Todo'
import { TodoService } from './todo.service'
import { first } from 'rxjs'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  item: string
  allTasks: Todo[] = []

  // allTask2: any[] = []
  // editOn: boolean = true

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTasks().subscribe((user) => {
      this.allTasks = user.data
      console.log(this.allTasks)
    })
  }

  addItem() {
    if (this.item != '') {
      const task: Todo = {
        title: this.item,
        modificationDetails: {
          created_on: new Date(),
          modified_on: new Date(),
        },
        status: false,
      }

      this.todoService
        .postTask(task)
        .pipe(first())
        .subscribe((response) => {
          this.allTasks.push(response.data)
        })

      this.item = ''
    }
  }

  onEditAction(x: any, i: number) {
    this.allTasks[i].title = x.target.value
  }

  markDone(i: number) {
    const currentStatus = this.allTasks[i].status
    this.allTasks[i].status = !currentStatus
  }

  deleteItem(i: number) {
    this.allTasks.splice(i, 1)
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allTasks, event.previousIndex, event.currentIndex)
  }
}
