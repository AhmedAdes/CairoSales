import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrentUser, rptMedicalRep, SalesLine } from '../../../Models';
import { ReportsService, LineService, AuthenticationService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
import { BaseChartDirective, Color } from 'ng2-charts';

@Component({
  selector: 'rpt-medrep',
  templateUrl: './medRepReport.html',
  styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class MedicalRepReportComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser()
  medicalRep: rptMedicalRep[] = []
  salesLines: SalesLine[] = []
  today = new Date()
  fromDate: string = hf.handleDate(this.today);
  toDate: string = hf.handleDate(this.today);
  lineID: number = null
  sumPlanned
  sumCommited
  sumCustomers
  sumLogins
  reportHeader: string
  orderbyString = ''
  orderbyClass = 'glyphicon glyphicon-sort'

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
    this.srvln.getLine().subscribe(spc => {
      this.salesLines = spc;
    })
  }

  ViewReport() {
    this.srv.getMedicalRepReport(hf.handleDate(new Date(this.fromDate)),
      hf.handleDate(new Date(this.toDate)), this.lineID).subscribe(ret => {
        this.medicalRep = ret
        this.reportHeader = `Medical Rep. Summary Report From ${this.fromDate} To ${this.toDate}`
        this.sumPlanned = this.medicalRep.reduce((a, b) => a + b.Planned, 0)
        this.sumCommited = this.medicalRep.reduce((a, b) => a + b.CommittedVisits, 0)
        this.sumCustomers = this.medicalRep.reduce((a, b) => a + b.Customers, 0)
        this.sumLogins = this.medicalRep.reduce((a, b) => a + b.Logins, 0)
        this.srv.getSalesLineVisitRate(hf.handleDate(new Date(this.fromDate)),
          hf.handleDate(new Date(this.toDate)), this.lineID).subscribe(vis => {
            this.chartData = [{
              data: vis[0].map(da => { return da.visCount == null ? 0 : da.visCount }),
              label: 'Visit Count'
            }]
            this.lineChartLabels = vis[0].map(data => { return data.DayDate.split('T')[0] })
            this.forceChartRefresh()
          })
      })
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
    if (this.orderbyString.indexOf(column) == -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes';
      this.orderbyString = '+' + column;
    } else if (this.orderbyString.indexOf('-' + column) == -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
      this.orderbyString = '-' + column;
    } else {
      this.orderbyClass = 'glyphicon glyphicon-sort';
      this.orderbyString = '';
    }
  }
}
