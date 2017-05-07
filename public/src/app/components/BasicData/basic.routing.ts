import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../services/auth.guard';

import { BasicDataComponent, DrugComponent, GiftComponent, ImportanceComponent, MedSpecComponent, PromoToolsComponent, SalesLineComponent, ImsDataComponent } from './';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: BasicDataComponent,
        children: [
            { path: 'lines', component: SalesLineComponent, canActivate: [AuthGuard] },
            { path: 'gifts', component: GiftComponent, canActivate: [AuthGuard] },
            { path: 'promo', component: PromoToolsComponent, canActivate: [AuthGuard] },
            { path: 'specs', component: MedSpecComponent, canActivate: [AuthGuard] },
            { path: 'vimp', component: ImportanceComponent, canActivate: [AuthGuard] },
            { path: 'drugs', component: DrugComponent, canActivate: [AuthGuard] },
            { path: 'ims', component: ImsDataComponent, canActivate: [AuthGuard] },
        ]
    }
];

export const basicRouting = RouterModule.forChild(routes);
