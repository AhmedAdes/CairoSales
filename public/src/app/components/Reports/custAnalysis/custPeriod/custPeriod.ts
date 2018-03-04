import { Component, OnInit } from '@angular/core';
import { CurrentUser, rptdrugAnalysis, Destination, Region } from '../../../../Models';
import { ReportsService, DestinationService, RegionService, AuthenticationService } from '../../../../services';
import { Location } from '@angular/common';
import * as hf from '../../../helpers/helper.functions'

@Component({
  selector: 'app-rpt-custPrd',
  templateUrl: './custPeriod.html',
  styleUrls: ['../../../../Styles/PrintPortrait.css']
})
export class CustomerPeriodReportComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser()
  collection: rptdrugAnalysis[] = []
  destList: Destination[] = []
  regionList: Region[] = []
  today = new Date()
  fromDate: string = hf.handleDate(this.today);
  toDate: string = hf.handleDate(this.today);
  destID: number = null
  regionID: number = null
  spinner = true;
  errorMessage: string
  orderbyString = ''
  orderbyClass = 'glyphicon glyphicon-sort'
  reportHeader = 'Customer Visits Report In Period'

  constructor(private srv: ReportsService, private srvDest: DestinationService,
    private srvRgn: RegionService, private auth: AuthenticationService, private location: Location) { }

  ngOnInit() {
    this.srvRgn.getRegion().subscribe(rgn => {
      this.regionList = rgn;
      this.spinner = false
    }, err => hf.handleError(err))
  }
  ViewReport() {
    this.spinner = true
    this.srv.getCustPeriodAnalysis(hf.handleDate(new Date(this.fromDate)), hf.handleDate(new Date(this.toDate)),
      this.destID == null ? null : this.destID)
      .subscribe(ret => {
        this.collection = ret[0];
        this.spinner = false
        console.log(ret)
      }, err => {
        hf.handleError(err);
        this.spinner = false
      })
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
      this.orderbyString = '+' + column;
    } else if (this.orderbyString.indexOf('-' + column) === -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
      this.orderbyString = '-' + column;
    } else {
      this.orderbyClass = 'glyphicon glyphicon-sort';
      this.orderbyString = '';
    }
  }
  onRegChange(newobj) {
    if (newobj.target.value) {
      this.spinner = true
      const region = newobj.target.value.split(':')[1].trim();
      this.srvDest.getApprovedRegionDestinations(region).subscribe(dst => {
        if (dst.error) {
          hf.handleError(dst.error)
          this.spinner = false
        } else {
          this.destList = dst;
          this.spinner = false
        }
      }, err => {
        hf.handleError(err)
        this.spinner = false
      })
    }
  }
}
