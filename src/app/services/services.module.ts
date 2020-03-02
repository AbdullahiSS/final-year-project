import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'
import { ServicesComponent } from './services.component';

const serviceRoutes: Routes = [
  {
    path: '',
    component: ServicesComponent
  }
]

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    RouterModule.forChild(serviceRoutes),
    CommonModule,
    SharedModule
  ]
})
export class ServicesModule { }
