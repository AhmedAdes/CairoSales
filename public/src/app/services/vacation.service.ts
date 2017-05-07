import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Vacation, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class VacationService {

  constructor(private http: Http, private authService: AuthenticationService) { }

  url = NodeUrl + 'vac/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getVacation(id?: number) {
    var geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }

  InsertVacation(vac: Vacation) {
    return this.http.post(this.url , vac, this.options).map(res => res.json());
  }

  UpdateVacation(id: number, vac: Vacation) {
    return this.http.put(this.url  + id, vac, this.options).map(res => res.json());
  }

  DeleteVacation(id: number) {
    return this.http.delete(this.url  + id, this.options).map(res => res.json());
  }

}
