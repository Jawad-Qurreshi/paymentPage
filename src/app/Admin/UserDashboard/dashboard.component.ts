import { Component } from '@angular/core';
import { UserService } from "sdk/user.service";

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class UserDashboardComponent{
    radioValue = 'CreditCard';
}