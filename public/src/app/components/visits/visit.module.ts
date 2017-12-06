import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { NgxPaginationModule } from 'ngx-pagination'
import { CustomMaterialModule } from '../material.module'
import { NguiMapModule } from '@ngui/map'
import { ModalModule } from 'ngx-bootstrap'
import { NgSpinKitModule } from 'ng-spin-kit'

import { VisitComponent, UserVisitsComponent, VisitDrugsComponent, VisitGiftsComponent } from './'
import {
  VisitService, GiftService, SurveyQuestionService, DrugService, DestinationService,
  UserRegionService, AuthenticationService, PromoToolsService
} from '../../services';
import { CustomPipesModule } from '../../pipes/pipe.module';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule, CustomPipesModule, HttpModule,
    RouterModule, NgxPaginationModule,
    BrowserAnimationsModule, CustomMaterialModule, NguiMapModule, ModalModule.forRoot(),
    NgSpinKitModule
  ],
  declarations: [
    VisitComponent, UserVisitsComponent, VisitDrugsComponent, VisitGiftsComponent
  ],
  providers: [VisitService, GiftService, SurveyQuestionService, DrugService, DestinationService,
    UserRegionService, AuthenticationService, PromoToolsService],
})
export class VisitModule { }
