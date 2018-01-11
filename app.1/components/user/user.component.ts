import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {  LogUser, Village, SelectedItems } from '../../_models/index';
import {  UserService } from '../../_services/index';
import { UserHomeComponent } from './home/home.component';
// import { AppConfig } from '../../app.config';

import { Http, Response, RequestOptions, Headers } from '@angular/http';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    // vil: Village;
    submitted=false;
    myres;
    user:LogUser;
    keys:any[]=[];
    values:any[]=[];
    vil:Village=JSON.parse('{"tot_geograph_area":10,"pin_code":1,"vil_name":"Loading...","vil_code":0,"tot_households":0}');
    id: number;
    private sub: any;
    selectedItems:SelectedItems;

    //  selectedVillage:OVillage=JSON.parse('{"vil_code":10,"sub_dist_code":1,"vil_name":"hey"}');
    constructor(private userService: UserService,
      // private config: AppConfig 
      private _route: ActivatedRoute,
      private _router: Router,
    ) { 
      // this.myvilItems=JSON.parse('{ "village":"string", "mandal":"string","district":"string","state":"string","vil_code":0}');
   
      }
  
    ngOnInit() {
      
      // var id = this._route.snapshot.paramMap.get('id');
      // this._route.params.subscribe(params => {
        this.sub = this._route.params.subscribe(params => {
          //this.id = +params['id'];
           // (+) converts string 'id' to a number
        // each time the search data is change you'll get this running
        //Do what ever you need to refresh your search page
        // console.log('New route params');
        // console.log(this.id)
        this.submitted=true
        this.loadBasicUser();
        
         
      });
  
    }
    private loadBasicUser(){//id:number
      
      var id:number=6500;
      // this.myvilItems.vil_code
      // console.log('the id inside '+id);
      console.log(this.userService.getUserVillage())
      // this.myres=this.userService.getUserVillage();
      this.userService.getUserVillage().subscribe(
        result => {  
          this.user =result.result;
          this.vil =result.vil[0];
          console.log(this.vil)
//           console.log(this.user.firstName )
for(var i in this.user) {
  console.log(i);
  this.keys.push(i); 
  this.values.push(this.user[i]);
  }
  for(var i in this.vil) {
    console.log(i);
    this.keys.push(i); 
    if(this.vil[i]){
    this.values.push(this.vil[i]);}
    else{
      this.values.push("NA");
    }
    }
  console.log (this.keys)
  console.log (this.values)
      //   // this.vil.vil_code=vil_code;
      });;
      // .subscribe(village => { this.vil = village; 
          // console.log('the id inside '+id);
          console.log(this.user )
          // this.vil[0].vil_code=id;
      // });
    }
  

  }
  