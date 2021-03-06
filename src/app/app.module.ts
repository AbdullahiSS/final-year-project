import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './public/home/home.module';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './public/services/services.module';
import { AboutUsModule } from './public/about-us/about-us.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthenticationService } from './authentication/authentication.service'
import { AuthGuard } from './authentication/auth.guard';
import { FireFormDirective } from './fire-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    FireFormDirective
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Logistics'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,  
    AuthenticationModule,
    SharedModule,
    HomeModule,
    ServicesModule,
    AboutUsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey

    })
  ],
  providers: [AuthenticationService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
