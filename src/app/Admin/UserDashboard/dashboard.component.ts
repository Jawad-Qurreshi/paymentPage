import { Component } from '@angular/core';
import { UserService } from "sdk/user.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [UserService]
})
export class UserDashboardComponent {

    constructor(
        private fb: FormBuilder
    ) { }
    debitData: FormGroup;
    creditOther: FormGroup;
    creditData: FormGroup;
    paypalData: FormGroup;
    radioValue = 'CreditCard';
    checkPaypal
    checkCredit
    ngOnInit() {
        this.formInitializer();
    }

    creditSub() : void{
        console.log("this is me credit submit")
    };
    login() : void{
        console.log("this is me login")
    }
    debitSub() : void {
        console.log("this is me debit sub")
    }

    formInitializer() {
        const currentdate = new Date();
        this.creditData = this.fb.group({
            creditName: ["", Validators.required],
            creditEmail: ["", Validators.required, Validators.email],

        });

        this.creditOther = this.fb.group({
            creditNameOnCard: ["", Validators.required],
            creditCardNumber: ["", Validators.required, Validators.minLength(16), Validators.maxLength(16)],
            creditmonth: ["", Validators.required, Validators.min(1), Validators.max(12)],
            creditYear: ["", Validators.required, Validators.min(currentdate.getFullYear())],
            creditCVV: ["", Validators.required, Validators.minLength(3), Validators.maxLength(4)]
        });

        this.paypalData = this.fb.group({
            paypalEmail: ["", Validators.required , Validators.email],
            paypalPassword: ["", Validators.required],
           
        });

        this.debitData =this.fb.group({
            debitNameOnCard : ["", Validators.required],
            debitCardNumber : ["", Validators.required, Validators.minLength(16), Validators.maxLength(16)],
            debitMonth : ["", Validators.required, Validators.min(1), Validators.max(12)],
            debitYear: ["", Validators.required, Validators.min(currentdate.getFullYear())],
            debitCVV: ["", Validators.required, Validators.minLength(3), Validators.maxLength(4)]
        })

    }
}