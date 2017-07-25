import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NodeUrl, WeekPlan, WeekPlanDest } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class WeekPlanService {

    constructor(private http: Http, private authService: AuthenticationService) { }

    url = NodeUrl + 'wkplan/';
    headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    options = new RequestOptions({ headers: this.headers });

    getPlan(id?: number) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(res => res.json());
    }

    getUserPlan(userID: number){
        return this.http.get(this.url + 'userPlan/' + userID, this.options).map(res => res.json());
    }

    InsertPlan(Plan: WeekPlan, plnDst: WeekPlanDest[]) {
        return this.http.post(this.url, { basic: Plan, dests: plnDst }, this.options)
            .map(res => res.json());
    }

    UpdatePlan(id: number, Plan: WeekPlan, plnDst: WeekPlanDest[]) {
        return this.http.put(this.url + id, { basic: Plan, dests: plnDst }, this.options)
            .map(res => res.json());
    }

    DeletePlan(id: number) {
        return this.http.delete(this.url + id, this.options).map(res => res.json());
    }

    // getDetails() {
    //     return this.http.get(this.url + 'planDetails/', this.options).map(res => res.json());
    // }
    // getPlanDetails(id: number) {
    //     return this.http.get(this.url + 'planDetails/' + id, this.options).map(res => res.json());
    // }
}
