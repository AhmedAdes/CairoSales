import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../../services/auth.service';
import { CurrentUser } from '../../../Models/user';

@Component( {
    selector: 'app-header',
    styleUrls: ['./app-header.component.css'],
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

    currentUser: CurrentUser = this.auth.getUser();
    constructor( private auth: AuthenticationService ) {
        // TODO
    }
}
