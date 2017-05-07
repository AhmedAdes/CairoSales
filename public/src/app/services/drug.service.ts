import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Drugs, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class DrugService {

  constructor(private http: Http, private authService: AuthenticationService) { }

  url = NodeUrl + 'drug/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getDrug(id?: number) {
    var geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }
  getPlanDrugs(userID: number){
    return this.http.get(this.url + 'PlanDrugs/' + userID, this.options).map(res => res.json());
  }
  InsertDrug(drug: Drugs) {
    return this.http.post(this.url , drug, this.options).map(res => res.json());
  }

  UpdateDrug(id: number, drug: Drugs) {
    return this.http.put(this.url + id, drug, this.options).map(res => res.json());
  }

  DeleteDrug(id: number) {
    return this.http.delete(this.url + id, this.options).map(res => res.json());
  }


}
