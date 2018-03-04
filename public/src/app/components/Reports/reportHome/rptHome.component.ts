import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpt-home',
  templateUrl: './rptHome.component.html',
  styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class ReportHomeComponent implements OnInit {
  constructor() { }
  reports: Array<any> = [
    {
      header: "Visit Analysis",
      heading: true
    },
    {
      header: "Medical Rep Summary",
      link: "/home/reports/medrep"
    },
    {
      header: "Medical Rep Weekly",
      link: "/home/reports/medrepWeek"
    },
    {
      header: "User Daily Visits",
      link: "/home/reports/visDaily"
    },
    {
      header: "User Visits Comparison",
      link: "/home/reports/visComp"
    },
    {
      header: "Specs / IMS Visits",
      link: "/home/reports/spec"
    },
    // {
    //     header: "Promotional Tools",
    //     link: "/home/reports/promo"
    // },
    // {
    //     header: "IMS Visits",
    //     link: "/home/reports/visIMS"
    // },
    {
      header: "Products Analysis",
      heading: true
    },
    {
      header: "Product Analysis In Period",
      link: "/home/reports/drgperiod"
    },
    {
      header: "Comments Analysis",
      link: "/home/reports/drgcomment"
    },
    {
      header: "Customer Analysis",
      link: "/home/reports/drgcust"
    },
    {
      header: "Customers Specification Analysis",
      link: "/home/reports/drgspec"
    },
    {
      header: "Promotional Tools Analysis",
      link: "/home/reports/drgpromo"
    },
    {
      header: "Customers Analysis",
      heading: true
    },
    {
      header: "Customer Analysis In Period",
      link: "/home/reports/custperiod"
    }
  ]
  ngOnInit() { }
}
