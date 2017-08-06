import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { HelperModule } from '../helpers'

import {
    idiReportRouting, IDIReportsComponent, IDIReportHomeComponent, IDIStillInProductionComponent,
    IDIFinishedBalanceComponent, IDIQuarantineBalanceComponent
} from './';

import { IDIReportsService, AuthenticationService } from "../../services";
import { CustomPipesModule } from "../../pipes/pipe.module";

@NgModule({
    imports: [
        BrowserModule, FormsModule,
        ReactiveFormsModule, CustomPipesModule, HttpModule,
        RouterModule, NgxPaginationModule, ChartsModule, HelperModule
    ],
    declarations: [
        IDIReportsComponent, IDIReportHomeComponent, IDIStillInProductionComponent,
        IDIFinishedBalanceComponent, IDIQuarantineBalanceComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [IDIReportsService, AuthenticationService],
})
export class IDIReportsModule { }