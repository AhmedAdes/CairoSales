import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../services/auth.guard';

import {
  ReportsComponent, ReportHomeComponent, VisCompareReportComponent, SpecVisitsComponent, PromoReportComponent,
  DrugCommentReportComponent, DrugPeriodReportComponent, DrugCustomerReportComponent, DrugSpecsReportComponent,
  MedicalRepReportComponent, MedRepWeeklyReportComponent, VisDailyReportComponent, DrugPromoReportComponent,
  CustomerPeriodReportComponent
} from './';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      { path: 'home', component: ReportHomeComponent, canActivate: [AuthGuard] },
      { path: 'visComp', component: VisCompareReportComponent, canActivate: [AuthGuard] },
      { path: 'visDaily', component: VisDailyReportComponent, canActivate: [AuthGuard] },
      { path: 'medrep', component: MedicalRepReportComponent, canActivate: [AuthGuard] },
      { path: 'medrepWeek', component: MedRepWeeklyReportComponent, canActivate: [AuthGuard] },
      { path: 'spec', component: SpecVisitsComponent, canActivate: [AuthGuard] },
      { path: 'promo', component: PromoReportComponent, canActivate: [AuthGuard] },
      { path: 'drgperiod', component: DrugPeriodReportComponent, canActivate: [AuthGuard] },
      { path: 'drgcomment', component: DrugCommentReportComponent, canActivate: [AuthGuard] },
      { path: 'drgcust', component: DrugCustomerReportComponent, canActivate: [AuthGuard] },
      { path: 'drgspec', component: DrugSpecsReportComponent, canActivate: [AuthGuard] },
      { path: 'drgpromo', component: DrugPromoReportComponent, canActivate: [AuthGuard] },
      { path: 'custperiod', component: CustomerPeriodReportComponent, canActivate: [AuthGuard] },/**/
    ]
  }
];

export const reportRouting = RouterModule.forChild(routes);
