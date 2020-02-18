import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from './home.component';

const homeRoutes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(homeRoutes),
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
