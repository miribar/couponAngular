var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
var serverRoute = 'http://localhost:8080/rest/api';
var MainService = /** @class */ (function () {
    function MainService(_http) {
        this._http = _http;
        this.username$ = new BehaviorSubject(null);
    }
    MainService.prototype.request = function (route) {
        return this._http.get(serverRoute + "/" + route);
    };
    MainService.prototype.requestPost = function (route, body) {
        return this._http.post(serverRoute + "/" + route, body);
    };
    MainService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], MainService);
    return MainService;
}());
export { MainService };
//# sourceMappingURL=main.service.js.map