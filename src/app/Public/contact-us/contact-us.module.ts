import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ContactUsModule { }
