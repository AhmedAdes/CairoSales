import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { PromoTools, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class PromoToolsService {

  constructor(private http: Http, private authService: AuthenticationService) { }

  url = NodeUrl + 'promo/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getPromoTools(id?: number) {
    let geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }

  InsertPromoTools(promo: PromoTools) {
    return this.http.post(this.url , promo, this.options).map(res => res.json());
  }

  UpdatePromoTools(id: number, promo: PromoTools) {
    return this.http.put(this.url  + id, promo, this.options).map(res => res.json());
  }

  DeletePromoTools(id: number) {
    return this.http.delete(this.url  + id, this.options).map(res => res.json());
  }

}
