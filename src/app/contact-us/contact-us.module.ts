import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

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
    CommonModule
  ],
  exports: [RouterModule]
})
export class ContactUsModule { }
