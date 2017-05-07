import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination'; 

import { VisitComponent, UserVisitsComponent, VisitDrugsComponent, VisitGiftsComponent } from './';
import { VisitService } from "../../services";
import { CustomPipesModule } from "../../pipes/pipe.module";

@NgModule({
    imports: [
        BrowserModule, FormsModule,
        ReactiveFormsModule, CustomPipesModule, HttpModule,
        RouterModule, Ng2PaginationModule
    ],
    declarations: [
        VisitComponent, UserVisitsComponent, VisitDrugsComponent, VisitGiftsComponent
    ],
    providers: [ VisitService ],
})
export class VisitModule { }