import { Injectable } from '@angular/core'
import { User } from './user'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signIn(userData: User) {
    localStorage.setItem('ACCESS_TOKEN', userData.password)
  }
  isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null
  }
  logout() {
    localStorage.removeItem('ACCESS_TOKEN')
  }
}
