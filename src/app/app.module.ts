import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { AboutUsModule } from './about-us/about-us.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,  
    AuthenticationModule,
    SharedModule,
    HomeModule,
    ServicesModule,
    AboutUsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
