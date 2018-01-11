import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { State } from '../_models/index';
import { User } from '../_models/index';
let myres:Response;
@Injectable()
export class StateService {
    constructor(private http: Http, private config: AppConfig) { }
    
    getAll() {
       return this.http.get(this.config.apiUrl + '/states').map((response: Response) =>
       response.json());
    }

}