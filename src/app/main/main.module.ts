import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ReportingComponent } from './reporting/reporting.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './header/header.component';

const mainRoutes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "overview",
        component: OverviewComponent
      },
      {
        path: "vehicles",
        component: VehiclesComponent
      },
      // {
      //   path: "team",
      //   component: VehiclesComponent
      // },
      // {
      //   path: "messages",
      //   component: MessagesComponent
      // },
      // {
      //   path: "Navigation",
      //   component: NavigationComponent
      // }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    SideNavComponent,
    VehiclesComponent,
    ReportingComponent,
    OverviewComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
