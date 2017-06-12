import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkRate, CurrentUser, User } from '../../../Models';
import { ReportsService, AuthenticationService, UserService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
    selector: 'rpt-visComp',
    templateUrl: './visitCompare.html',
    styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class VisCompareReportComponent implements OnInit {

    currentUser: CurrentUser = this.auth.getUser();
    selectedUser: number;
    userList: User[] = [];
    selectedDate: Date = new Date();

    pieChartLabels: string[] = [];
    pieChartData: number[] = [];
    pieChartType: string = 'pie';
    colorsEmpty: Array<Color> = []
    ChartOptions: any = {
        responsive: true,
        maintainAspectRatio: true
    };
    @ViewChild(BaseChartDirective) _chart;

    /* Constructor, needed to get @Injectables */
    constructor(private srv: ReportsService, private srvUser: UserService,
        private auth: AuthenticationService, private location: Location) { }

    ngOnInit() {
        this.selectedUser = this.currentUser.userID

        this.srvUser.getUserChain(this.currentUser.userID).subscribe(usrs => this.userList = usrs)
    }

    newSchedule(datevalue: Date) {
        this.selectedDate = datevalue ? datevalue : new Date()
        var user = this.selectedUser ? this.selectedUser : this.currentUser.userID
        this.srv.getUserVisitCompare(user, hf.handleDate(this.selectedDate)).subscribe(rat => {
            this.pieChartLabels = rat.map(data => { return data.VisType })
            this.pieChartData = rat.map(data => { return data.VisCount == null ? 0 : data.VisCount })
            this.forceChartRefresh()

            // [{
            //     values: this.userRate,      //values - represents the array of {x,y} data points
            //     key: 'Visits Count', //key  - the name of the series.
            //     color: '#ff7f0e'  //color - optional: choose your own line color.
            // }]
        });
    }
    newUser() {
        this.srv.getUserVisitCompare(this.selectedUser, hf.handleDate(this.selectedDate)).subscribe(rat => {
            this.pieChartLabels = rat.map(data => { return data.VisType })
            this.pieChartData = rat.map(data => { return data.VisCount == null ? 0 : data.VisCount })
            this.forceChartRefresh()
        });
    }
    goBack() {
        this.location.back()
    }
    printReport() {
        window.print()
    }
    forceChartRefresh() {
        setTimeout(() => {
            this._chart.refresh();
        }, 10);
    }
}
