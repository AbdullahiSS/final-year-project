import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const authRoutes: Routes = [
  // {
  //   path: '',
  //   component: AuthenticationComponent
  // }
  {
    path: 'login',
    // canActivate:[AuthGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    // canActivate:[AuthGuard],
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent, 
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationModule { }
