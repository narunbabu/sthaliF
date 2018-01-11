"use strict";
// import { Component, OnInit,Input,  } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { User } from '../../_models/index';
// import { UserService } from '../../_services/index';
// import { AppConfig } from '../../app.config';
exports.__esModule = true;
// import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import { District, SubDistrict, Village,OVillage,SelectedItems, State } from '../../_models/index'; //
// import { DistrictService, SubDistrictService, VillageService, StateService } from '../../_services/index';
// class StatesComponent implements OnInit {
//     states: State[]=[];
//     constructor( private userService: UserService, 
//         private districtService: DistrictService,private config: AppConfig,
//         private subdistrictService: SubDistrictService,
//          private villageService: VillageService,
//          private stateService: StateService,private router: Router,  ) {}
//     ngOnInit() {
//         // this.selitems.vil_code=0
//           this.loadAllStates()
//           // this.loadSubdists();
//           console.log(this.states);
//       }
//       private loadAllStates() {
//           this.stateService.getAll().subscribe(states => { this.states = states; 
//               console.log(JSON.stringify(this.states));
//           });
//       }
//     }
// D:\SoftwareWebApps\Sthali\sthali-prod\src\app\components\villagesearch
// import {Ptates} from '../../components/villagesearch/states';
var States = (function () {
    function Ptates() {
        this.states = [];
        this.keys = [];
    }
    // constructor(
    //     states:any[] = [{"state_code":1,"state_name":"JAMMU & KASHMIR","state_initial":"JK"},{"state_code":2,"state_name":"HIMACHAL PRADESH","state_initial":"HP"},{"state_code":3,"state_name":"PUNJAB","state_initial":"PB"},{"state_code":4,"state_name":"CHANDIGARH","state_initial":"CH"},{"state_code":5,"state_name":"UTTARAKHAND","state_initial":"UK"},{"state_code":6,"state_name":"HARYANA","state_initial":"HR"},{"state_code":7,"state_name":"NCT OF DELHI","state_initial":"DL"},{"state_code":8,"state_name":"RAJASTHAN","state_initial":"RJ"},{"state_code":9,"state_name":"UTTAR PRADESH","state_initial":"UP"},{"state_code":10,"state_name":"BIHAR","state_initial":"BR"},{"state_code":11,"state_name":"SIKKIM","state_initial":"SK"},{"state_code":12,"state_name":"ARUNACHAL PRADESH","state_initial":"AR"},{"state_code":13,"state_name":"NAGALAND","state_initial":"NL"},{"state_code":14,"state_name":"MANIPUR ","state_initial":"MN"},{"state_code":15,"state_name":"MIZORAM","state_initial":"MZ"},{"state_code":16,"state_name":"TRIPURA","state_initial":"TR"},{"state_code":17,"state_name":"MEGHALAYA","state_initial":"ML"},{"state_code":18,"state_name":"ASSAM","state_initial":"AS"},{"state_code":19,"state_name":"WEST BENGAL","state_initial":"WB"},{"state_code":20,"state_name":"JHARKHAND","state_initial":"JH"},{"state_code":21,"state_name":"ORISSA","state_initial":"OR"},{"state_code":22,"state_name":"CHHATTISGARH","state_initial":"CG"},{"state_code":23,"state_name":"MADHYA PRADESH","state_initial":"MP"},{"state_code":24,"state_name":"GUJARAT","state_initial":"GJ"},{"state_code":25,"state_name":"DAMAN & DIU","state_initial":"DD"},{"state_code":26,"state_name":"DADRA & NAGAR HAVELI","state_initial":"DH"},{"state_code":27,"state_name":"MAHARASHTRA","state_initial":"MH"},{"state_code":28,"state_name":"ANDHRA PRADESH","state_initial":"AP"},{"state_code":29,"state_name":"KARNATAKA","state_initial":"KA"},{"state_code":30,"state_name":"GOA","state_initial":"GA"},{"state_code":31,"state_name":"LAKSHADWEEP","state_initial":"LD"},{"state_code":32,"state_name":"KERALA","state_initial":"KL"},{"state_code":33,"state_name":"TAMIL NADU","state_initial":"TN"},{"state_code":34,"state_name":"PUDUCHERRY","state_initial":"PY"},{"state_code":35,"state_name":"ANDAMAN & NICOBAR ISLANDS","state_initial":"AN"},{"state_code":36,"state_name":"TELANGANA","state_initial":"TL"}];
    //     // var state_names=states.map((e)=>e.state_name);
    //     keys:any[] = Object.keys(states[0])
    // ){}
    Ptates.prototype.getStates = function () {
        var _this = this;
        return this.states.sort(function (a, b) {
            var nameA = a[_this.keys[1]].toLowerCase(), nameB = b[_this.keys[1]].toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0; //default return value (no sorting)
        });
    };
    return Ptates;
}());
exports.Ptates = Ptates;
