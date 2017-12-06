import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrentUser, rptMedRepWeekly, SalesLine } from '../../../Models';
import { ReportsService, LineService, AuthenticationService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
  selector: 'app-rpt-medrep-weekly',
  templateUrl: './medRepWeekly.html',
  styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class MedRepWeeklyReportComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser()
  medicalRep: rptMedRepWeekly[] = []
  salesLines: SalesLine[] = []
  today = new Date()
  fromDate: string = hf.handleDate(this.today);
  toDate: string = hf.handleDate(this.today);
  lineID: number = null
  sumD1; sumD2; sumD3; sumD4; sumD5; sumD6; sumD7
  reportHeader: string
  orderbyString =  ''
  orderbyClass = 'glyphicon glyphicon-sort'
  errorMessage: string;

  chartData = [{ data: [], label: '' }];
  lineChartLabels: Array<any> = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: true
  };
  colorsEmpty: Array<Color> = []
  @ViewChild(BaseChartDirective) _chart;

  constructor(private srv: ReportsService, private srvln: LineService,
    private auth: AuthenticationService, private location: Location) { }

  ngOnInit() {
    this.srvln.getLine().subscribe(spc => this.salesLines = spc, err => hf.handleError(err))
  }

  ViewReport() {
    this.srv.getMedicalRepWeeklyReport(hf.handleDate(new Date(this.fromDate)),
      hf.handleDate(new Date(this.toDate)),
      this.lineID).subscribe(ret => {
        if (ret.error) { hf.handleError(ret.error); return; }
        this.medicalRep = ret
        this.reportHeader = `Medical Rep. Weekly Summary Report From ${this.fromDate} To ${this.toDate}`
        this.sumD1 = this.medicalRep.reduce((a, b) => a + b.Day1, 0)
        this.sumD2 = this.medicalRep.reduce((a, b) => a + b.Day2, 0)
        this.sumD3 = this.medicalRep.reduce((a, b) => a + b.Day3, 0)
        this.sumD4 = this.medicalRep.reduce((a, b) => a + b.Day4, 0)
        this.sumD5 = this.medicalRep.reduce((a, b) => a + b.Day5, 0)
        this.sumD6 = this.medicalRep.reduce((a, b) => a + b.Day6, 0)
        this.sumD7 = this.medicalRep.reduce((a, b) => a + b.Day7, 0)
        this.srv.getSalesLineVisitRate(hf.handleDate(new Date(this.fromDate)),
          hf.handleDate(new Date(this.toDate)),
          this.lineID).subscribe(vis => {
            if (vis.error) { hf.handleError(vis.error); return; }
            this.chartData = [{
              data: vis[0].map(da => { return da.visCount == null ? 0 : da.visCount }),
              label: 'Visit Count'
            }]
            this.lineChartLabels = vis[0].map(data => { return data.DayDate.split('T')[0] })
            this.forceChartRefresh()
            this.errorMessage = null
          }, err => hf.handleError(err))
      }, err => hf.handleError(err))
  }
  goBack() {
    this.location.back()
  }
  printReport() {
    window.print()
  }
  forceChartRefresh() {
    setTimeout(() => {
      this._chart.refresh();
    }, 10);
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
