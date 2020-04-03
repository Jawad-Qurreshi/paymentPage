import { Component, OnChanges, ViewChild } from "@angular/core";

import { Input } from "@angular/core";


declare var require: any;
const data: any = require("./company.json");

@Component({
    selector: "app-debit-table",
    templateUrl: "./dedit.component.html",
    styleUrls: ["./dedit.component.css"]
  })

  export class DebitTableComponent implements OnChanges{
    editing = {};
    rows = [];

    @Input() debitUsers = [];

  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: "type" , name:"Type" },
    { prop: "cardName" , name:"Name on Card" },
    { prop: "cardNumber" , name:"Card number" },
    { prop: "expiration" , name:"Expiry" },
    { prop: "cvv" , name:"CVV" }
  ];
  
  @ViewChild(DebitTableComponent, { static: false }) table: DebitTableComponent;
  constructor() {
    this.rows = data;
  //  this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
    console.log(" this.clients", this.debitUsers);
  }

  ngOnChanges() {
    console.log("onchanges called", this.debitUsers);
    this.setTableData();
  }

  setTableData() {
    this.rows = this.debitUsers;
  }
  

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.debitUsers.filter(function(d) {
      return d.Email.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    //this.setTableData();
  }

  }