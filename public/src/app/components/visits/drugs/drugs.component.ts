import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DrugService, SurveyQuestionService } from '../../../services';
import { Drugs, VisitDrugs, SurveyAnswer, CurrentUser, VisitAnswers } from '../../../Models';
import { CustomMaterialModule } from '../../material.module';
import 'rxjs/add/operator/map';
import * as hf from '../../helpers/helper.functions'

@Component({
  selector: 'app-visit-drugs',
  templateUrl: './visitdrugs.html',
  styles: [`.x-radio-group {
    display: inline-flex;
    flex-direction: column;
  }`,
    `.x-radio-button {
    margin: 1px;
    font-weight: normal!important;
  }`, `.survey{
    background-color: #B6B6B6;
  }`]
})
export class VisitDrugsComponent implements OnInit {
  @Input() visDrugs: VisitDrugs[];
  @Input() visAnsrs: VisitAnswers[];
  @Input() drugmodel: VisitDrugs;
  @Input() currentUser: CurrentUser;
  @Input() allAnswers: SurveyAnswer[];
  @Output() drugChanged = new EventEmitter();
  @Output() ansChanged = new EventEmitter();
  drugs: Drugs[] = [];
  surveyAns: any[] = []
  quests: any[]
  drgform: FormGroup;
  surveyErrorMsg = ''

  constructor(private srvDrg: DrugService, fb: FormBuilder, private srvQ: SurveyQuestionService) {
    this.drgform = fb.group({
      drugID: ['', Validators.required],
      comment: [''],
      gift: ['']
    })

    // this.drgform.controls['drugID'].valueChanges.subscribe(val => this.drugChange(val));
  }
  ngOnInit() {
    this.srvDrg.getPlanDrugs(this.currentUser.userID).subscribe(drg => {
      this.drugs = drg[0]
      this.srvQ.getAllAnswers().subscribe(ans => {
        this.allAnswers = ans
        const unique = ans.map(function (obj) { return obj.QID; });
        this.quests = unique.filter((x, i, a) => a.indexOf(x) === i)
        this.CreateQuestAnswers()
      }, err => hf.handleError(err))
    }, err => hf.handleError(err));
  }
  CreateQuestAnswers() {
    this.surveyAns = this.quests.map(q => {
      return {
        QID: q, QText: this.allAnswers.filter(a => a.QID === q)[0].QText, SelAns: null,
        Answers: this.allAnswers.filter(a => a.QID === q)
      }
    })
    this.surveyAns.forEach(sr => sr.Answers.forEach(a => a['checked'] = false))
  }

  // drugChange(value) {
  //     if (!value) { return }

  // }
  checkforAnswer(Arr) {
    return !(Arr.filter(b => b.checked == true).length >= 1)
  }
  AddDrug(event) {
    event.preventDefault();
    let chkbool: boolean
    this.surveyAns.forEach(q => chkbool = this.checkforAnswer(q.Answers))
    if (this.visDrugs.findIndex(x => x.DrugID === this.drugmodel.DrugID) === -1) {
      if (chkbool) {
        this.surveyErrorMsg = 'Please Answer All the Survey Questions'
        return;
      } else {
        this.surveyErrorMsg = ''
      }
      this.drugmodel.DrugName = this.drugs.filter(obj => obj.DrugID === this.drugmodel.DrugID)[0].DrugName;
      this.visAnsrs.push.apply(this.visAnsrs, this.surveyAns.map(a => {
        return {
          VisitID: null, DrugID: this.drugmodel.DrugID, DrugName: this.drugmodel.DrugName,
          AnswerID: a.Answers.filter(b => b.checked === true)[0].AnswerID,
          AnswerText: a.Answers.filter(b => b.checked === true)[0].AnswerText,
          QID: a.QID, QText: a.QText, Keyword: a.Keyword
        }
      }))
      this.visDrugs.push(this.drugmodel);
      this.drugmodel = new VisitDrugs();
      this.drugChanged.emit(this.visDrugs.length);
      this.ansChanged.emit(this.visAnsrs.length);
      this.drgform.reset();
      this.CreateQuestAnswers()
    }
  }
  CheckAnswer(ansID, i) {
    this.surveyAns[i].Answers.filter(a => a.AnswerID === ansID)[0].checked = true
  }
}
