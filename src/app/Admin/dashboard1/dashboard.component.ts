import { Component, AfterViewInit } from '@angular/core';
import { UserService } from "sdk/user.service";

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class Dashboard1Component implements AfterViewInit {
  
    creditUsers = [];
    debitUsers = [];
    paypalUsers = [];
    constructor(private userservice: UserService) {}
  
    ngOnInit() {
      this.userservice.getCreditUsers().subscribe(
          response => {
             this.creditUsers = response.result;
          },
          err => {
            console.log("Error in retreiving Credit users")
          }
      )

      this.userservice.getDebitUsers().subscribe(
          response => {
             this.debitUsers = response.result;
          },
          err => {
              console.log("Error in retreiving Debit user")
          }
      )

      this.userservice.getPaypalUsers().subscribe(
          response => {
             this.paypalUsers = response.result;
          },
          err => {
              console.log("Error in retreiving in Paypal user")
          }
      )
     
    }
    ngAfterViewInit() {}
  }
  