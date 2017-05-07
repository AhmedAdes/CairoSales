import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import {
    ReportsComponent, ReportHomeComponent, VisCompareReportComponent, SpecVisitsComponent, PromoReportComponent,
    DrugCommentReportComponent, DrugPeriodReportComponent, DrugCustomerReportComponent, DrugSpecsReportComponent,
    ScoreCardComponent
} from './';
import { VisitService, AuthenticationService, ReportsService } from "../../services";
import { CustomPipesModule } from "../../pipes/pipe.module";
// import { reportRouting } from './report.routing';

@NgModule({
    imports: [
        BrowserModule, FormsModule,
        ReactiveFormsModule, CustomPipesModule, HttpModule,
        RouterModule, Ng2PaginationModule
    ],
    declarations: [ReportsComponent, ReportHomeComponent, VisCompareReportComponent,
        SpecVisitsComponent, PromoReportComponent, 
        DrugCommentReportComponent, DrugPeriodReportComponent,
        DrugCustomerReportComponent, DrugSpecsReportComponent/**/],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ReportsService, AuthenticationService],
})
export class ReportsModule { }