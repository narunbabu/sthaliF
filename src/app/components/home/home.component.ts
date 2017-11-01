import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
import { AppConfig } from '../../app.config';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { District, SubDistrict, Village } from '../../_models/index';
import { DistrictService, SubDistrictService, VillageService } from '../../_services/index';

@Component({
    // moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css'],
    // template: '<h1>Hellow World</h1>',
    providers: [DistrictService, SubDistrictService, VillageService]
})

export class HomeComponent implements OnInit {
    currentUser: User;
    http:Http;
 
    currentDistrict: District;
    currentSubDistrict: SubDistrict;
    selectedDistrict:District=JSON.parse('{"dist_code":1,"dist_name":"hey"}');
    selectedSubDistrict:SubDistrict=JSON.parse('{"dist_code":1,"sub_dist_code":1,"sub_dist_name":"hey"}');
    selectedVillage:Village=JSON.parse('{"vil_code":1,"sub_dist_code":1,"vil_name":"hey"}');
    // selectedCountry:Country = new Country(0, 'India'); 
    districts: District[]=[];
    subdists: SubDistrict[]=[];
    vils: Village[]=[];
    vil: Village;
    user:string;
    // districtid=selectedDistrict.id;

    constructor( private userService: UserService, 
        private districtService: DistrictService,private config: AppConfig,
        private subdistrictService: SubDistrictService,
         private villageService: VillageService  ) {
       
        this.currentDistrict = JSON.parse('{"dist_code":"99","dist_name":"at this"}');
        this.currentSubDistrict = JSON.parse('{"dist_code":1,"sub_dist_code":1,"sub_dist_name":"hey"}');

        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // this.user=JSON.parse(localStorage.getItem('currentUser')).username;
        // console.log(this.currentUser);
    }
    onSelect(districtid) {
        console.log("this is did "+districtid);
        // this.subdists =JSON.parse('[{"id":1,"dist_code":234,"subdist_code":345,"subdist_name":"hello"}, {"id":2,"dist_code":235,"subdist_code":346,"subdist_name":"hello2"}]');
        this.loadSubdists(districtid);
        // console.log(this.selectedDistrict);
        this.selectedDistrict=this.districts.find(i=>i.dist_code==this.selectedDistrict.dist_code);
    //    console.log(this.selectedDistrict);
        // this.loadAllSubDistricts().filter((item)=> item.countryid == countryid);
      }
      onSelect_sd(sdid) {
        console.log("this is sdid "+sdid);
        // this.subdists =JSON.parse('[{"id":1,"dist_code":234,"subdist_code":345,"subdist_name":"hello"}, {"id":2,"dist_code":235,"subdist_code":346,"subdist_name":"hello2"}]');
        this.loadVils(sdid);
        this.selectedSubDistrict=this.subdists.find(i=>i.sub_dist_code==this.selectedSubDistrict.sub_dist_code);
        // this.loadAllSubDistricts().filter((item)=> item.countryid == countryid);
      }
      onSelect_vil(vid) {
        console.log("this is vid "+vid);
        // this.subdists =JSON.parse('[{"id":1,"dist_code":234,"subdist_code":345,"subdist_name":"hello"}, {"id":2,"dist_code":235,"subdist_code":346,"subdist_name":"hello2"}]');
        this.loadVil(vid);
        this.selectedVillage=this.vils.find(i=>i.vil_code==this.selectedVillage.vil_code);
        // this.loadAllSubDistricts().filter((item)=> item.countryid == countryid);
      }

    ngOnInit() {
        this.loadAllDistricts();
        // this.loadSubdists();
        // console.log(this.loadAllDistricts());
    }


   private loadAllDistricts() {
        this.districtService.getAll().subscribe(districts => { this.districts = districts; 
            // console.log(this.districts);
        });
    }
    // private loadSubdists(){
    //     return [ new SubDistrict(1,2,3, 'USA' ), new SubDistrict(1,2,4, 'USA2' )];
    // }

    private loadSubdists(id:number){
        this.subdistrictService.getSubdists(id).subscribe(subdistricts => { this.subdists = subdistricts; 
            // console.log(this.districts);
        });
      }
      private loadVils(id:number){
        this.villageService.getVils(id).subscribe(villages => { this.vils = villages; 
            // console.log(this.districts);
        });
      }
      private loadVil(id:number){
        this.villageService.getVillage(id).subscribe(villages => { this.vil = villages; 
            // console.log(this.districts);
        });
      }

}