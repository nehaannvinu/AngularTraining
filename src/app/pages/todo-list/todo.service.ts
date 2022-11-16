import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Todo } from 'src/app/models/Todo'

@Injectable({
  providedIn: 'any',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  public getTasks(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/getTasks')
  }

  public postTask(todo: Todo): Observable<any> {
    return this.httpClient.post('http://localhost:3000/addtask', todo)
  }

  public editTask(id: Object): Observable<any> {
    return this.httpClient.put('http://localhost:3000/updateTask', id)
  }
  public deleteTask(id: string): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/deleteTask', {
      body: {
        id,
      },
    })
  }
}
