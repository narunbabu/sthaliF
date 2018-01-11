import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { Village,OVillage } from '../_models/index';
import { User } from '../_models/index';
let myres:Response;
@Injectable()
export class VillageService {
    constructor(private http: Http, private config: AppConfig) { }
    
 getVils(id:number){
        return this.http.get(this.config.apiUrl + '/vils'+'/'+id).map((response: Response) =>
        response.json())
        //   .catch(this.handleError) +'/?format=json'
          ;
      }
      getLimitedVillage(id:number){
        return this.http.get(this.config.apiUrl + '/vildet'+'/'+id).map((response: Response) =>
        response.json())
        //   .catch(this.handleError) +'/?format=json'
          ;
      }

}