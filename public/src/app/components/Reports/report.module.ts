import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { HelperModule } from '../helpers'

import {
    ReportsComponent, ReportHomeComponent, VisCompareReportComponent, SpecVisitsComponent, PromoReportComponent,
    DrugCommentReportComponent, DrugPeriodReportComponent, DrugCustomerReportComponent, DrugSpecsReportComponent,
    DrugPromoReportComponent,
    ScoreCardComponent, VisDailyReportComponent, MedicalRepReportComponent
} from './';
import { VisitService, AuthenticationService, ReportsService } from "../../services";
import { CustomPipesModule } from "../../pipes/pipe.module";
// import { reportRouting } from './report.routing';

@NgModule({
    imports: [
        BrowserModule, FormsModule,
        ReactiveFormsModule, CustomPipesModule, HttpModule,
        RouterModule, NgxPaginationModule, ChartsModule, HelperModule
    ],
    declarations: [ReportsComponent, ReportHomeComponent, VisCompareReportComponent,
        SpecVisitsComponent, PromoReportComponent, VisDailyReportComponent, 
        MedicalRepReportComponent, 
        DrugCommentReportComponent, DrugPeriodReportComponent,
        DrugCustomerReportComponent, DrugSpecsReportComponent, 
        DrugPromoReportComponent/**/],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ReportsService, AuthenticationService],
})
export class ReportsModule { }