import { Route } from '@angular/router';

import { AuthGuard } from '../../services/auth.guard';

import { HomeComponent } from './home.component';

import {
    UserComponent, DashboardComponent, RegionComponent,
    DestinationComponent, VisitComponent, PlanComponent, WeekPlanComponent,
    ChngPassComponent, VacationComponent, ContactUsComponent, MessageComponent
} from '../';
import * as bas from '../BasicData'
import * as rpt from '../Reports'
import * as idi from '../idiReports'

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

            { path: 'basic', loadChildren : 'app/components/BasicData/basic.module#BasicDataModule'},
            { path: 'reports', loadChildren : 'app/components/Reports/report.module#ReportsModule'},
            { path: 'idiReports', loadChildren : 'app/components/idiReports/idiReports.module#IDIReportsModule'},

            { path: 'plan', component: PlanComponent, canActivate: [AuthGuard] },
            { path: 'wkplan', component: WeekPlanComponent, canActivate: [AuthGuard] },
            { path: 'msg', component: MessageComponent, canActivate: [AuthGuard] },
        ]
    }
];
