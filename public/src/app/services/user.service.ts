import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User, NodeUrl, Region, UserRegion } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class UserService {

  constructor(private http: Http, private authService: AuthenticationService) { }

  url = NodeUrl + 'User/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  getuser(id?: number) {
    let geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }

  getUserChain(id: number) {
    return this.http.get(this.url + 'chain/' + id, this.options).map(res => res.json());
  }
  getManagerChain(id: number) {
    return this.http.get(this.url + 'managerChain/' + id, this.options).map(res => res.json());
  }
  InsertUser(user: User, regions: Region[]) {
    return this.http.post(this.url, { basic: user, regions: regions }, this.options).map(res => res.json());
  }

  UpdateUser(id: number, user: User, regions: Region[]) {
    return this.http.put(this.url + id, { basic: user, regions: regions }, this.options).map(res => res.json());
  }

  DeleteUser(id: number) {
    return this.http.delete(this.url + id, this.options).map(res => res.json());
  }

  ApproveUser(id: number, ApproveUser: number) {
    // this.options.headers.append("Content-type", "application/json");
    return this.http.put(this.url + 'Approve/' + id, { id: id, appuser: ApproveUser }, this.options).map(res => res.json());
  }
  DisableUser(id: number) {
    // this.options.headers.append("Content-type", "application/json");
    return this.http.put(this.url + 'Disable/' + id, { id: id }, this.options).map(res => res.json());
  }
  RotateUsers(id1: number, id2: number) {
    return this.http.put(this.url + 'Replace/' + id1, { id1: id1, id2: id2 }, this.options).map(res => res.json());
  }
  changePass(mod: User) {
    return this.http.put(this.url + 'ChangePass/' + mod.UserID, mod, this.options).map(res => res.json());
  }
}
