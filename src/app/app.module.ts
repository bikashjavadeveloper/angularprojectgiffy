import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './core/material.module'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegistrationapiService } from './registrationapi.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import { SecurityComponent } from './security/security.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {path: '' , redirectTo: '/login' , pathMatch: 'full' },
      {path: 'home' , component : HomeComponent },
      {path: 'login' , component : LoginComponent },
      {path: 'registration' , component : RegistrationComponent },
      ])
  ],

  providers: [RegistrationapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
