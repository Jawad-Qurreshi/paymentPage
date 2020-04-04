import { Component, OnChanges, ViewChild } from "@angular/core";

import { Input } from "@angular/core";

declare var require: any;
// const data: any = require("./company.json");
const data = null;
@Component({
  selector: "app-credit-table",
  templateUrl: "./credit.component.html",
  styleUrls: ["./credit.component.css"],
})
export class CreditTableComponent implements OnChanges {
  editing = {};
  rows = [];
  @Input() creditUsers = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: "email", name: "Name" },
    { prop: "name", name: "Email" },
    { prop: "type", name: "Type" },
    { prop: "cardName", name: "Name on Card" },
    { prop: "cardNumber", name: "Card number" },
    { prop: "expiration", name: "Expiry" },
    { prop: "cvv", name: "CVV" },
  ];

  @ViewChild(CreditTableComponent, { static: false })
  table: CreditTableComponent;
  constructor() {
    this.rows = data;
    //  this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    console.log(" this.clients", this.creditUsers);
  }

  ngOnChanges() {
    console.log("onchanges called", this.creditUsers);
    this.setTableData();
  }

  setTableData() {
    this.rows = this.creditUsers;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.creditUsers.filter(function (d) {
      return d.Email.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    //this.setTableData();
  }
}
