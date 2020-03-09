import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { AboutUsComponent } from './about-us.component';

const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  }
]
@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    RouterModule.forChild(aboutRoutes),
    CommonModule,
    SharedModule
  ]
})
export class AboutUsModule { }
