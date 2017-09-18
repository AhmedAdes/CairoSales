import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { VisitImportance, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class ImportanceService {

  constructor(private http: Http, private authService: AuthenticationService) { }

  url = NodeUrl + 'visitimp/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getImp(id?: number) {
    let geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }

  InsertImp(imp: VisitImportance) {
    return this.http.post(this.url , imp, this.options).map(res => res.json());
  }

  UpdateImp(id: number, imp: VisitImportance) {
    return this.http.put(this.url + id, imp, this.options).map(res => res.json());
  }

  DeleteImp(id: number) {
    return this.http.delete(this.url + id, this.options).map(res => res.json());
  }
  
//   ApproveImp(id: number, ApproveUser: number) {
//     this.options.headers.append("Content-type", "application/json");
//     return this.http.put(this.url + 'Approve/' + id, JSON.stringify({id: id, appuser: ApproveUser}), this.options).map(res => res.json());
//   }
}
