import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { BasicDataComponent, SalesLineComponent, DrugComponent, GiftComponent, ImportanceComponent, MedSpecComponent, PromoToolsComponent, ImsDataComponent } from './';
import { DrugService, GiftService, ImportanceService, LineService, MedSpecService, PromoToolsService, IMSService } from "../../services";
import { CustomPipesModule } from "../../pipes/pipe.module";
// import { basicRouting }       from './basic.routing';

@NgModule({
    imports: [
        BrowserModule, FormsModule,
        ReactiveFormsModule, CustomPipesModule, HttpModule,
        RouterModule, NgxPaginationModule
    ],
    declarations: [BasicDataComponent, SalesLineComponent, DrugComponent, 
        GiftComponent, ImportanceComponent, MedSpecComponent, PromoToolsComponent, ImsDataComponent],
    providers: [DrugService, GiftService, ImportanceService, LineService, MedSpecService, PromoToolsService, IMSService],
})
export class BasicDataModule { }