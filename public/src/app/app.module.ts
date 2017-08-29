import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarModule } from 'ng-sidebar';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { AlertModule, DatepickerModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';


import { AppComponent } from './app.component';
import {
  HomeComponent, DashboardComponent, UserComponent, RegionComponent,
  SidebarComponent, TopNavComponent, DestinationComponent, VisitModule,
  UserScheduleComponent, UserWorkRateComponent, UserPlanComponent, BasicDataModule,
  PlanComponent, ReportsModule, IDIReportsModule, HelperModule, LineUsersComponent, ChngPassComponent,
  ScoreCardComponent, VacationComponent, ContactUsComponent, WeekPlanComponent, TopUsersComponent
} from './components';
import { LoginComponent, LogOutComponent } from './components/login/login.component';
import {
  AuthenticationService, AuthGuard, RegionService, UserService, UserRegionService,
  DestinationService, DashboardService, PlanService, BreadcrumbService, MessagesService,
  IMSService, ReportsService, VacationService, ContactUsService, WeekPlanService
} from './services';
import { CustomPipesModule } from "./pipes/pipe.module";
import { Approuting } from './app.routing';

import {
  BreadcrumbComponent, AppHeaderComponent, AppFooterComponent, MenuAsideComponent,
  ControlSidebarComponent, MessagesBoxComponent, NotificationBoxComponent,
  TasksBoxComponent, UserBoxComponent
} from './components/widgets';

let widgets = [
  BreadcrumbComponent, AppHeaderComponent, AppFooterComponent, MenuAsideComponent,
  ControlSidebarComponent, MessagesBoxComponent, NotificationBoxComponent,
  TasksBoxComponent, UserBoxComponent
];

@NgModule({
  imports: [
    BrowserModule, FormsModule, SidebarModule,
    ReactiveFormsModule, HttpModule, ToasterModule,
    RouterModule, Approuting, CustomPipesModule, NgxPaginationModule,
    AlertModule.forRoot(), DatepickerModule.forRoot(),
    VisitModule, BasicDataModule, HelperModule, ChartsModule,
    ReportsModule, IDIReportsModule, FileUploadModule/**/
  ],
  declarations: [
    AppComponent, ...widgets, LoginComponent, LogOutComponent, HomeComponent,
    UserComponent, RegionComponent, DashboardComponent,
    SidebarComponent, TopNavComponent, DestinationComponent,
    UserScheduleComponent, UserWorkRateComponent, UserPlanComponent, ScoreCardComponent,
    PlanComponent, LineUsersComponent, ChngPassComponent,
    VacationComponent, ContactUsComponent, WeekPlanComponent, TopUsersComponent
  ],
  providers: [
    AuthGuard, AuthenticationService,
    UserService, RegionService, UserRegionService,
    DestinationService, DashboardService, PlanService,
    BreadcrumbService, MessagesService, IMSService,
    ReportsService, VacationService, ContactUsService,
    WeekPlanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

