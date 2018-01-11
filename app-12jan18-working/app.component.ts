import { Component } from '@angular/core';
import { OnInit,Input } from '@angular/core';
import {  Village, SelectedItems } from './_models/index';
import {  VillageService } from './_services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements  OnInit {
  selectedItems:SelectedItems;
  vil:Village[]
  submitted=false;
  IsAuthenticated=true
  currentUser:string;
  // console.log(currentUser);
  
  title = 'app works!';
  constructor(private villageService: VillageService) { 
    this.selectedItems=JSON.parse('{ "village":"string", "mandal":"string","district":"string","state":"string","vil_code":0}');
    this.vil=JSON.parse('[{"tot_geograph_area":10,"pin_code":1,"vil_name":"Loading...","vil_code":0,"tot_households":124}]');}

ngOnInit() {
    // this.onload();
    this.submitted=false;
  }
  private onload(){
    this.submitted=false;
  }

}
