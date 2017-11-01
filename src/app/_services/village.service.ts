import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { Village } from '../_models/index';
import { User } from '../_models/index';
let myres:Response;
@Injectable()
export class VillageService {
    constructor(private http: Http, private config: AppConfig) { }
    
 getVils(id:number){
        return this.http.get(this.config.apiUrl + '/sd'+'/'+id).map((response: Response) =>
        response.json())
        //   .catch(this.handleError) +'/?format=json'
          ;
      }
      getVillage(id:number){
        return this.http.get(this.config.apiUrl + '/vil'+'/'+id).map((response: Response) =>
        response.json())
        //   .catch(this.handleError) +'/?format=json'
          ;
      }

}