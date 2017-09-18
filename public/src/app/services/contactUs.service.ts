import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ContactUs, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class ContactUsService {

    constructor(private http: Http, private authService: AuthenticationService) { }

    url = NodeUrl + 'cntct/';
    headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    options = new RequestOptions({ headers: this.headers });

    getContactUs(id?: number) {
        let geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(res => res.json());
    }
    getUserContactUs(userid: number) {
        return this.http.get(this.url + 'UserMessages/' + userid, this.options).map(res => res.json());
    }
    getPlanContactUs(userID: number) {
        return this.http.get(this.url + 'PlanContactUs/' + userID, this.options).map(res => res.json());
    }
    InsertContactUs(cntct: ContactUs) {
        return this.http.post(this.url, cntct, this.options).map(res => res.json());
    }
    UpdateContactUs(id: number, cntct: ContactUs) {
        return this.http.put(this.url + id, cntct, this.options).map(res => res.json());
    }
    DeleteContactUs(id: number) {
        return this.http.delete(this.url + id, this.options).map(res => res.json());
    }
    SolveContactUs(id: number) {
        return this.http.put(this.url + 'Solve/' + id, { id: id }, this.options).map(res => res.json());
    }
}