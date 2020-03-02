import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ContactUsComponent } from './contact-us.component';

const contactRoutes: Routes = [
  {
    path: '',
    component: ContactUsComponent
  }
]
@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    RouterModule.forChild(contactRoutes),
    CommonModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class ContactUsModule { }
