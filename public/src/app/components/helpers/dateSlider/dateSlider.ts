import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'date-slider',
    templateUrl: './dateSlider.html',
    styles: [` h2 { display: inline; }
    `]
})
export class DateSliderComponent implements OnInit {
    constructor() { }
    @Output() dateChanged = new EventEmitter()
    MonthName: string
    Year: number
    curDate: Date

    months = [
        { val: '01', name: 'Jan' },
        { val: '02', name: 'Feb' },
        { val: '03', name: 'Mar' },
        { val: '04', name: 'Apr' },
        { val: '05', name: 'May' },
        { val: '06', name: 'Jun' },
        { val: '07', name: 'Jul' },
        { val: '08', name: 'Aug' },
        { val: '09', name: 'Sep' },
        { val: '10', name: 'Oct' },
        { val: '11', name: 'Nov' },
        { val: '12', name: 'Dec' }
    ];

    ngOnInit() {
        this.curDate = new Date()
        this.changeView()
    }
    getMonthName(): string {
        var month = this.curDate.getMonth()
        return this.months[month].name
    }
    previousMonth() {
        this.curDate = new Date(this.curDate.setMonth(this.curDate.getMonth() - 1))
        this.changeView()
    }
    nextMonth() {
        this.curDate = new Date(this.curDate.setMonth(this.curDate.getMonth() + 1))
        this.changeView()
    }
    changeView() {
        this.MonthName = this.getMonthName()
        this.Year = this.curDate.getFullYear()
        this.dateChanged.emit(this.curDate)
    }
}