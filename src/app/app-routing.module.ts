import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';


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
    path: 'authentication',
    // canActivate:[AuthGuard],
    // canActivateChild: [AuthGuard],
    loadChildren: () => import("./authentication/authentication.module").then(d => d.AuthenticationModule)
  },
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () => import("./main/main.module").then(d => d.MainModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
