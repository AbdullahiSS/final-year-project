import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReportingComponent } from './reporting/reporting.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

const mainRoutes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "side-nav",
        component: SideNavComponent
      },
      {
        path: "messages",
        component: MessagesComponent
      },
      {
        path: "navigation",
        component: NavigationComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    SideNavComponent,
    ReportingComponent,
    OverviewComponent,
    HeaderComponent,
    MessagesComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    SharedModule
  ]
})
export class MainModule { }
