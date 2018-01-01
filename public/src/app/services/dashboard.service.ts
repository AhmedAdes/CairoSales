import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Destination, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class DashboardService {
    url = NodeUrl + 'dash/';
    headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private authService: AuthenticationService) { }

    getUserSchedule(id: number) {
        return this.http.get(this.url + 'UserSchedule/' + id, this.options).map(res => res.json());
    }

    getUserScheduleDate(id: number, date: string) {
        return this.http.get(this.url + 'UserScheduleDate/' + id + '/' + date, this.options).map(res => res.json());
    }

    getUserChainSchedule(id: number) {
        return this.http.get(this.url + 'UserChainSchedule/' + id, this.options).map(res => res.json());
    }

    getUserVisitRate(id: number, visdate: string) {
        return this.http.get(this.url + 'UserVisitRate/' + id + '/' + visdate, this.options).map(res => res.json());
    }

    getUserChainVisitRate(id: number, month: number) {
        return this.http.get(this.url + 'UserChainVisitRate/' + id + '/' + month, this.options).map(res => res.json());
    }
    getUserChainCounts(id: number) {
        return this.http.get(this.url + 'userVisitCounts/' + id, this.options).map(res => res.json());
    }
    getTopUsers(from: string, to: string, lineID: number) {
        return this.http.get(this.url + 'TopUsers/' + from + '/' + to + '/' + lineID, this.options).map(res => res.json());
    }

}
