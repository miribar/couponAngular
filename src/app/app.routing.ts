import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { GetallcompaniesComponent} from './components/getallcompanies/getallcompnies.component';

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
                        path: 'getallcompanies',
                        component: GetallcompaniesComponent
                    }
                ]                
        
            },
            { 
                path: 'company', 
                component: CompanyComponent,
                children: [
                    // {
                    //     path: 'getallcompanies',
                    //     component: GetallcompaniesComponent
                    // }
                ]                
        
            },{ 
                path: 'customer', 
                component: CustomerComponent,
                children: [
                    // {
                    //     path: 'getallcompanies',
                    //     component: GetallcompaniesComponent
                    // }
                ]                
        
            },  
            
            { 
                path: 'company', 
                component: CompanyComponent,
                children: [
                    // {
                    //     path: 'getallcompanies',
                    //     component: GetallcompaniesComponent
                    // }
                ]                
        
            }
            ,  
            
            { 
                path: 'getallcompanies', 
                component: GetallcompaniesComponent,
                children: [
                    // {
                    //     path: 'getallcompanies',
                    //     component: GetallcompaniesComponent
                    // }
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