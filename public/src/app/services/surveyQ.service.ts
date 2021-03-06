import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { SurveyQuestion, SurveyAnswer, NodeUrl } from '../Models';
import { AuthenticationService } from './auth.service';

@Injectable()
export class SurveyQuestionService {

  url = NodeUrl + 'survQ/';
  headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private authService: AuthenticationService) { }

  getQuestion(id?: number) {
    let geturl = this.url;
    if (id != null) {
      geturl = this.url + id;
    }
    return this.http.get(geturl, this.options).map(res => res.json());
  }

  InsertQuestion(qst: SurveyQuestion, ansrs: SurveyAnswer[]) {
    return this.http.post(this.url, { quest: qst, answers: ansrs }, this.options).map(res => res.json());
  }

  UpdateQuestion(id: number, qst: SurveyQuestion, ansrs: SurveyAnswer[]) {
    return this.http.put(this.url + id, { quest: qst, answers: ansrs }, this.options).map(res => res.json());
  }

  DeleteQuestion(id: number) {
    return this.http.delete(this.url + id, this.options).map(res => res.json());
  }

  getAnswer(id: number) {
    return this.http.get(this.url + 'answers/' + id, this.options).map(res => res.json());
  }
  getAllAnswers() {
    return this.http.get(this.url + 'answers/' + 'all', this.options).map(res => res.json());
  }
  getVisitDrugAnswers(visID: number) {
    return this.http.get(this.url + 'visDrgAns/' + visID, this.options).map(res => res.json());
  }
}
