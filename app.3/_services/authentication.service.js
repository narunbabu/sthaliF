"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(http, config) {
        this.http = http;
        this.config = config;
        // title = 'app';
        // url = "http://localhost:5000/api/login";
        //  user = { "email":"ab@ameyem.com", "password":"arun@123" };
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // username="ab";password:"arun@123";
    AuthenticationService.prototype.login = function (username, password) {
        var url = this.config.apiUrl + '/auth/login';
        // const url = "http://localhost:8000/auth/login";
        // const url = "http://api.ameyem.com/auth/login";
        // var  json = { username: username, password: password };
        var json = { email: username, password: password };
        //     data = { username: username, password: password },
        // let options = new RequestOptions({method: RequestMethod.Post,  headers: config });
        var params = 'json=' + json;
        // console.log("In athentication service "+username +' '+password);
        return this.http
            .post(url, JSON.stringify(json), { headers: this.headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log(response);
            var user = response.json();
            console.log(user);
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        core_1.Injectable()
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
