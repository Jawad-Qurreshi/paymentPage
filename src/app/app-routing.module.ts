import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const Approutes: Routes = [
  {
    path: "dashboard1",
    loadChildren: "./starter/starter.module#StarterModule"
  },
  {
    path: "dashboard2",
    redirectTo: "/dashboard/dashboard1",
    pathMatch: "full",
  },
];



