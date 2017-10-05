import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { User, CurrentUser } from '../Models/user';
import { JobClass, NodeUrl } from '../Models/BasicObjects';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  public token: string;
  public currentUser: CurrentUser;

  headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    // set token if saved in local storage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.currentUser && this.currentUser.token;
  }
  login(user: any) {
    return this.http.post(NodeUrl + 'authenticate', user, this.options)
      .map((response: Response) => {

        let arrRet = response.json()[0];
        if (arrRet[0].error) {
          return { login: false, error: arrRet[0].error }
        } else if (arrRet[0].Approved == false) {
          return { login: false, error: 'this user is not approved yet please wait for the activation.' }
        }

        // login successful if there's a jwt token in the response
        let token = arrRet[0] && arrRet[0].token;
        if (token) {
          // set token property
          this.token = token;
          // var tt = new Buffer(arrRet[0].UserPhoto, 'base64')
          let base64String
          let photo
          if (arrRet[0].UserPhoto != null) {
            base64String = btoa([].reduce.call(new Uint8Array(arrRet[0].UserPhoto.data),
              function (p, c) { return p + String.fromCharCode(c) }, ''))
            photo = 'data:image/PNG;base64,' + base64String
          } else {
            photo = './assets/img/avatar5.png'
          }
          this.currentUser = {
            userID: arrRet[0].UserID, UserName: arrRet[0].UserName, loginName: user.LoginName,
            jobClass: this.getClass(arrRet[0].JobClass), token: token, photo: photo, lineID: arrRet[0].SalesLineID
          }

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          // return true to indicate successful login
          return { login: true, error: null };
        } else {
          // return false to indicate failed login
          return { login: false, error: 'Username or password is incorrect' };
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getClass(job: string): number {
    let ret = JobClass.filter(obj => obj.name == job)[0].class;
    return ret;
  }

  getUser(): CurrentUser {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.currentUser;
  }
}
