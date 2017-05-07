import { Component } from '@angular/core';
import { CurrentUser } from '../../../Models/user';
import { AuthenticationService } from '../../../services/auth.service';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['../home.styles.scss']
})
export class SidebarComponent {
    constructor(private auth: AuthenticationService) { }
    isActive = false;
    showMenu: string = '';
    currentUser: CurrentUser = this.auth.getUser();
	eventCalled() {
		this.isActive = !this.isActive;
	}
    addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}