import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Gifts, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class GiftService {

  constructor(private http: Http, private authService: AuthenticationService) { }

  url = NodeUrl + 'gift/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getGift(id?: number) {
    var geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }

  InsertGift(gift: Gifts) {
    return this.http.post(this.url , gift, this.options).map(res => res.json());
  }

  UpdateGift(id: number, gift: Gifts) {
    return this.http.put(this.url  + id, gift, this.options).map(res => res.json());
  }

  DeleteGift(id: number) {
    return this.http.delete(this.url  + id, this.options).map(res => res.json());
  }

}
