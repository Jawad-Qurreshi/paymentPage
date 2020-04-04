import {
  CreditTableComponent,
  DebitTableComponent,
  PaypalTableComponent,
} from "./dashboard-component";
import { NZ_I18N, NgZorroAntdModule, en_US } from "ng-zorro-antd";
import { RouterModule, Routes } from "@angular/router";

import { CommonModule } from "@angular/common";
import { Dashboard1Component } from "./dashboard1/dashboard.component";
import { DashboardRoutes } from "./admin.routing";
import { FormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { UserDashboardComponent } from "./UserDashboard/dashboard.component";
import en from "@angular/common/locales/en";
import { registerLocaleData } from "@angular/common";

registerLocaleData(en);

// import { PaypalTableComponent } from './dashboard-component/paypal-table/paypal.component'
// import { DebitTableComponent } from './dashboard-component/Debit-card-table/debit.component'
// import { CreditTableComponent } from './dashboard-component/Credit-card-table/credit.component'
// import { UserDashboardComponent } from './UserDashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes),
    PerfectScrollbarModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    NgZorroAntdModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    Dashboard1Component,
    UserDashboardComponent,
    PaypalTableComponent,
    DebitTableComponent,
    CreditTableComponent,
  ],
})
export class DashboardModule {}
