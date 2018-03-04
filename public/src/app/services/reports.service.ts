import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthenticationService } from './auth.service';
import { NodeUrl } from '../Models';

@Injectable()
export class ReportsService {
  url = NodeUrl + 'rprt/';
  headers = new Headers({ Authorization: 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private authService: AuthenticationService) { }

  getUserVisitCompare(userID: number, visDate: string) {
    return this.http
      .get(this.url + 'visitCompare/' + userID + '.' + visDate, this.options)
      .map(res => res.json());
  }
  getSpecVisits(specID: number, from: string, to: string, ims: number) {
    return this.http
      .get(this.url + 'specVisits/' + specID + '.' + from + '.' + to + '.' + ims, this.options)
      .map(res => res.json());
  }
  getPromo(from: string, to: string, ims: number) {
    return this.http
      .get(this.url + 'promoPeriod/' + from + '.' + to + '.' + ims, this.options)
      .map(res => res.json());
  }
  getdrugAnalysis(from: string, to: string, drugId: number, type: string, crt: string) {
    return this.http
      .get(this.url + 'drugAnalysis/' + from + '.' + to + '.' + drugId + '.' + type + '.' + crt, this.options)
      .map(res => res.json());
  }
  getpromoAnalysis(from: string, to: string, drugId: number, crt: string) {
    return this.http
      .get(this.url + 'drugPromoAnalysis/' + from + '.' + to + '.' + drugId + '.' + crt, this.options)
      .map(res => res.json());
  }
  getUserVisitRate(id: number, visdate: string) {
    return this.http
      .get(this.url + 'UserVisitRate/' + id + '/' + visdate, this.options)
      .map(res => res.json());
  }
  getMedicalRepReport(from: string, to: string, lineID: number) {
    return this.http
      .get(this.url + 'MedicalRepReport/' + from + '/' + to + '/' + lineID, this.options)
      .map(res => res.json());
  }
  getMedicalRepWeeklyReport(from: string, to: string, lineID: number) {
    return this.http
      .get(this.url + 'MedRepWeeklyReport/' + from + '/' + to + '/' + lineID, this.options)
      .map(res => res.json());
  }
  getSalesLineVisitRate(from: string, to: string, lineID: number) {
    return this.http
      .get(this.url + 'SalesLineVisitRate/' + from + '/' + to + '/' + lineID, this.options)
      .map(res => res.json());
  }
  getDrugSurveyAnalysis(from: string, to: string, drugID: number) {
    return this.http
      .get(this.url + 'DrugSurveyReport/' + from + '/' + to + '/' + drugID)
      .map(res => res.json());
  }
  getCustPeriodAnalysis(from: string, to: string, destID: number) {
    return this.http
      .get(this.url + 'custPeriodAnalysis/' + from + '/' + to + '/' + destID)
      .map(res => res.json());
  }
}
