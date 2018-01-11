import { Component, OnInit,Input,  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
import { AppConfig } from '../../app.config';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { District, SubDistrict, Village,OVillage,SelectedItems, State } from '../../_models/index'; //
import { DistrictService, SubDistrictService, VillageService, StateService, SortObj } from '../../_services/index';

@Component({
    // moduleId: module.id,
    selector: 'app-villagesearch',
    templateUrl: './villagesearch.component.html',
    styleUrls: ['./villagesearch.component.css'],
    // template: '<h1>Hellow World</h1>',
    providers: [DistrictService, SubDistrictService, VillageService, StateService]
})

export class VillageSearchComponent implements OnInit {
    currentUser: User;
    http:Http;
    // submitted :boolean= false;
    @Input('submitted') submitted;
    @Input('selitems') selitems;
    currentDistrict: District;
    currentSubDistrict: SubDistrict;
    selectedState:State =JSON.parse('{"state_code":0}');
    selectedDistrict:District=JSON.parse('{"dist_code":0}');
    selectedSubDistrict:SubDistrict =JSON.parse('{"sub_dist_code":0}');
    
    selectedVillage:OVillage;
    

    
    
    
    states: State[]=[];
    districts: District[]=[];
    subdists: SubDistrict[]=[];
    vils: OVillage[]=[];
    vil: OVillage;
    user:string;
    
    // districtid=selectedDistrict.id;

    constructor( private userService: UserService, 
        private districtService: DistrictService,private config: AppConfig,
        private subdistrictService: SubDistrictService,
         private villageService: VillageService,
         private stateService: StateService,private router: Router, private sortobj:SortObj ) {
       
        // this.currentDistrict = JSON.parse('{"dist_code":"99","dist_name":"at this"}');
        // this.currentSubDistrict = JSON.parse('{"dist_code":1,"sub_dist_code":1,"sub_dist_name":"hey"}');

        // this.selectedVillage=JSON.parse('{"vil_code":0,"sub_dist_code":1,"vil_name":"hey"}');
        this.selitems=JSON.parse('{"vil_code":0}');
        
        
        // this.selitems.vil_code=0
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // this.user=JSON.parse(localStorage.getItem('currentUser')).username;
        // console.log(this.currentUser);
    }
    onSelectSt(stateid) {
        // console.log("this is sid "+stateid);
        // this.subdists =JSON.parse('[{"id":1,"dist_code":234,"subdist_code":345,"subdist_name":"hello"}, {"id":2,"dist_code":235,"subdist_code":346,"subdist_name":"hello2"}]');
        this.loadAllDistricts(stateid);
        // console.log(this.selectedDistrict);
        this.selectedState=this.states.find(i=>i.state_code==this.selectedState.state_code);
        this.selitems.state_name=this.selectedState.state_name;
    //    console.log(this.selectedState.state_name);
    //    console.log(this.selitems.state_name);
        // this.loadAllSubDistricts().filter((item)=> item.countryid == countryid);
      }
    onSelect(districtid) {
        // console.log("this is did "+districtid);
        // this.subdists =JSON.parse('[{"id":1,"dist_code":234,"subdist_code":345,"subdist_name":"hello"}, {"id":2,"dist_code":235,"subdist_code":346,"subdist_name":"hello2"}]');
        this.loadSubdists(districtid);
        // console.log(this.selectedDistrict);
        this.selectedDistrict=this.districts.find(i=>i.dist_code==this.selectedDistrict.dist_code);
        this.selitems.district=this.selectedDistrict.dist_name;
    //    console.log(this.selectedDistrict);
        // this.loadAllSubDistricts().filter((item)=> item.countryid == countryid);
      }
      onSelect_sd(sdid) {
        console.log("this is sdid "+sdid);
        // this.subdists =JSON.parse('[{"id":1,"dist_code":234,"subdist_code":345,"subdist_name":"hello"}, {"id":2,"dist_code":235,"subdist_code":346,"subdist_name":"hello2"}]');
        this.loadVils(sdid);
        this.selectedSubDistrict=this.subdists.find(i=>i.sub_dist_code==this.selectedSubDistrict.sub_dist_code);
        this.selitems.mandal =this.selectedSubDistrict.sub_dist_name;
        // this.loadAllSubDistricts().filter((item)=> item.countryid == countryid);
      }
     onsubmit(vilcode){
      this.submitted = true; 
      this.router.navigate(['/search',{id:vilcode}]);
      // this.submitted = false; 
     }
      
        onSubmit(id) { 
          this.submitted = true; 
          console.log("this is vid "+id);

          this.router.navigate(['/search',{id}]);
          // this.router.navigate(['/login']);
        }
        // onSubmit() { this.submitted = true; }
    //   onSelect_vil(vid) {
    //     console.log("this is vid "+vid);
    //     // this.subdists =JSON.parse('[{"id":1,"dist_code":234,"subdist_code":345,"subdist_name":"hello"}, {"id":2,"dist_code":235,"subdist_code":346,"subdist_name":"hello2"}]');
    //     this.loadVil(vid);
    //     this.selectedVillage=this.vils.find(i=>i.vil_code==this.selectedVillage.vil_code);
    //     // this.loadAllSubDistricts().filter((item)=> item.countryid == countryid);
    //   }

    ngOnInit() {
      // this.selitems.vil_code=0
        this.loadAllStates()
        // this.loadSubdists();
        // console.log(this.loadAllDistricts());
    }
    private loadAllStates() {
        this.stateService.getAll().subscribe(states => { 
            // this.states = states; 
            this.states=this.sortobj.objectsort(states,1);
        // console.log(JSON.stringify(this.states));
        });
        
    }

   private loadAllDistricts(id:number) {
        this.districtService.getDists(id).subscribe(districts => { 
            this.districts =
            //  districts; 
            this.sortobj.objectsort(districts,3);
            // console.log(this.districts);
        });
    }
    // private loadSubdists(){
    //     return [ new SubDistrict(1,2,3, 'USA' ), new SubDistrict(1,2,4, 'USA2' )];
    // }

    private loadSubdists(id:number){
        this.subdistrictService.getSubdists(id).subscribe(subdistricts => { 
            this.subdists = 
            // subdistricts;
            this.sortobj.objectsort(subdistricts,2); 
            // console.log(this.districts);
        });
      }
      private loadVils(id:number){
        this.villageService.getVils(id).subscribe(villages => { 
            this.vils =
            //  villages; 
            this.sortobj.objectsort(villages,1);
            // console.log(this.districts);
        });
      }
    //   private loadVil(id:number){
    //     this.villageService.getLimitedVillage(id).subscribe(villages => { this.vil = villages; 
    //         // console.log(this.districts);
    //     });
    //   }

}
