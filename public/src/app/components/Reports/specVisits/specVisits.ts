import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrentUser, rptSpecVisits, MedSpec, IMSData } from '../../../Models';
import { ReportsService, MedSpecService, IMSService, AuthenticationService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
    selector: 'rpt-spec',
    templateUrl: './specVisits.html',
    styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class SpecVisitsComponent implements OnInit {
    constructor(private srv: ReportsService, private srvSpec: MedSpecService,
        private auth: AuthenticationService, private srvIms: IMSService, private location: Location) { }
    currentUser: CurrentUser = this.auth.getUser()
    selectedSpec: number
    specList: MedSpec[] = []
    imsList: IMSData[] = []
    today = new Date()
    fromDate: string = hf.handleDate(this.today);
    toDate: string = hf.handleDate(this.today);
    imsID: number = null

    pieChartLabels: string[] = [];
    pieChartData: number[] = [];
    pieChartType: string = 'pie';
    colorsEmpty: Array<Color> = []
    pieChartOptions: any = {
        responsive: true,
        maintainAspectRatio: true
    };
    @ViewChild(BaseChartDirective) _chart;

    ngOnInit() {
        this.srvSpec.getSpec().subscribe(spc => {
            this.specList = spc;
            this.srvIms.getIMS().subscribe(ims => this.imsList = ims)
        })
    }

    ViewReport() {
        this.srv.getSpecVisits(this.selectedSpec, hf.handleDate(new Date(this.fromDate)), hf.handleDate(new Date(this.toDate)), this.imsID).subscribe(ret => {
            if (ret.length > 0) {
                this.pieChartLabels = ret.map(dat => { return dat.IMS == null ? 'N/A' : dat.IMS })
                this.pieChartData = ret.map(dat => { return dat.VisCount == null ? 0 : dat.VisCount })
            } else {
                this.pieChartLabels = ['N/A']
                this.pieChartData = [0]
            }
            this.forceChartRefresh()
        })
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