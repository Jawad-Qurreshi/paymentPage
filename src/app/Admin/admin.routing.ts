import { RouterModule, Routes } from "@angular/router";

import { Dashboard1Component } from "./dashboard1/dashboard.component";
import { NgModule } from "@angular/core";
import { UserDashboardComponent } from "./UserDashboard/dashboard.component";

export const DashboardRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard1",
        component: Dashboard1Component,
        data: {
          title: "Admin Dashboard",
          urls: [
            { title: "AdminDashboard", url: "/dashboard" },
            { title: "Dashboard 1" },
          ],
        },
      },
      {
        path: "dashboard2",
        component: UserDashboardComponent,
        data: {
          title: "user Dashboard",
          urls: [
            { title: "UserDashboard", url: "/dashboard" },
            { title: "Dashboard 2" },
          ],
        },
      },
    ],
  },
  {
    path: "",
    redirectTo: "dashboard1",
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
