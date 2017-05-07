import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'top-nav',
	templateUrl: './topnav.component.html',
	styleUrls: ['../home.styles.scss']
})
export class TopNavComponent {
	constructor() {
	}
	@Input() currentUser;
	@Output() ToggleSidebar = new EventEmitter()
	closesidebar() {
		this.ToggleSidebar.emit();
	}
}