import {Dashboard1Component} from './dashboard1/dashboard.component'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {DashboardRoutes} from './admin.routing'
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
registerLocaleData(en);


import { PaypalTableComponent } from './dashboard-component/paypal-table/paypal.component'
import { DebitTableComponent } from './dashboard-component/Debit-card-table/debit.component'
import { CreditTableComponent } from './dashboard-component/Credit-card-table/credit.component'
import { UserDashboardComponent } from './UserDashboard/dashboard.component';

@NgModule ({
    imports:[
        RouterModule.forChild(DashboardRoutes),
        PerfectScrollbarModule,
        NgxDatatableModule,
        NgZorroAntdModule,
        Ng2SmartTableModule
    ],
    declarations:[
        Dashboard1Component,
        UserDashboardComponent,
        PaypalTableComponent,
        DebitTableComponent,
        CreditTableComponent
    ]
})

export class DashboardModule{}
