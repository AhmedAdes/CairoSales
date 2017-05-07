import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { Visits, VisitDrugs, VisitGifts, Drugs, Gifts, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class VisitService {

    constructor(private http: Http, private authService: AuthenticationService) { }

    url = NodeUrl + 'visit/';
    drugurl = NodeUrl + 'visdrug/';
    gifturl = NodeUrl + 'visgift/';
    headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    options = new RequestOptions({ headers: this.headers });

    getVisit(id?: number) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(res => res.json());
    }

    getUserVisits(userID: number) {
        return this.http.get(this.url + 'UserVisits/' + userID, this.options).map(res => res.json());
    }
    getUserVisitsCount(userID: number) {
        return this.http.get(this.url + 'UserVisitsCount/' + userID, this.options).map(res => res.json());
    }
    getUserVisitsByDate(userID: number) {
        return this.http.get(this.url + 'UserVisitsDate/' + userID, this.options).map(res => res.json());
    }

    InsertVisit(visit: Visits, visDrugs: VisitDrugs[], visGifts: VisitGifts[]) {
        return this.http.post(this.url, { basic: visit, drugs: visDrugs, gifts: visGifts }, this.options)
            .map(res => res.json());
    }

    UpdateVisit(id: number, visit: Visits, visDrugs: VisitDrugs[], visGifts: VisitGifts[]) {
        return this.http.put(this.url + id, { basic: visit, drugs: visDrugs, gifts: visGifts }, this.options)
            .map(res => res.json());
    }

    DeleteVisit(id: number) {
        return this.http.delete(this.url + id, this.options).map(res => res.json());
    }

    getVisitDrugs(id: number) {
        return this.http.get(this.drugurl + id, this.options).map(res => res.json());
    }

    InsertVisitDrugs(VisitID: number, drugs: VisitDrugs[]) {
        var promises = [];
        promises.push(this.http.delete(this.drugurl + VisitID, this.options).map(res => res.json()));
        drugs.forEach(element => {
            element.VisitID = VisitID
            promises.push(this.http.post(this.drugurl, element, this.options).map(res => res.json()));
        });
        return Observable.forkJoin(promises);
    }
    DeleteVisitDrugs(id: number) {
        return this.http.delete(this.drugurl + id, this.options).map(res => res.json());
    }
    getVisitGifts(id: number) {
        return this.http.get(this.gifturl + id, this.options).map(res => res.json());
    }
    InsertVisitGifts(VisitID: number, gifts: VisitGifts[]) {
        var promises = [];
        promises.push(this.http.delete(this.gifturl + VisitID, this.options).map(res => res.json()));
        gifts.forEach(element => {
            element.VisitID = VisitID
            promises.push(this.http.post(this.gifturl, element, this.options).map(res => res.json()));
        });
        return Observable.forkJoin(promises);
    }
    DeleteVisitGifts(id: number) {
        return this.http.delete(this.gifturl + id, this.options).map(res => res.json());
    }
}
