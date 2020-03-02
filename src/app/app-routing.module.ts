import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./home/home.module").then(d => d.HomeModule)
  },
  {
    path: 'services',
    loadChildren: () => import ("./services/services.module").then(d => d.ServicesModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import ("./about-us/about-us.module").then(d => d.AboutUsModule)  
  },
  {
    path: 'contact-us', 
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: '',
    loadChildren: () => import("./authentication/authentication.module").then(d => d.AuthenticationModule)
  },
  {
    path: 'main',
    loadChildren: () => import("./main/main.module").then(d => d.MainModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
