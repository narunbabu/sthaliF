import { Component, OnInit,Input } from '@angular/core';
import {  Village, SelectedItems } from '../../_models/index';
import {  VillageService } from '../../_services/index';
// import { AppConfig } from '../../app.config';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
  // vil: Village;
  vil:Village[]
  selectedItems:SelectedItems;
  @Input('seli2tems') myvilItems:SelectedItems;
  
  //  selectedVillage:OVillage=JSON.parse('{"vil_code":10,"sub_dist_code":1,"vil_name":"hey"}');
  constructor(private villageService: VillageService,
    // private config: AppConfig 
  ) { this.myvilItems=JSON.parse('{ "village":"string", "mandal":"string","district":"string","state":"string","vil_code":0}');
 
    this.vil=JSON.parse('[{"tot_geograph_area":10,"pin_code":1,"vil_name":"Loading...","vil_code":0,"tot_households":124}]');}

  ngOnInit() {
    this.loadBasicVillage();
  }
  private loadBasicVillage(){//id:number
    
    // var id:number=6500;
    this.villageService.getLimitedVillage(this.myvilItems.vil_code).subscribe(village => { this.vil = village; 
        console.log(this.vil[0].vil_name);
    });
  }
}
