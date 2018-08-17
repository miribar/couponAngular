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
import { GetallcustomersComponent } from './components/getallcustomers/getallcustomers.component'

@NgModule({
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
export class AppModule { }
