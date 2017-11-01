import { NgModule } from '@angular/core';
import { DinoListComponent } from './dino-list/dino-list.component';
import { BasicComponent } from './basic/basic.component';

import { RandomDinoComponent } from './random-dino/random-dino.component';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
// import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import {CountryListComponent} from './country-form/index';
const routes: Routes = [
  {
    path: 'home',
    component: DinoListComponent,
    children: []
  },
  {
    path: 'login',
    component: LoginComponent,
    children: []
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: []
  },
  {
    path: 'country',
    component: CountryListComponent,
    children: []
  },
  {
    path: 'basic',
    component: BasicComponent,
    children: []
  },
  {
    path: 'random',
    component: RandomDinoComponent,
    children: []
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





const appRoutes: Routes = [


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
