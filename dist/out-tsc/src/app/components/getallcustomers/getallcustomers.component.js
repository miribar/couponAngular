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
var GetallcustomersComponent = /** @class */ (function () {
    function GetallcustomersComponent(_mainService) {
        this._mainService = _mainService;
    }
    GetallcustomersComponent.prototype.ngOnInit = function () {
    };
    GetallcustomersComponent.prototype.clickHandler = function (route) {
        var _this = this;
        this._mainService.request(route).subscribe(function (res) {
            // if(res instanceof Object && !res.hasOwnProperty('result')){
            //   this.data = [];
            //   this.data.push(res);
            // } else {
            _this.data = res.result;
            //  }
            _this.keys = [];
            _this.data.forEach(function (item, i) {
                _this.keys[i] = Object.keys(item);
            });
        });
    };
    GetallcustomersComponent = __decorate([
        Component({
            selector: 'app-getallcustomers',
            templateUrl: './getallcustomers.component.html',
            styleUrls: ['./getallcustomers.component.scss']
        }),
        __metadata("design:paramtypes", [MainService])
    ], GetallcustomersComponent);
    return GetallcustomersComponent;
}());
export { GetallcustomersComponent };
//# sourceMappingURL=getallcustomers.component.js.map