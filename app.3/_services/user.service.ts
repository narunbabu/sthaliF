import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';
import { AppConfig } from '../app.config';

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }
    

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.config.apiUrl +'/auth/register', user, this.jwt()).map((response: Response) =>
         response.json()
        // console.log(response.json())}
        );
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    getUserVillage(){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(this.http.get(this.config.apiUrl + '/uv', this.jwt()).map((response: Response) => response.json()))
        // return this.jwt();
        return this.http.get(this.config.apiUrl +  '/uv?token='+ currentUser.token).map((response: Response) => response.json());
    }
}