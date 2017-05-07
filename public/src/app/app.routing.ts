
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, LogOutComponent } from './components';
import { homeRoutes } from './components/home/home.routing';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogOutComponent },
    ...homeRoutes,
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];


export const Approuting = RouterModule.forRoot(routes, { useHash: true });