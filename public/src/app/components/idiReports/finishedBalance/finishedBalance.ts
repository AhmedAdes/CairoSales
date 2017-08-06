import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { CurrentUser, rptFinishedBalance } from '../../../Models';
import { IDIReportsService, AuthenticationService } from '../../../services';
import * as hf from '../../helpers/helper.functions'
// import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
    selector: 'idirpt-finBlnc',
    templateUrl: './finishedBalance.html',
    styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class IDIFinishedBalanceComponent implements OnInit {
    constructor(private srv: IDIReportsService,
        private auth: AuthenticationService, private location: Location) { }
    currentUser: CurrentUser = this.auth.getUser()
    finBlncRpt: rptFinishedBalance[] = []
    companies: any[] = []
    compID: string = "null"
    today = new Date()
    // fromDate: string = hf.handleDate(this.today);
    // toDate: string = hf.handleDate(this.today);
    // lineID: number = null
    reportHeader: string
    orderbyString: string = ""
    orderbyClass: string = "glyphicon glyphicon-sort"
    ngOnInit() {
        this.today = new Date()
        this.ViewReport()
    }
    ViewReport() {
        this.srv.getFinishedBalance().subscribe(ret => {
            this.finBlncRpt = ret
            this.reportHeader = `Finished Store Balance - in ${hf.handleDate(this.today)}`
        })
    }
    goBack() {
        this.location.back()
    }
    printReport() {
        window.print()
    }

    SortTable(column: string) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        } else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        } else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    }
}