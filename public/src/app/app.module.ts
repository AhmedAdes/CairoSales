import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarModule } from 'ng-sidebar';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import {
  HomeComponent, DashboardComponent, UserComponent, RegionComponent,
  SidebarComponent, TopNavComponent, DestinationComponent, VisitModule,
  UserScheduleComponent, UserWorkRateComponent, UserPlanComponent, BasicDataModule,
  PlanComponent, ReportsModule, HelperModule, LineUsersComponent, ChngPassComponent, 
  ScoreCardComponent, VacationComponent, ContactUsComponent
} from './components';
import { LoginComponent, LogOutComponent } from './components/login/login.component';
import {
  AuthenticationService, AuthGuard, RegionService, UserService, UserRegionService,
  DestinationService, DashboardService, PlanService, BreadcrumbService, MessagesService,
  IMSService, ReportsService, VacationService, ContactUsService
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
    VisitModule, BasicDataModule, HelperModule, ChartsModule, ReportsModule/**/
  ],
  declarations: [
    AppComponent, ...widgets, LoginComponent, LogOutComponent, HomeComponent,
    UserComponent, RegionComponent, DashboardComponent,
    SidebarComponent, TopNavComponent, DestinationComponent,
    UserScheduleComponent, UserWorkRateComponent, UserPlanComponent, ScoreCardComponent,
    PlanComponent, LineUsersComponent, ChngPassComponent, 
    VacationComponent, ContactUsComponent
  ],
  providers: [
    AuthGuard, AuthenticationService,
    UserService, RegionService, UserRegionService,
    DestinationService, DashboardService, PlanService,
    BreadcrumbService, MessagesService, IMSService, 
    ReportsService, VacationService, ContactUsService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

