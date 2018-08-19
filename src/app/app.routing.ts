import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { GetallcompaniesComponent} from './components/getallcompanies/getallcompanies.component';
import { GetallcustomersComponent} from './components/getallcustomers/getallcustomers.component';
import { AddcompanyComponent} from './components/addcompany/addcompany.component';
import {AddcustomerComponent} from './components/addcustomer/addcustomer.component';
import { GetallcouponsComponent}  from './components/getallcoupons/getallcoupons.component'

import { CompanyComponent} from './components/company/company.component';
import { CustomerComponent} from './components/customer/customer.component';

// defining our routes
const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { 
                path: 'admin', 
                component: AdminComponent,
                children: [
                    {
                        path: 'getallcustomers',
                        component: GetallcustomersComponent
                    },
                    {
                        path: 'getallcompanies',
                        component: GetallcompaniesComponent
                    },
                    {
                        path: 'addcompany',
                        component: AddcompanyComponent
                    }
                    ,
                    {
                        path: 'addcustomer',
                        component: AddcustomerComponent
                    }
                ]                
        
            },
            { 
                path: 'customer', 
                component: CustomerComponent,
                children: [
                    // {
                    //     path: 'getallcompanies',
                    //     component: GetallcompaniesComponent
                    // }
                ]                
        
            }, { 
                path: 'company', 
                component: CompanyComponent,
                children: [
                    {
                        path: 'getallcoupons',
                        component: GetallcouponsComponent
                    }
                ]                
        
            }

        ]
    },

    // otherwise redirect to home
    {
        path: '**',
        component: AppComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {});