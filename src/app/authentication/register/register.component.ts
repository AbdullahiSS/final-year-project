import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService, AuthenticationResponseData } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
    this.registerForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onSubmit() {

    this.authenticationService.registerUser({
      type: this.registerForm.value.type,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    })

    this.registerForm.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
