import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { MedSpec, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class MedSpecService {

  constructor(private http: Http, private authService: AuthenticationService) { }

  url = NodeUrl + 'medspec/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getSpec(id?: number) {
    var geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }

  InsertSpec(spec: MedSpec) {
    return this.http.post(this.url , spec, this.options).map(res => res.json());
  }

  UpdateSpec(id: number, spec: MedSpec) {
    return this.http.put(this.url  + id, spec, this.options).map(res => res.json());
  }

  DeleteSpec(id: number) {
    return this.http.delete(this.url  + id, this.options).map(res => res.json());
  }
  
//   ApproveRegion(id: number, ApproveUser: number) {
//     this.options.headers.append("Content-type", "application/json");
//     return this.http.put(this.url + 'Approve/' + id, JSON.stringify({id: id, appuser: ApproveUser}), this.options).map(res => res.json());
//   }
}
