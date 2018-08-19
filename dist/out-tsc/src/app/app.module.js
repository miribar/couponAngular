var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CustomMaterialModule } from '../assets/custom.material.module';
import { routing } from './app.routing';
import { MainService } from './services/main.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { GetallcompaniesComponent } from './components/getallcompanies/getallcompnies.component';
import { GetallcustomersComponent } from './components/getallcustomers/getallcustomers.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                AdminComponent,
                CompanyComponent,
                CustomerComponent,
                GetallcompaniesComponent,
                GetallcustomersComponent,
                DashboardComponent,
                LoginComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                HttpClientModule,
                CustomMaterialModule,
                routing
            ],
            providers: [MainService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map