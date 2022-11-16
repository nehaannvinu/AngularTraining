import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core'

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
        priority: this.allTasks.length + 1,
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

  onEditAction(x: any, i: number, _id?: string) {
    if (_id) {
      const itemId = {
        id: _id,
        updated_task: x.target.value,
      }
      this.todoService.editTask(itemId).subscribe((response) => {
        console.log()
        this.allTasks[i].title = response.data.title
      })
    }
  }

  markDone(i: number) {
    const currentStatus = this.allTasks[i].status
    this.allTasks[i].status = !currentStatus
  }

  deleteItem(i: number, _id?: string) {
    if (_id) {
      this.todoService.deleteTask(_id).subscribe((response) => {
        if (response.status == 'SUCCESS') {
          this.allTasks.splice(i, 1)
        }
      })
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allTasks, event.previousIndex, event.currentIndex)
    console.log('Event Item', event.previousIndex, '=====>', event.currentIndex)
    console.log('Event Item', event.item.element.nativeElement)
  }
}
