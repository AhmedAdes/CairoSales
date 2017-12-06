import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { CurrentUser, rptFinishedBalance } from '../../../Models';
import { IDIReportsService, AuthenticationService } from '../../../services';
import * as hf from '../../helpers/helper.functions'
// import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
    selector: 'app-idirpt-finblnc',
    templateUrl: './finishedBalance.html',
    styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class IDIFinishedBalanceComponent implements OnInit {
    currentUser: CurrentUser = this.auth.getUser()
    finBlncRpt: rptFinishedBalance[] = []
    companies: any[] = []
    compID = 'null'
    today = new Date()
    // fromDate: string = hf.handleDate(this.today);
    // toDate: string = hf.handleDate(this.today);
    // lineID: number = null
    reportHeader: string
    orderbyString = ''
    orderbyClass = 'glyphicon glyphicon-sort'

    constructor(private srv: IDIReportsService,
        private auth: AuthenticationService, private location: Location) { }

        ngOnInit() {
        this.today = new Date()
        this.ViewReport()
    }
    ViewReport() {
        this.srv.getFinishedBalance().subscribe(ret => {
            this.finBlncRpt = ret
            this.reportHeader = `Finished Store Balance - in ${hf.handleDate(this.today)}`
        }, err => hf.handleError(err))
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
