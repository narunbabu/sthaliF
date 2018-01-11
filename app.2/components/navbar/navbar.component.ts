import { Component, OnInit } from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private projectName:string;
  IsAuthenticated;
  
    constructor(){
      this.projectName = 'Ameyem';
      this.IsAuthenticated=false;
    }

  ngOnInit() {
  }

}
