// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   // templateUrl: './app.component.html',
//   template: '<h1>hEY My First {{title}} </h1>'

//   // styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular Project!!';
// }
import { Component } from '@angular/core';

@Component ({
   selector: 'app-root',
   template: ` <div *ngIf = 'appStatus'>{{appTitle}} Tutorialspoint </div> 
   <div *ngFor = 'let variable of variablelist'>
    <ul> 
      <li>{{variable.ID}}</li> 
      <li>{{variable.Name}}</li> 
   </ul> 
</div>
    `,
})

export class AppComponent {
   appTitle: string = 'Welcome to';
appStatus: boolean = true;
 variablelist: any[] = [ {
      "ID": "1",
      "Name" : "One"
   },

   {
      "ID": "2",
      "Name" : "Two"
   } ];
}

