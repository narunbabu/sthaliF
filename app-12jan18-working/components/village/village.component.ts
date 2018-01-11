import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {  Village, SelectedItems } from '../../_models/index';
import {  VillageService } from '../../_services/index';
// import { AppConfig } from '../../app.config';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit, OnDestroy {
  // vil: Village;
  submitted=false;
  vil:Village[]=JSON.parse('[{"tot_geograph_area":10,"pin_code":0,"vil_name":"Loading...","vil_code":0,"gram_pan_name":"Loading..","tot_households":0}]');
  id: number;
  private sub: any;
  selectedItems:SelectedItems;
  @Input('selitems') myvilItems:SelectedItems;
  //  selectedVillage:OVillage=JSON.parse('{"vil_code":10,"sub_dist_code":1,"vil_name":"hey"}');
  constructor(private villageService: VillageService,
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
        this.id = +params['id']; // (+) converts string 'id' to a number
      // each time the search data is change you'll get this running
      //Do what ever you need to refresh your search page
      console.log('New route params');
      console.log(this.id)
      this.submitted=true
      this.loadBasicVillage(this.id);
    });

  }
  private loadBasicVillage(id){//id:number
    
    // var id:number=6500;
    // this.myvilItems.vil_code
    // console.log('the id inside '+id);
    this.villageService.getLimitedVillage(id).subscribe(village => { this.vil = village; 
        // console.log('the id inside '+id);
        // console.log(this.vil )
        this.vil[0].vil_code=id;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
