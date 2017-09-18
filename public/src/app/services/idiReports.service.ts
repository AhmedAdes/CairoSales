import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { rptIDIStillinProd, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class IDIReportsService {

  constructor(private http: Http, private authService: AuthenticationService) { }
  url = NodeUrl + 'idiRpt/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getStillInProduction(id?: string) {
    let geturl = this.url + 'stillInProduction/';
    if (id != null) {
      geturl = this.url + 'stillInProduction/' + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }

  getFinishedBalance() {
    return this.http.get(this.url + 'finishBalance/', this.options).map(res => res.json());
  }
  getQuarantineBalance() {
    return this.http.get(this.url + 'QBalance/', this.options).map(res => res.json());
  }
}