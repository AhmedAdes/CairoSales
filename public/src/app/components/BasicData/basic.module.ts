import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSpinKitModule } from 'ng-spin-kit'

import {
  BasicDataComponent, SalesLineComponent, DrugComponent, GiftComponent, ImportanceComponent, MedSpecComponent,
  PromoToolsComponent, ImsDataComponent, SurveyQuestionsComponent, SurveyAnswersComponent
} from './';
import {
  DrugService, GiftService, ImportanceService, LineService,
  MedSpecService, PromoToolsService, IMSService, SurveyQuestionService
} from '../../services';
import { CustomPipesModule } from '../../pipes/pipe.module';
import { basicRouting } from './basic.routing';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule, CustomPipesModule, HttpModule,
    RouterModule, NgxPaginationModule, basicRouting, NgSpinKitModule
  ],
  declarations: [BasicDataComponent, SalesLineComponent, DrugComponent,
    GiftComponent, ImportanceComponent, MedSpecComponent, PromoToolsComponent,
    ImsDataComponent, SurveyQuestionsComponent, SurveyAnswersComponent],
  providers: [DrugService, GiftService, ImportanceService, LineService,
    MedSpecService, PromoToolsService, IMSService, SurveyQuestionService],
})
export class BasicDataModule { }
