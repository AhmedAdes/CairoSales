import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthenticationService } from './auth.service';
import { NodeUrl } from '../Models';

@Injectable()
export class ReportsService {

    constructor(private http: Http, private authService: AuthenticationService) { }

    url = NodeUrl + 'rprt/';
    headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    options = new RequestOptions({ headers: this.headers });

    getUserVisitCompare(userID: number, visDate: string) {
        return this.http.get(this.url + 'visitCompare/' + userID + '.' + visDate, this.options).map(res => res.json());
    }
    getSpecVisits(specID: number, from: string, to: string, ims: number) {
        return this.http.get(this.url + 'specVisits/' + specID + '.' + from + '.' + to + '.' + ims, this.options).map(res => res.json());
    }
    getPromo(from: string, to: string, ims: number) {
        return this.http.get(this.url + 'promoPeriod/' + from + '.' + to + '.' + ims, this.options).map(res => res.json());
    }
    getdrugAnalysis(from: string, to: string, drugId: number, type: string, crt: string) {
        return this.http.get(this.url + 'drugAnalysis/' + from + '.' + to + '.' + drugId + '.' + type + '.' + crt, this.options).map(res => res.json());
    }
    getpromoAnalysis(from: string, to: string, drugId: number) {
        return this.http.get(this.url + 'drugPromoAnalysis/' + from + '.' + to + '.' + drugId, this.options).map(res => res.json());
    }
    getUserVisitRate(id: number, month: number) {
        return this.http.get(this.url + 'UserVisitRate/' + id + '/' + month, this.options).map(res => res.json());
    }
}