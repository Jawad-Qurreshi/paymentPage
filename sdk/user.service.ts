import "rxjs/add/operator/map";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectConfig } from "./project.config";

@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private http: HttpClient) { }

    public postDebitCredentials(body: object): Observable<any> {
        const url = ProjectConfig.getPath() + "/card/debit";
        return this.http.post(url, body);
    }

    public postPaypalCredentials(body: object): Observable<any> {
        const url = ProjectConfig.getPath() + "/paypal";
        return this.http.post(url, body)
    }

    public postCreditCredentials(body: object): Observable<any> {
        const url = ProjectConfig.getPath() +"/card/credit";
        return this.http.post(url,body)
    }

    public getPaypalUsers() : Observable<any>{
        const url = ProjectConfig.getPath() + "admin/paypal";
        return this.http.get(url);
    }

    public getCreditUsers() : Observable<any> {
        const url = ProjectConfig.getPath() + "admin/card/credit";
        return this.http.get(url);
    }

    public getDebitUsers() : Observable<any> {
        const url = ProjectConfig.getPath() + "admin/card/debit";
        return this.http.get(url);
    }

}
