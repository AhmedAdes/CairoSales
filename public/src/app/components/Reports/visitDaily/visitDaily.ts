import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { WorkRate, CurrentUser, User } from '../../../Models';
import { ReportsService, AuthenticationService, UserService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
    selector: 'rpt-visDaily',
    templateUrl: './visitDaily.html',
    styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class VisDailyReportComponent implements OnInit {

    currentUser: CurrentUser = this.auth.getUser();
    selectedUser: number;
    userList: User[] = [];
    selectedDate: Date = new Date();
    userRate: WorkRate[] = [];

    chartData = [{ data: [], label: '' }];
    lineChartLabels: Array<any> = [];
    lineChartType: string = 'line';
    lineChartLegend: boolean = true;
    colorsEmpty: Array<Color> = []
    lineChartOptions: any = {
        responsive: true,
        maintainAspectRatio: true
    };
    lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }];
    @ViewChild(BaseChartDirective) private _chart;

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
            this.chartData = [{
                data: rat[0].map(da => { return da.visCount == null ? 0 : da.visCount }),
                label: 'Visit Count'
            }]
            this.lineChartLabels = rat[0].map(data => { return data.DayDate.split('T')[0] })
            this.forceChartRefresh()
        });
    }
    newUser() {
        this.srv.getUserVisitRate(this.selectedUser, this.selectedDate.getMonth() + 1).subscribe(rat => {
            this.userRate = rat[0];
            this.chartData = [{
                data: rat[0].map(da => { return da.visCount == null ? 0 : da.visCount }),
                label: 'Visit Count'
            }]
            this.lineChartLabels = rat[0].map(data => { return data.DayDate.split('T')[0] })
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
