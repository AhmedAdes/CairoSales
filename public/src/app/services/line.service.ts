import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { SalesLine, NodeUrl } from '../Models';

@Injectable()
export class LineService {

  constructor(private http: Http) { }

  url = NodeUrl + 'lines/';

  getLine(id?: number) {
    var geturl = this.url ;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl).map(res => res.json());
  }
  getLineUsers(id: number){
    return this.http.get(this.url + 'lineUsers/'+ id).map(res => res.json());
  }

  InsertLine(line: SalesLine) {
    return this.http.post(this.url, line).map(res => res.json());
  }

  UpdateLine(id: number, line: SalesLine) {
    return this.http.put(this.url + id, line).map(res => res.json());
  }

  DeleteLine(id: number) {
    return this.http.delete(this.url + id).map(res => res.json());
  }
}
