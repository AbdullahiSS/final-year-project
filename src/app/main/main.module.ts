import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ReportingComponent } from './reporting/reporting.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [MainComponent, SideNavComponent, VehiclesComponent, ReportingComponent, OverviewComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
