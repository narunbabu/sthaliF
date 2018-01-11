import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AuthenticationService } from '../../_services/index';
@Component({
  // moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {
  IsAuthenticated ;
  currentUser;
  constructor( private auth: AuthenticationService,private router: Router
) {
  this.IsAuthenticated = localStorage.getItem('currentUser');
  
 }
  // private projectName:string;
 
  //   constructor(){
  //     this.projectName = 'Ameyem';
  //     this.IsAuthenticated=false;
  //   }

  ngOnInit() {
  //   console.log( "this.currentUser")
   
  //   console.log( this.IsAuthenticated )
  //   if (this.IsAuthenticated ) {
  //     // logged in so return true      
  //     console.log( this.currentUser)
  // }  
    
  }
  logout() {
    localStorage.removeItem('currentUser');
    // this.router.navigate(['/login']);
  }

}
