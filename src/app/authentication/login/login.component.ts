import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AuthenticationResponseData } from '../authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authenticationService: AuthenticationService, private db: AngularFirestore) {
    
  }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'type': new FormControl('', Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });

    this.loginForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

  }

  onSubmit() {

    this.authenticationService.login({
      isDriver: this.loginForm.value.isDriver,
      isCustomer: this.loginForm.value.isCustomer,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });

    this.loginForm.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
