import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../../services/auth.service';

@Component( {
    selector: 'app-aside',
    styleUrls: ['./control-sidebar.component.css'],
    templateUrl: './control-sidebar.component.html'
})
export class ControlSidebarComponent {

    constructor( private auth: AuthenticationService ) {
        // TODO
    }
}
