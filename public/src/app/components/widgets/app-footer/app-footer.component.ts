import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../../services/auth.service';

@Component( {
    selector: 'app-footer',
    styleUrls: ['./app-footer.component.css'],
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {

    constructor( private auth: AuthenticationService ) {
        // TODO
    }
}
