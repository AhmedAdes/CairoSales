import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { HelperModule } from '../helpers/helper.module'

import {
  ReportsComponent, ReportHomeComponent, VisCompareReportComponent, SpecVisitsComponent, PromoReportComponent,
  VisDailyReportComponent, MedicalRepReportComponent, MedRepWeeklyReportComponent,
  DrugCommentReportComponent, DrugPeriodReportComponent, DrugCustomerReportComponent, DrugSpecsReportComponent,
  DrugPromoReportComponent
} from './';
import {
  VisitService, AuthenticationService, DrugService, IMSService, MedSpecService, UserService,
  DestinationService, RegionService, PromoToolsService, GiftService, LineService, ReportsService
} from "../../services";
import { CustomPipesModule } from "../../pipes/pipe.module";
import { reportRouting } from './report.routing';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    CustomPipesModule, HttpModule, RouterModule,
    NgxPaginationModule, ChartsModule, HelperModule, reportRouting
  ],
  declarations: [ReportsComponent, ReportHomeComponent, VisCompareReportComponent,
    SpecVisitsComponent, PromoReportComponent, VisDailyReportComponent,
    MedicalRepReportComponent, MedRepWeeklyReportComponent,
    DrugCommentReportComponent, DrugPeriodReportComponent,
    DrugCustomerReportComponent, DrugSpecsReportComponent,
    DrugPromoReportComponent/**/],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [VisitService, AuthenticationService, DrugService, IMSService, MedSpecService, UserService,
    DestinationService, RegionService, PromoToolsService, GiftService, LineService, ReportsService],
})
export class ReportsModule { }
