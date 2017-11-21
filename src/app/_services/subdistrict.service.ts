import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { SubDistrict } from '../_models/index';
import { User } from '../_models/index';
let myres:Response;
@Injectable()
export class SubDistrictService {
    constructor(private http: Http, private config: AppConfig) { }
    
 getSubdists(id:number){
        return this.http.get(this.config.apiUrl + '/sds'+'/'+id).map((response: Response) =>
        response.json())
        //   .catch(this.handleError) +'/?format=json'
          ;
      }

      private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
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