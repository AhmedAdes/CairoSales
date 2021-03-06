import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { Region, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class UserRegionService {

  url = NodeUrl + 'userRegion/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private authService: AuthenticationService) { }

  getUSerRegion(userid: number) {
    const geturl = this.url + userid;
    return this.http.get(geturl, this.options).map(res => res.json());
  }
  getUserChainRegions(userid: number) {
    const geturl = this.url + 'userchain/' + userid;
    return this.http.get(geturl, this.options).map(res => res.json());
  }
  getUserManagers(userid: number) {
    const geturl = NodeUrl + 'User/' + 'managerChain/' + userid;
    return this.http.get(geturl, this.options).map(res => res.json());
  }
  InsertUserRegion(UserID: number, regions: Region[]) {
    const promises = [];
    regions.forEach(element => {
      const send = {
        RegionID: element.RegionID,
        UserID: UserID
      };
      promises.push(this.http.post(this.url, send, this.options).map(res => res.json()));
    });
    return Observable.forkJoin(promises);
  }

  DeleteUserRegion(id: number) {
    return this.http.delete(this.url + id, this.options).map(res => res.json());
  }
}
