import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  user = ['driver', 'customer'];
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      users: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null)
    });

    this.registerForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'user': new FormControl('driver'),
    });
    // this.registerForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );
    this.registerForm.setValue({
      'userData': {
        'username': 'Abdallah',
        'email': 'abdallah@test.com'
      }
    });
    this.registerForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    });
  }

  onSubmit() {
    console.log(this.registerForm);
    this.registerForm.reset();
  }
}
