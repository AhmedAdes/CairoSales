import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Message, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class MessageService {
  url = NodeUrl + 'message/';
  headers = new Headers({ Authorization: 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private authService: AuthenticationService) {}

  getMessage(id?: number) {
    let geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }

  InsertMessage(msg: Message) {
    return this.http.post(this.url, msg, this.options).map(res => res.json());
  }

  UpdateMessage(id: number, msg: Message) {
    return this.http
      .put(this.url + id, msg, this.options)
      .map(res => res.json());
  }

  DeleteMessage(id: number) {
    return this.http.delete(this.url + id, this.options).map(res => res.json());
  }

}
