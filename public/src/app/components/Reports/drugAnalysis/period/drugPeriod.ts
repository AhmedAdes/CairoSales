import { Component, OnInit } from '@angular/core';
import { CurrentUser, rptdrugAnalysis, Drugs} from '../../../../Models';
import { ReportsService, DrugService, AuthenticationService } from '../../../../services';
import { Location } from '@angular/common';
import * as hf from '../../../helpers/helper.functions'

@Component({
    selector: 'rpt-drugPeriod',
    templateUrl: './drugPeriod.html',
    styleUrls: ['../../../../Styles/PrintPortrait.css']
})
export class DrugPeriodReportComponent implements OnInit {
    constructor(private srv: ReportsService, private srvDrg: DrugService, 
                private auth: AuthenticationService, private location: Location) { }
    currentUser: CurrentUser = this.auth.getUser()
    drugList: Drugs[] = []
    collection: rptdrugAnalysis[] = []
    today = new Date()
    fromDate: string = hf.handleDate(this.today);
    toDate: string = hf.handleDate(this.today);
    drugID: number = null
    orderbyString: string = "";
    orderbyClass: string = "glyphicon glyphicon-sort";
    reportHeader = "Product Analysis (Specifications)"

    ngOnInit() {
        this.srvDrg.getDrug().subscribe(drg => {
            this.drugList = drg;
        })
    }
    ViewReport() {
        this.srv.getdrugAnalysis(hf.handleDate(new Date(this.fromDate)), hf.handleDate(new Date(this.toDate)), this.drugID, 'all', 'all').subscribe(ret => {
            this.collection = ret
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