import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  IsAuthenticated=true
  currentUser:string;
  // console.log(currentUser);
  
  title = 'app works!';

  ngOnInit() {
    // this.loadcurrentuser()
    // this.loadSubdists();
    // console.log(this.loadAllDistricts());
}
// private loadcurrentuser(){
//  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
//  console.log(this.currentUser);
// }
}
