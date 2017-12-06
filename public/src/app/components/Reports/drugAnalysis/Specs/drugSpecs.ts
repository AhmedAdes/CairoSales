import { Component, OnInit } from '@angular/core';
import { CurrentUser, rptdrugAnalysis, Drugs, MedSpec } from '../../../../Models';
import { ReportsService, DrugService, MedSpecService, AuthenticationService } from '../../../../services';
import { Location } from '@angular/common';
import * as hf from '../../../helpers/helper.functions'

@Component({
    selector: 'app-rpt-drugspecs',
    templateUrl: './drugSpecs.html',
    styleUrls: ['../../../../Styles/PrintPortrait.css']
})
export class DrugSpecsReportComponent implements OnInit {
    currentUser: CurrentUser = this.auth.getUser()
    drugList: Drugs[] = []
    collection: rptdrugAnalysis[] = []
    specList: MedSpec[] = []
    today = new Date()
    fromDate: string = hf.handleDate(this.today);
    toDate: string = hf.handleDate(this.today);
    drugID: number = null
    specID: number = null
    errorMessage: string
    orderbyString = ''
    orderbyClass = 'glyphicon glyphicon-sort'
    reportHeader = `Product Analysis
    (Customers Speciality In Period)`

    constructor(private srv: ReportsService, private srvDrg: DrugService, private srvSpec: MedSpecService,
        private auth: AuthenticationService, private location: Location) { }

    ngOnInit() {
        this.srvDrg.getDrug().subscribe(drg => {
            this.drugList = drg;
            this.srvSpec.getSpec().subscribe(rgn => this.specList = rgn)
        }, err => hf.handleError(err))
    }
    ViewReport() {
        this.srv.getdrugAnalysis(hf.handleDate(new Date(this.fromDate)), hf.handleDate(new Date(this.toDate)),
            this.drugID, 'Specs', this.specID == null ? null : this.specID.toString())
            .subscribe(ret => this.collection = ret, err => hf.handleError(err) )
    }
    goBack() {
        this.location.back()
    }
    printReport() {
        window.print()
    }

    SortTable(column: string) {
        if (this.orderbyString.indexOf(column) === -1) {
            this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes';
            this.orderbyString =  '+' + column;
        } else if (this.orderbyString.indexOf('-' + column) === -1) {
            this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
            this.orderbyString =  '-' + column;
        } else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString =  '';
        }
    }
}
