import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

export const Approutes: Routes = [
  // {
  //   path: "dashboard1",
  //   loadChildren: "./starter/starter.module#StarterModule"
  // },
  {
    path: "dashboard2",
    redirectTo: "/dashboard/dashboard1",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
