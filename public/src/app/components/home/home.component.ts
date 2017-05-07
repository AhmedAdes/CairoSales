import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../../Models';
import { Message } from '../../Models/message';
import { AuthenticationService } from '../../services/auth.service';
import { MessagesService } from '../../services/messages.service';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    // styleUrls: ['./home.styles.scss']
})
export class HomeComponent implements OnInit {
    currentUser: CurrentUser = this.auth.getUser();
    private toastrConfig: ToasterConfig;

    constructor(private auth: AuthenticationService, private msgServ: MessagesService,
        private toastr: ToasterService) {
        this.toastrConfig = new ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
    }
    // private _opened: boolean = true;
    // private _animate: boolean = true;
    // private _closeOnClick: boolean = false;
    // private _MODES: Array<string> = ['over', 'push', 'dock'];
    // private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

    // private _toggleSidebar() {
    //     this._opened = !this._opened;
    // }

    public ngOnInit() {
        let ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        } else {
            // solution for IE from @hakonamatata
            let event = document.createEvent('Event');
            event.initEvent('resize', false, true);
            window.dispatchEvent(event);
        }
    }

    protected detectIE(): any {
        let ua = window.navigator.userAgent;

        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

        let msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        let trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            let rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        let edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }
}