import { NgModule } from '@angular/core';
// import { DinoListComponent } from './dino-list/dino-list.component';
// import { BasicComponent } from './basic/basic.component';

// import { RandomDinoComponent } from './random-dino/random-dino.component';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { VillageSearchComponent,VillageComponent, 
  UserComponent,UserHomeComponent, UserProfileComponent,SearchComponent } from './components/index';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';


// import {CountryListComponent} from './country-form/index';
const routes: Routes = [
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: 'user', redirectTo: '/user/user-home', pathMatch: 'full' },
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: 'search',
        component: VillageSearchComponent,
        children: [
          {
            path: ':id',
            component: VillageComponent
          },
        ]
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
  ]
 },
  {
    path: 'home',
    component: UserComponent,
    children: [
      
    ]
  },
  // { path: 'home',   redirectTo: 'home/search', pathMatch: 'full' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





const appRoutes: Routes = [


    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);
