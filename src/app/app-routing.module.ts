import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

export const Approutes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./Admin/admin.module").then((m) => m.DashboardModule),
  },
  {
    path: "dashboard2",
    redirectTo: "/dashboard/dashboard1",
    pathMatch: "full",
  },
  {
    path: "*",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
