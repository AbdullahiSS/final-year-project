import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';


const homeRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent, 
    HeroComponent, 
    FeatureComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
