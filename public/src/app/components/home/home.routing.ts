import { Route } from '@angular/router';

import { AuthGuard } from '../../services/auth.guard';

import { HomeComponent } from './home.component';

import {
    UserComponent, DashboardComponent, RegionComponent,
    DestinationComponent, VisitComponent, PlanComponent,
    ChngPassComponent, VacationComponent, ContactUsComponent
} from '../';
import * as bas from '../BasicData'
import * as rpt from '../Reports'

export const homeRoutes: Route[] = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
            { path: 'vac', component: VacationComponent, canActivate: [AuthGuard] },
            { path: 'regions', component: RegionComponent, canActivate: [AuthGuard] },
            { path: 'dest', component: DestinationComponent, canActivate: [AuthGuard] },
            { path: 'visit', component: VisitComponent, canActivate: [AuthGuard] },
            { path: 'pass', component: ChngPassComponent, canActivate: [AuthGuard] },
            { path: 'cntct', component: ContactUsComponent, canActivate: [AuthGuard] },
            // { path: 'basic', loadChildren: () => System.import('../BasicData/basic.module')}   
            {
                path: 'basic',
                component: bas.BasicDataComponent,
                children: [
                    { path: 'lines', component: bas.SalesLineComponent, canActivate: [AuthGuard] },
                    { path: 'gifts', component: bas.GiftComponent, canActivate: [AuthGuard] },
                    { path: 'promo', component: bas.PromoToolsComponent, canActivate: [AuthGuard] },
                    { path: 'specs', component: bas.MedSpecComponent, canActivate: [AuthGuard] },
                    { path: 'vimp', component: bas.ImportanceComponent, canActivate: [AuthGuard] },
                    { path: 'drugs', component: bas.DrugComponent, canActivate: [AuthGuard] },
                    { path: 'ims', component: bas.ImsDataComponent, canActivate: [AuthGuard] }
                ]
            },
            {
                path: 'reports', component: rpt.ReportsComponent,
                children: [
                    { path: 'home', component: rpt.ReportHomeComponent, canActivate: [AuthGuard] },
                    { path: 'visComp', component: rpt.VisCompareReportComponent, canActivate: [AuthGuard] },
                    { path: 'visDaily', component: rpt.VisDailyReportComponent, canActivate: [AuthGuard] },
                    { path: 'medrep', component: rpt.MedicalRepReportComponent, canActivate: [AuthGuard] },
                    { path: 'medrepWeek', component: rpt.MedRepWeeklyReportComponent, canActivate: [AuthGuard] },
                    { path: 'spec', component: rpt.SpecVisitsComponent, canActivate: [AuthGuard] },
                    { path: 'promo', component: rpt.PromoReportComponent, canActivate: [AuthGuard] },
                    { path: 'drgperiod', component: rpt.DrugPeriodReportComponent, canActivate: [AuthGuard] },
                    { path: 'drgcomment', component: rpt.DrugCommentReportComponent, canActivate: [AuthGuard] },
                    { path: 'drgcust', component: rpt.DrugCustomerReportComponent, canActivate: [AuthGuard] },
                    { path: 'drgspec', component: rpt.DrugSpecsReportComponent, canActivate: [AuthGuard] },
                    { path: 'drgpromo', component: rpt.DrugPromoReportComponent, canActivate: [AuthGuard] },/**/
                ]
            },
            { path: 'plan', component: PlanComponent, canActivate: [AuthGuard] }
        ]
    }
];
