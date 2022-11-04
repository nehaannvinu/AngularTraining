import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}
  isSubmitted = false
  authForm: FormGroup

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get formControls() {
    return this.authForm.controls
  }

  signIn() {
    this.isSubmitted = true
    if (this.authForm.invalid) {
      return
    }
    this.authService.signIn(this.authForm.value)
    this.router.navigateByUrl('/calc')
  }
}
