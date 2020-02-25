import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { ServicesComponent } from '../services/services.component';


const homeRoutes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'features',
    component: FeatureComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
