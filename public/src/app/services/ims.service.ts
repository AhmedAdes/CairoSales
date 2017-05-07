import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { IMSData, NodeUrl } from '../Models';

@Injectable()
export class IMSService {

  constructor(private http: Http) { }

  url = NodeUrl + 'ims/';

  getIMS(id?: number) {
    var geturl = this.url ;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl).map(res => res.json());
  }
  getUserIMS(userID: number){
    return this.http.get(this.url + 'UserIMS/' + userID).map(res => res.json());
  }
  InsertIMS(IMS: IMSData) {
    return this.http.post(this.url, IMS).map(res => res.json());
  }

  UpdateIMS(id: number, IMS: IMSData) {
    return this.http.put(this.url + id, IMS).map(res => res.json());
  }

  DeleteIMS(id: number) {
    return this.http.delete(this.url + id).map(res => res.json());
  }
}
