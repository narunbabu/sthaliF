import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Village } from '../_models/index'; //
import { AlertService, UserService } from '../_services/index';


@Component({
    selector: 'register',
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    data: any = {};
    loading = false;
    registered=false;
    status:boolean;
    birthvilexists=false;
    @Input('myvil') birthvil:Village[];
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.model.vil_code= this.birthvil[0].vil_code;
        this.model.password=(this.model.password);
        // console.log(this.model);
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // this.alertService.success('Registration successful', true);
                    // this.router.navigate(['/login']);
                    // this.data=data;
                    this.data=data;
                    console.log(this.data);
                    this.status=this.data.status;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    ngOnInit(){
        if (typeof this.birthvil != 'undefined'){
            // this.router.navigate(['/home/search']);
        // } else{


            this.birthvilexists=true;
            
        }
    }
}
