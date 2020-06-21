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
import { GiffyComponent } from './giffy/giffy.component';
import {MatListModule}  from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    GiffyComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    MatListModule,
     RouterModule.forRoot([
      {path: '' , redirectTo: '/login' , pathMatch: 'full' },
      {path: 'home' , component : HomeComponent },
      {path: 'login' , component : LoginComponent },
      {path: 'sampritahome' , component : RegistrationComponent },
      ])
  ],

  providers: [RegistrationapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
