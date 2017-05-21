import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { WorkRate, CurrentUser, User } from '../../../Models';
import { ReportsService, AuthenticationService, UserService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
    selector: 'rpt-visDaily',
    templateUrl: './visitDaily.html'
})
export class VisDailyReportComponent implements OnInit {

    currentUser: CurrentUser = this.auth.getUser();
    selectedUser: number;
    userList: User[] = [];
    selectedDate: Date = new Date();
    userRate: WorkRate[] = [];
    
    /* Constructor, needed to get @Injectables */
    constructor(private srv: ReportsService, private srvUser: UserService,
        private auth: AuthenticationService, private location: Location) { }

    ngOnInit() {
        this.selectedUser = this.currentUser.userID

        this.srvUser.getUserChain(this.currentUser.userID).subscribe(usrs => this.userList = usrs)
    }

    newSchedule(datevalue: Date) {
        this.selectedDate = datevalue ? new Date() : datevalue
        this.srv.getUserVisitRate(this.selectedUser ? this.currentUser.userID : this.selectedUser, this.selectedDate.getMonth() + 1).subscribe(rat => {
            this.userRate = rat[0];
        });
    }
    newUser() {
        this.srv.getUserVisitRate(this.selectedUser, this.selectedDate.getMonth() + 1).subscribe(rat => {
            this.userRate = rat[0];
        });
    }
    goBack() {
        this.location.back()
    }
    printReport() {
        window.print()
    }    
}
