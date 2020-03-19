import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
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

  isDriver = false; 
  isCustomer = false;

  isLoginMode = true;
  isLoading = false;
  error: string = null;



  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    });
    this.registerForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }


  onDriverChange(e){
    let value = null
    if(e.target.checked == true){
      value = true

      console.log('you clicked')
    }else{
      value = false
      console.log('you unclicked')
    }
    this.isDriver = value;
    console.log("isDriver:",this.isDriver)
  }

  onCustomerChange(e){
    let value = null
    if(e.target.checked == true){
      value = true

      console.log('you clicked')
    }else{
      value = false
      console.log('you unclicked')
    }
    this.isCustomer = value;
    console.log("isCustomer",this.isCustomer)
  }



  onSubmit() {
    this.authenticationService.registerUser({
      username: this.registerForm.value.username,
      isDriver: this.isDriver,
      isCustomer: this.isCustomer,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      isBoth: false
    })

    // this.registerForm.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
