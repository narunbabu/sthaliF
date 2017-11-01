import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { District } from '../_models/index';
import { User } from '../_models/index';
let myres:Response;
@Injectable()
export class DistrictService {
    constructor(private http: Http, private config: AppConfig) { }
    
    getAll() {
        // console.log(JSON.stringify(this.jwt().headers.values()[0][0]));
        // var mytoken=JSON.parse(localStorage.getItem('currentUser')).token;
        // console.log(JSON.parse(localStorage.getItem('currentUser')));
        
    //     return this.http.get(this.config.apiUrl + '/districts'+'?token='+mytoken).map((response: Response) =>
    //    response.json());

       return this.http.get(this.config.apiUrl + '/districts'+'?').map((response: Response) =>
       response.json());
    }

  

    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }
}