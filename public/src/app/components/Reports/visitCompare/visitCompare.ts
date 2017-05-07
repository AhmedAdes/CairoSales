import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { WorkRate, CurrentUser, User } from '../../../Models';
import { ReportsService, AuthenticationService, UserService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
// import { nvD3 } from 'ng2-nvd3'
// declare let d3, nv: any;
// import * as Moment from 'moment';

@Component({
    selector: 'rpt-visComp',
    templateUrl: './visitCompare.html',
    styles: [`
        .d3-chart {
        width: 100%;
        height: 400px;
        }

        .d3-chart .axis path,
        .d3-chart .axis line {
        stroke: #999;
        }

        .d3-chart .axis text {
        fill: #999;
        }
    `]
})
export class VisCompareReportComponent implements OnInit {

    userRate: WorkRate[] = [];
    currentUser: CurrentUser = this.auth.getUser();
    selectedUser: number;
    userList: User[] = [];
    selectedDate: Date;
    // private areaChartConfig: Array<AreaChartConfig>;
    options;
    data;
    /* Constructor, needed to get @Injectables */
    constructor(private srv: ReportsService, private srvUser: UserService,
        private auth: AuthenticationService, private location: Location) { }

    // @ViewChild(nvD3)
    // nvD3: nvD3;

    ngOnInit() {
        this.selectedUser = this.currentUser.userID
        this.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        }
        this.srvUser.getUserChain(this.currentUser.userID).subscribe(usrs => this.userList = usrs)
    }

    newSchedule(datevalue: Date) {
        this.selectedDate = datevalue
        this.srv.getUserVisitCompare(this.selectedUser ? this.currentUser.userID : this.selectedUser, hf.handleDate(datevalue)).subscribe(rat => {
            this.userRate = rat.map(data => {
                return { key: data.VisType, y: data.VisCount == null ? 0 : data.VisCount }
            })
            this.data = this.userRate
            // [{
            //     values: this.userRate,      //values - represents the array of {x,y} data points
            //     key: 'Visits Count', //key  - the name of the series.
            //     color: '#ff7f0e'  //color - optional: choose your own line color.
            // }]
        });
    }
    newUser() {
        this.srv.getUserVisitCompare(this.selectedUser, hf.handleDate(this.selectedDate)).subscribe(rat => {
            this.userRate = rat.map(data => {
                return { key: data.VisType, y: data.VisCount == null ? 0 : data.VisCount }
            })
            this.data = this.userRate
        });
    }
    goBack() {
        this.location.back()
    }
    printReport() {
        window.print()
    }
}
