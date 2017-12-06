import { Component, OnInit, Input, AfterViewInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { WorkRate, CurrentUser, User } from '../../../Models';
import { DashboardService, AuthenticationService } from '../../../services';
import { BaseChartDirective } from 'ng2-charts';
import * as hf from '../../helpers/helper.functions'
// import { nvD3 } from 'ng2-nvd3'
// declare let d3, nv: any;
// import * as Moment from 'moment';

@Component({
    selector: 'dash-workRate',
    templateUrl: './workRate.html'
})
export class UserWorkRateComponent implements OnInit, OnChanges {

    userRate: WorkRate[] = [];
    @Input() currentUser: CurrentUser;
    @Input() user?: User;
    @Input() chain?: boolean;
    selectedMonth: number = new Date().getMonth() + 1;
    appliedClass = true

    @ViewChild(BaseChartDirective) _chart;

    options;
    chartData = [{data: [], label: ''}];
    lineChartLabels: Array<any> = [];
    public lineChartLegend = true;
    public lineChartType = 'line';
    dispUser: any
    public lineChartOptions: any = {
        responsive: true,
        maintainAspectRatio: true
    };
    // public chartData = [
    //             { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' } //,
    //             // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    //             // { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    //         ];
    // public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }];
    /* Constructor, needed to get @Injectables */
    constructor(private srvDash: DashboardService) { }

    ngOnInit() {
        if (this.chain) {
            this.dispUser = {
                userID: this.user.UserID,
                UserName: this.user.UserName
            }
        } else {
            this.dispUser = {
                userID: this.currentUser.userID,
                UserName: this.currentUser.UserName
            }
        }
    }
    ngOnChanges(changes: SimpleChanges) {
        this.viewBulk()
    }
    newSchedule(datevalue: Date) {
        this.selectedMonth = datevalue.getMonth() + 1;
        this.viewBulk()
    }
    viewBulk() {
        this.ngOnInit();
        this.srvDash.getUserVisitRate(this.dispUser.userID, this.selectedMonth).subscribe(rat => {
            // this.userRate = rat[0].map(data => {
            //     return { x: new Date(data.DayDate), y: data.visCount == null ? 0 : data.visCount }
            // })
            this.chartData = [{
                data: rat[0].map(da => { return da.visCount == null ? 0 : da.visCount }),
                label: 'Visit Count'
            }]
            this.lineChartLabels = rat[0].map(data => { return data.DayDate.split('T')[0] })

        this.forceChartRefresh()
        }, err => hf.handleError(err));
    }
    changeArrowClass() {
        this.appliedClass = !this.appliedClass
    }
    forceChartRefresh() {
        setTimeout(() => {
            this._chart.refresh();
        }, 10);
    }

}
