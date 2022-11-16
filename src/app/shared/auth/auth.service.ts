import { Injectable } from '@angular/core'
import { User } from '../../models/User'

import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'

import { AuthModule } from './auth.module'

@Injectable({
  providedIn: 'any',
})
export class AuthService {
  user: any
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user
        localStorage.setItem('user', JSON.stringify(this.user))
      } else {
        localStorage.clear()
      }
    })
  }

  async signIn(userData: User) {
    const result = await this.afAuth.signInWithEmailAndPassword(
      userData.email,
      userData.password,
    )
    this.router.navigate(['/calc'])
  }
  isLoggedIn() {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) return false
    const user = JSON.parse(storedUser)
    return !!user
  }
  logout() {
    this.afAuth.signOut()
  }
}
