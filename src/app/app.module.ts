import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/index';

import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { DinoListComponent } from './dino-list/dino-list.component';
import { RandomDinoComponent } from './random-dino/random-dino.component';
import { AlertService, AuthenticationService, UserService, DistrictService, 
  SubDistrictService, VillageService } from './_services/index';
import {CountryListComponent} from './country-form/index';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

// import { AppComponent }  from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BasicComponent,
    DinoListComponent,
    RandomDinoComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AppConfig,
    AuthenticationService,
    AlertService,
    UserService,
    DistrictService,
    SubDistrictService,
    VillageService
],
  bootstrap: [AppComponent]
})

export class AppModule { }
