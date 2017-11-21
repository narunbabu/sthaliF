import { Component,  OnDestroy,Input } from '@angular/core';
import {  Village, SelectedItems } from '../../_models/index';
import {  VillageService } from '../../_services/index';

@Component({
    // moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css'],

})

export class HomeComponent implements  OnDestroy {

    selectedItems:SelectedItems;
    vil:Village[]
    submitted=false;
    // @Input('selitems') myvilItems:SelectedItems;

  
    // @Input('selitems') myvilItems:SelectedItems;
    
    //  selectedVillage:OVillage=JSON.parse('{"vil_code":10,"sub_dist_code":1,"vil_name":"hey"}');
    constructor(private villageService: VillageService,
      // private config: AppConfig 
    ) { 
        this.selectedItems=JSON.parse('{ "village":"string", "mandal":"string","district":"string","state":"string","vil_code":0}');
        this.vil=JSON.parse('[{"tot_geograph_area":10,"pin_code":1,"vil_name":"Loading...","vil_code":0,"tot_households":124}]');}
  
    ngOnDestroy() {
        this.onload();
      }
      private onload(){//id:number
        
        // var id:number=6500;
        this.submitted=false;
      }



}