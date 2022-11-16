import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { UserDetails } from '../models/UserDetails'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getData(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api/user')
  }

  public post(user: UserDetails): Observable<any> {
    console.log(user)
    return this.httpClient.post('http://localhost:3000/api/user', user)
  }
}
