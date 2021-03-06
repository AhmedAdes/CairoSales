import { Component, OnInit } from '@angular/core';
import { CurrentUser, rptdrugAnalysis, Drugs, Destination, Region } from '../../../../Models';
import { ReportsService, DrugService, DestinationService, RegionService, AuthenticationService } from '../../../../services';
import { Location } from '@angular/common';
import * as hf from '../../../helpers/helper.functions'

@Component({
    selector: 'app-rpt-drgcust',
    templateUrl: './drugCustomer.html',
    styleUrls: ['../../../../Styles/PrintPortrait.css']
})
export class DrugCustomerReportComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser()
    drugList: Drugs[] = []
    collection: rptdrugAnalysis[] = []
    destList: Destination[] = []
    regionList: Region[] = []
    today = new Date()
    fromDate: string = hf.handleDate(this.today);
    toDate: string = hf.handleDate(this.today);
    drugID: number = null
    destID: number = null
    regionID: number = null
    errorMessage: string
    orderbyString = ''
    orderbyClass = 'glyphicon glyphicon-sort'
    reportHeader = 'Product Analysis (Customers In Period)'

    constructor(private srv: ReportsService, private srvDrg: DrugService, private srvDest: DestinationService,
        private srvRgn: RegionService, private auth: AuthenticationService, private location: Location) { }

    ngOnInit() {
        this.srvDrg.getDrug().subscribe(drg => {
            this.drugList = drg;
            this.srvRgn.getRegion().subscribe(rgn => this.regionList = rgn )
        }, err => hf.handleError(err))
    }
    ViewReport() {
        this.srv.getdrugAnalysis(hf.handleDate(new Date(this.fromDate)), hf.handleDate(new Date(this.toDate)),
            this.drugID, 'Dest', this.destID == null ? null : this.destID.toString())
            .subscribe(ret => this.collection = ret, err => hf.handleError(err))
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
    onRegChange(newobj) {
        if (newobj.target.value) {
            const region = newobj.target.value.split(':')[1].trim();
            this.srvDest.getApprovedRegionDestinations(region).subscribe(dst => {
                if (dst.error) {
                  hf.handleError(dst.error)
                } else {
                    this.destList = dst;
                }
            }, err => hf.handleError(err));
        }
    }
}
