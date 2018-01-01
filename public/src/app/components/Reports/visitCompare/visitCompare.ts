import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkRate, CurrentUser, User } from '../../../Models';
import { ReportsService, AuthenticationService, UserService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
    selector: 'app-rpt-viscomp',
    templateUrl: './visitCompare.html',
    styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class VisCompareReportComponent implements OnInit {

    currentUser: CurrentUser = this.auth.getUser();
    selectedUser: number;
    userList: User[] = [];
    data: any[]
    selectedDate: Date = new Date();

    pieChartLabels: string[] = [];
    pieChartData: number[] = [];
    pieChartType = 'pie';
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
        const user = this.selectedUser ? this.selectedUser : this.currentUser.userID
        this.srv.getUserVisitCompare(user, hf.handleDate(this.selectedDate)).subscribe(rat => {
          this.data = rat
          this.pieChartLabels = rat.map(data => { return data.VisType })
          this.pieChartData = rat.map(data => { return data.VisCount == null ? 0 : data.VisCount })
          this.forceChartRefresh()

            // [{
            //     values: this.userRate,      //values - represents the array of {x,y} data points
            //     key: 'Visits Count', //key  - the name of the series.
            //     color: '#ff7f0e'  //color - optional: choose your own line color.
            // }]
        }, err => hf.handleError(err));
    }
    newUser() {
        this.srv.getUserVisitCompare(this.selectedUser, hf.handleDate(this.selectedDate)).subscribe(rat => {
          this.data = rat
          this.pieChartLabels = rat.map(data => { return data.VisType })
          this.pieChartData = rat.map(data => { return data.VisCount == null ? 0 : data.VisCount })
          this.forceChartRefresh()
        }, err => hf.handleError(err));
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
