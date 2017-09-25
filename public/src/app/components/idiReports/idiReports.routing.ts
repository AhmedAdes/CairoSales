import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../services/auth.guard';

import {
  IDIReportsComponent, IDIReportHomeComponent, IDIStillInProductionComponent, IDIFinishedBalanceComponent, IDIQuarantineBalanceComponent
} from './';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: IDIReportsComponent,
    children: [
      { path: 'home', component: IDIReportHomeComponent, canActivate: [AuthGuard] },
      { path: 'inProdctn', component: IDIStillInProductionComponent, canActivate: [AuthGuard] },
      { path: 'finBlnc', component: IDIFinishedBalanceComponent, canActivate: [AuthGuard] },
      { path: 'QBlnc', component: IDIQuarantineBalanceComponent, canActivate: [AuthGuard] },
    ]
  }
];

export const idiReportRouting = RouterModule.forChild(routes);
