import { Component, ViewEncapsulation } from '@angular/core'
import { AuthService } from './shared/auth/auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'My App'

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('/login')
  }
}
