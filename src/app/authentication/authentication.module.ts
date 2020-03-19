import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../authentication/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginDecisionComponent } from './login-decision/login-decision.component';


const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login-decision',
    component: LoginDecisionComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent, 
    AuthenticationComponent, 
    LoginDecisionComponent
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
