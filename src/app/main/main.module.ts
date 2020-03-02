import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReportingComponent } from './reporting/reporting.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { SettingsComponent } from './settings/settings.component'

import { SharedModule } from '../shared/shared.module';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'documents',
        component: DocumentsComponent
      },
      {
        path: "messages",
        component: MessagesComponent
      },
      {
        path: "navigation",
        component: NavigationComponent
      },
      {
        path: "reporting",
        component: ReportingComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    SideNavComponent,
    ReportingComponent,
    HeaderComponent,
    MessagesComponent,
    NavigationComponent,
    DocumentsComponent,
    SettingsComponent
  ],
  imports: [
    RouterModule.forChild(mainRoutes),
    CommonModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
