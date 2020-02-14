import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    //this method should not be triggered if the form is invalid because the submit button is disabled 
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authenticationService.register(email, password)
    form.reset();
  }
}
