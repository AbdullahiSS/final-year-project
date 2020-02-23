import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./home/home.module").then(d => d.HomeModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import ("./about-us/about-us.module").then(d => d.AboutUsModule)  
  },
  {
    path: 'contact-us',
    loadChildren: () => import ("./contact-us/contact-us.module").then(d => d.ContactUsModule)
  },
  {
    path: 'services',
    loadChildren: () => import ("./services/services.module").then(d => d.ServicesModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import("./authentication/authentication.module").then(d => d.AuthenticationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import("./main/main.module").then(d => d.MainModule)
  },
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
