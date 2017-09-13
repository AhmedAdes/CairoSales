import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SurveyQuestionService } from '../../../../services';
import { SurveyAnswer, CurrentUser } from '../../../../Models';

@Component({
  selector: 'bsc-servA',
  templateUrl: './surveyA.component.html'
})
export class SurveyAnswersComponent implements OnInit, OnChanges {
  @Input() answers: SurveyAnswer[];
  @Input() ansModel: SurveyAnswer;
  @Input() oldAnswer: string;
  @Output() ansChanged = new EventEmitter();
  ansform: FormGroup;
  EditForm: boolean

  constructor(private srvQst: SurveyQuestionService, fb: FormBuilder) {
    this.ansform = fb.group({
      ansID: [''],
      ansText: ['', Validators.required]
    })

    // this.drgform.controls['drugID'].valueChanges.subscribe(val => this.drugChange(val));
  }

  ngOnInit() {
    // this.srvQst.getAnswers(this.QID).subscribe(ans => {
    //     this.answers = ans[0]
    // });
  }
  ngOnChanges(){
    if (this.ansModel.QID) {
      this.EditForm = true
    }
  }

  // drugChange(value) {
  //     if (!value) { return }

  // }

  AddAnswer(event) {
    event.preventDefault();
    if (this.answers.findIndex(x => x.AnswerText == this.ansModel.AnswerText) == -1) {
      this.answers.push(this.ansModel);
      this.ansChanged.emit(this.answers.length);
      this.resetTheForm()
    }
  }

  EditDetail() {
    // this.prepareDetail();
    var indx = this.answers.findIndex(x => x.AnswerText == this.oldAnswer)
    this.answers.fill(this.ansModel, indx, indx + 1)
    this.resetTheForm()
  }

  CancelEdit() {
    this.resetTheForm()
  }
  resetTheForm() {
    this.EditForm = false
    this.ansModel.AnswerID = null
    this.ansModel = new SurveyAnswer();
    this.ansform.reset();
  }
}
