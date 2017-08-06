import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../services/auth.guard';

import {
    IDIReportsComponent, IDIReportHomeComponent, IDIStillInProductionComponent
} from './';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: 'idiReports',
        component: IDIReportsComponent,
        children: [            
            { path: 'home', component: IDIReportHomeComponent, canActivate: [AuthGuard] },
            { path: 'inProdctn', component: IDIStillInProductionComponent, canActivate: [AuthGuard] },
        ]
    }
];

export const idiReportRouting = RouterModule.forChild(routes);
