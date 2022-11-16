import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { first } from 'rxjs'

import { UserService } from 'src/app/shared/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  submitted = false
  users = ''

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      name: this.formBuilder.group({
        first_name: ['', Validators.required],
        middle_name: ['', Validators.required],
        last_name: ['', Validators.required],
      }),
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      gender: ['', Validators.required],
    })

    this.userService.getData().subscribe((user) => {
      this.users = JSON.stringify(user.Data)
      console.log(user.Data)
    })
  }

  get f() {
    return this.registerForm.controls
  }

  showSuccess() {
    alert('User registered!')
  }

  showFailure() {
    alert('Something went wrong')
  }

  onSubmit() {
    this.submitted = true

    if (this.registerForm.invalid) {
      return
    }

    this.userService
      .post(this.registerForm.value)
      .pipe(first())
      .subscribe({ next: this.showSuccess, error: this.showFailure })
  }
}
