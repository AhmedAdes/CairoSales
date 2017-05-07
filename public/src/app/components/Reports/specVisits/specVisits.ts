import { Component, OnInit } from '@angular/core';
import { CurrentUser, rptSpecVisits, MedSpec, IMSData } from '../../../Models';
import { ReportsService, MedSpecService, IMSService, AuthenticationService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
// import { nvD3 } from 'ng2-nvd3'
// declare let d3, nv: any;

@Component({
    selector: 'rpt-spec',
    templateUrl: './specVisits.html'
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
    toDate: string 
    imsID: number = null
    options
    data

    ngOnInit() {
        this.srvSpec.getSpec().subscribe(spc => {
            this.specList = spc;
            this.srvIms.getIMS().subscribe(ims => this.imsList = ims)
        })
    }
    ViewReport() {
        this.srv.getSpecVisits(this.selectedSpec, hf.handleDate(new Date(this.fromDate)), hf.handleDate(new Date(this.toDate)), this.imsID).subscribe(ret => {
            this.data = ret.map(dat => {
                return { key: dat.SpecName, y: dat.VisCount == null ? 0 : dat.VisCount }
            })
        })
    }
    goBack() {
        this.location.back()
    }
    printReport() {
        window.print()
    }
}