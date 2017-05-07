import { Component, OnInit } from '@angular/core';
import { CurrentUser, rptdrugAnalysis, Drugs, PromoTools, Gifts } from '../../../../Models';
import { ReportsService, DrugService, PromoToolsService, GiftService, AuthenticationService } from '../../../../services';
import { Location } from '@angular/common';
import * as hf from '../../../helpers/helper.functions'

@Component({
    selector: 'rpt-drugPromo',
    templateUrl: './drugPromo.html',
    styleUrls: ['../../../../Styles/PrintPortrait.css']
})
export class DrugPromoReportComponent implements OnInit {
    constructor(private srv: ReportsService, private srvDrg: DrugService, private srvPromo: PromoToolsService, private srvGft: GiftService,
        private auth: AuthenticationService, private location: Location) { }
    currentUser: CurrentUser = this.auth.getUser()
    drugList: Drugs[] = []
    collection: rptdrugAnalysis[] = []
    imsList: PromoTools[] = []
    today = new Date()
    fromDate: string = hf.handleDate(this.today);
    toDate: string = hf.handleDate(this.today);
    drugID: number = null
    imsID: number = null
    orderbyString: string = "";
    orderbyClass: string = "glyphicon glyphicon-sort";
    reportHeader = "Product Analysis (Comments In Period)"

    ngOnInit() {
        this.srvDrg.getDrug().subscribe(drg => {
            this.drugList = drg;
            this.srvPromo.getPromoTools().subscribe(ims => this.imsList = ims)
        })
    }
    ViewReport() {
        this.srv.getdrugAnalysis(hf.handleDate(new Date(this.fromDate)), hf.handleDate(new Date(this.toDate)),
            this.drugID, 'Comments', this.imsID == null ? null : this.imsID.toString())
            .subscribe(ret => {
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