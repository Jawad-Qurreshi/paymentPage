import { Component, OnChanges, ViewChild } from "@angular/core";

import { Input } from "@angular/core";

declare var require: any;
// const data: any = require("./company.json");
const data = null;
@Component({
  selector: "app-paypal-table",
  templateUrl: "./paypal.component.html",
  styleUrls: ["./paypal.component.css"],
})
export class PaypalTableComponent implements OnChanges {
  editing = {};
  rows = [];
  @Input() paypalUsers = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: "email", name: "Email" },
    { prop: "password", name: "Password" },
  ];

  @ViewChild(PaypalTableComponent, { static: false })
  table: PaypalTableComponent;
  constructor() {
    this.rows = data;
    //  this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    console.log(" this.clients", this.paypalUsers);
  }

  ngOnChanges() {
    console.log("onchanges called", this.paypalUsers);
    this.setTableData();
  }

  setTableData() {
    this.rows = this.paypalUsers;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.paypalUsers.filter(function (d) {
      return d.email.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    //this.setTableData();
  }
}
