import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Region, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class RegionService {

  constructor(private http: Http, private authService: AuthenticationService) { }

  url = NodeUrl + 'region/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getRegion(id?: number) {
    var geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }
  getProvinceRegions(province) {
    return this.http.get(this.url + 'province/' + province, this.options).map(res => res.json());
  }
  getApprovedProvinceRegions(province) {
    return this.http.get(this.url + 'aprvprovince/' + province, this.options).map(res => res.json());
  }
  getUserChainRegions(userID) {
    return this.http.get(this.url + 'userChain/' + userID, this.options).map(res => res.json());
  }
  InsertRegion(region: Region) {
    return this.http.post(this.url, region, this.options).map(res => res.json());
  }

  UpdateRegion(id: number, region: Region) {
    return this.http.put(this.url + id, region, this.options).map(res => res.json());
  }

  DeleteRegion(id: number) {
    return this.http.delete(this.url + id, this.options).map(res => res.json());
  }

  ApproveRegion(id: number, ApproveUser: number) {
    if (!this.headers.has("Content-type")) {
      this.options.headers.append("Content-type", "application/json");
    }
    return this.http.put(this.url + 'Approve/' + id, JSON.stringify({ id: id, appuser: ApproveUser }), this.options).map(res => res.json());
  }
}
