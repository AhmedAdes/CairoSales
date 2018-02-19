import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'idirpt-home',
    templateUrl: './idirptHome.component.html',
    styleUrls: ['../../../Styles/PrintPortrait.css']
})
export class IDIReportHomeComponent implements OnInit {
    reports: Array<any> = [
         {
            header: 'Products Still In Production',
            link: '/home/idiReports/inProdctn'
        },
        {
            header: 'Finished Store Balance',
            link: '/home/idiReports/finBlnc'
        },
        {
            header: 'Quarantine Store Balance',
            link: '/home/idiReports/QBlnc'
        }
    ]

    constructor() { }
    ngOnInit() { }
}
