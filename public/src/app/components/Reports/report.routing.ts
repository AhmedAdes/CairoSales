import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../services/auth.guard';

import {
    ReportsComponent, VisCompareReportComponent, SpecVisitsComponent, PromoReportComponent, 
    DrugCommentReportComponent, DrugPeriodReportComponent, DrugCustomerReportComponent, DrugSpecsReportComponent,
    MedicalRepReportComponent, MedRepWeeklyReportComponent
} from './';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: ReportsComponent,
        children: [
            { path: 'visComp', component: VisCompareReportComponent, canActivate: [AuthGuard] },
            { path: 'spec', component: SpecVisitsComponent, canActivate: [AuthGuard] },
            { path: 'promo', component: PromoReportComponent, canActivate: [AuthGuard] },
            { path: 'cust', component: DrugCustomerReportComponent, canActivate: [AuthGuard] },
            { path: 'spec', component: DrugSpecsReportComponent, canActivate: [AuthGuard] },
            { path: 'medrep', component: MedicalRepReportComponent, canActivate: [AuthGuard] },
            { path: 'medrepWeek', component: MedRepWeeklyReportComponent, canActivate: [AuthGuard] },
            // { path: 'drugs', component: DrugComponent, canActivate: [AuthGuard] },
        ]
    }
];

export const reportRouting = RouterModule.forChild(routes);
