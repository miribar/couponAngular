var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(_mainService, router) {
        this._mainService = _mainService;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.clickHandler = function (route) {
        var _this = this;
        this._mainService.request(route).subscribe(function (res) {
            if (res instanceof Object && !res.hasOwnProperty('result')) {
                _this.data = [];
                _this.data.push(res);
            }
            else {
                _this.data = res.result;
            }
            _this.keys = [];
            _this.data.forEach(function (item, i) {
                _this.keys[i] = Object.keys(item);
            });
        });
    };
    AdminComponent = __decorate([
        Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
        }),
        __metadata("design:paramtypes", [MainService, Router])
    ], AdminComponent);
    return AdminComponent;
}());
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map