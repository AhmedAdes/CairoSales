import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { CurrentUser, rptQuarantineBalance } from '../../../Models';
import { IDIReportsService, AuthenticationService } from '../../../services';
import * as hf from '../../helpers/helper.functions'
// import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
    selector: 'idirpt-QBlnc',
    templateUrl: './QrntinBalance.html',
    styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class IDIQuarantineBalanceComponent implements OnInit {
    constructor(private srv: IDIReportsService,
        private auth: AuthenticationService, private location: Location) { }
    currentUser: CurrentUser = this.auth.getUser()
    QBlncRpt: rptQuarantineBalance[] = []
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
        this.ViewReport()
    }
    ViewReport() {
        this.srv.getQuarantineBalance().subscribe(ret => {
            this.QBlncRpt = ret
            this.reportHeader = `Quarantine Store Balance - in ${hf.handleDate(this.today)}`
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