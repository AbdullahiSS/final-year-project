import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService, AuthenticationResponseData } from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.sass']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'type': new FormControl('', Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });

    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });

    //tracking form state
    // this.loginForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.loginForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    // this.loginForm.valueChanges.subscribe( 
    this.registerForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onSubmit() {
    // if (!this.loginForm.valid) {
    //   return;
    // }

    this.authenticationService.login({
      // type: this.loginForm.value.type,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })

    this.authenticationService.registerUser({
      // type: this.registerForm.value.type,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    })

    this.loginForm.reset();
    this.registerForm.reset();
    // this.authenticationService.register({
    //   email: this.registerForm.value.email,
    //   password: this.registerForm.value.password
    // })

    // console.log(this.loginForm.value);
    // console.log(this.registerForm.value)

    // let authObs: Observable<AuthenticationResponseData>;

    // this.isLoading = true;
    // if (this.isLoginMode) {
    //   this.authenticationService.login(email, password).subscribe(
    //     resData => {
    //       console.log(resData);
    //       this.isLoading = false;
    //     },
    //     errorMessage => {
    //       console.log(errorMessage);
    //       this.error = errorMessage;
    //       this.isLoading = false;
    //     }
    //   );
    // } else {
    //   this.authenticationService.registerUser(email, password).subscribe(
    //     resData => {
    //       console.log(resData);
    //       this.isLoading = false;
    //     },
    //     errorMessage => {
    //       console.log(errorMessage);
    //       this.error = errorMessage;
    //       this.isLoading = false;
    //     }
    //   );
    // }
    
  }

  // setValue() {
  //   this.loginForm.setValue({email: 'test@email.com', password: 'testing123'});
  // }

  //For asynchronous validation
  // forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //If you're working with an array
  // if (control.value === ['']) {
  //       if (control.value === 'test@email.com') {
  //         resolve({ 'emailIsForbidden': true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });
  //   return promise;
  // }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
