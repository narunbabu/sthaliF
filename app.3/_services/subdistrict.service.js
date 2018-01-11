"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var myres;
var SubDistrictService = (function () {
    function SubDistrictService(http, config) {
        this.http = http;
        this.config = config;
    }
    SubDistrictService.prototype.getSubdists = function (id) {
        return this.http.get(this.config.apiUrl + '/sds' + '/' + id).map(function (response) {
            return response.json();
        });
    };
    SubDistrictService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SubDistrictService = __decorate([
        core_1.Injectable()
    ], SubDistrictService);
    return SubDistrictService;
}());
exports.SubDistrictService = SubDistrictService;
