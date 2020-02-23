import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


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
    loadChildren: () => import ("./contact-us/contact-us.module").then(d => d.ContactUsModule)
  },
  // {
  //   path: 'services',
  //   component: ServicesComponent
  // },
  // {
  //   path: 'about-us',
  //   component: AboutUsComponent
  // },
  // {
  //   path: 'contact-us',
  //   component: ContactUsComponent
  // },
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
