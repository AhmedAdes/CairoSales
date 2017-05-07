import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Destination, DestinationUser, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class DestinationService {

  constructor(private http: Http, private authService: AuthenticationService) { }

  url = NodeUrl + 'dest/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getDestination(id?: number) {
    var geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }
  getUserChainDestination(userID: number) {
    return this.http.get(this.url + 'userChain/' + userID, this.options).map(res => res.json());
  }
  getUserChainCount(userID: number) {
    return this.http.get(this.url + 'userChainCount/' + userID, this.options).map(res => res.json());
  }
  getRegionDestinations(regionID: number) {
    return this.http.get(this.url + 'region/' + regionID, this.options).map(res => res.json());
  }
  getApprovedRegionDestinations(regionID: number) {
    return this.http.get(this.url + 'aprvregion/' + regionID, this.options).map(res => res.json());
  }
  getPlanApprovedRegionDestinations(regionID: number, userID: number, visitDate: string) {
    return this.http.get(this.url + 'planAprvRegion/' + regionID + '.' + userID + '.' + visitDate, this.options).map(res => res.json());
  }
  getDestUsers(destID: number) {
    return this.http.get(this.url + 'destUsers/' + destID, this.options).map(res => res.json());
  }
  getAllDestUsers() {
    return this.http.get(this.url + 'AlldestUsers/', this.options).map(res => res.json());
  }
  InsertDestination(dest: Destination, destUsers: DestinationUser[]) {
    return this.http.post(this.url, {dst: dest, users: destUsers}, this.options).map(res => res.json());
  }
  UpdateDestination(id: number, dest: Destination, destUsers: DestinationUser[]) {
    return this.http.put(this.url + id, {dst: dest, users: destUsers}, this.options).map(res => res.json());
  }
  DeleteDestination(id: number) {
    return this.http.delete(this.url + id, this.options).map(res => res.json());
  }

  ApproveDestination(id: number, ApproveUser: number) {
    if (!this.headers.has("Content-type")) {
      this.options.headers.append("Content-type", "application/json");
    }
    return this.http.put(this.url + 'Approve/' + id, JSON.stringify({ id: id, appuser: ApproveUser }), this.options).map(res => res.json());
  }
  checkMaxVisit(id: number, userID: number, visitDate: string) {
    return this.http.get(this.url + 'checkMaxVisit/' + id + '.' + userID + '.' + visitDate, this.options).map(res => res.json());;
  }
}
