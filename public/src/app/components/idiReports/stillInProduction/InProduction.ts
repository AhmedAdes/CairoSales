import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrentUser, rptIDIStillinProd } from '../../../Models';
import { IDIReportsService, AuthenticationService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
// import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
    selector: 'app-idirpt-inprod',
    templateUrl: './InProduction.html',
    styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class IDIStillInProductionComponent implements OnInit {currentUser: CurrentUser = this.auth.getUser()
    prodRpt: rptIDIStillinProd[] = []
    companies: any[] = []
    compID = 'null'
    today = new Date()
    // fromDate: string = hf.handleDate(this.today);
    // toDate: string = hf.handleDate(this.today);
    // lineID: number = null
    reportHeader: string
    orderbyString =  ''
    orderbyClass = 'glyphicon glyphicon-sort'

    constructor(private srv: IDIReportsService,
        private auth: AuthenticationService, private location: Location) { }

    ngOnInit() {
        this.today = new Date()
        this.ViewReport()
    }

    ViewReport() {
        if (this.compID != 'null') {
            this.srv.getStillInProduction(this.compID).subscribe(ret => {
                this.prodRpt = ret
                this.reportHeader = `Products Still In Production - in ${hf.handleDate(this.today)}`
            }, err => hf.handleError(err))
        } else {
            this.srv.getStillInProduction().subscribe(ret => {
                this.prodRpt = ret
                this.reportHeader = `Products Still In Production - in ${hf.handleDate(this.today)}`
                const unique = this.prodRpt.map(function (obj) { return { CompanyCode: obj.CompanyCode, Company: obj.Company } });
                this.companies = unique.filter((x, i, a) => a.findIndex(U => U.CompanyCode === x.CompanyCode) === i)
            }, err => hf.handleError(err))
        }
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
