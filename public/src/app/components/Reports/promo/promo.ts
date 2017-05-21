import { Component, OnInit } from '@angular/core';
import { CurrentUser, Gifts, PromoTools, IMSData } from '../../../Models';
import { ReportsService, PromoToolsService, GiftService, IMSService, AuthenticationService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
// import { nvD3 } from 'ng2-nvd3'
import * as d3 from 'd3'
import * as d3Hierarchy from "d3-hierarchy";
// declare let d3, nv: any;

@Component({
    selector: 'rpt-promo',
    templateUrl: './promo.html',
    styleUrls: ['../../../Styles/PrintPortrait.css', './promo.css']
})
export class PromoReportComponent implements OnInit {
    constructor(private srv: ReportsService, private srvGft: GiftService, private srvProm: PromoToolsService,
        private auth: AuthenticationService, private srvIms: IMSService, private location: Location) { }
    currentUser: CurrentUser = this.auth.getUser()
    selectedGift: number
    gftList: Gifts[] = []
    imsList: IMSData[] = []
    today = new Date()
    fromDate: string = hf.handleDate(this.today);
    toDate: string = hf.handleDate(this.today);
    imsID: number = null
    options
    data
    original: PromoTools[] = []
    unique

    ngOnInit() {
        this.srvGft.getGift().subscribe(gft => {
            this.gftList = gft;
            this.srvIms.getIMS().subscribe(ims => this.imsList = ims)
        })
    }
    ViewReport() {
        this.srv.getPromo(hf.handleDate(new Date(this.fromDate)), hf.handleDate(new Date(this.toDate)), this.imsID).subscribe(ret => {
            this.original = ret
            this.unique = ret.map(obj => { return obj.GiftName; });
            this.unique = this.unique.filter((x, i, a) => a.indexOf(x) == i)
            this.data = this.unique.map(gft => {
                return {
                    name: gft, children: ret
                        .filter(r => r.GiftName == gft)
                        .map(f => {
                            return { name: f.ToolName, size: f.Qty == null ? 0 : f.Qty }
                        })
                }
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