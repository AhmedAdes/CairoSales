import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Visits, CurrentUser } from '../../../Models';

@Component({
    selector: 'visit-uservisits',
    templateUrl: './UserVisits.html',
    styles: [`
        .card-title a {
            text-decoration: none;
        }
    `]
})
export class UserVisitsComponent implements OnInit, OnChanges {
    constructor() { }

    @Input() collection: Visits[] = [];
    @Input() UserID: number;
    @Input() currentUser: CurrentUser;
    @Output() DeleteEvent = new EventEmitter();
    @Output() DetailEvent = new EventEmitter();
    @Output() EditEvent = new EventEmitter();
    userVisits: Visits[] = [];
    srchObj: Visits = new Visits();
    orderbyString: string = "";
    orderbyClass: string = "glyphicon glyphicon-sort";
    userName: string;
    appliedClass: boolean = true

    ngOnInit() {
        this.userVisits = this.collection.filter(obj => obj.UserID == this.UserID)
        if (this.userVisits) { this.userName = this.userVisits[0].UserName; }
    }
    ngOnChanges(changes: SimpleChanges) {
        this.ngOnInit()
    }
    changeArrowClass() {
        // this.appliedClass = document.getElementById('toggle' + this.UserID).attributes.getNamedItem('aria-expanded').value === 'true'
        this.appliedClass = !this.appliedClass
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

    onDetail(id) {
        this.DetailEvent.emit(id);
    }
    onDelete(id) {
        this.DeleteEvent.emit(id);
    }
    onEdit(id) {
        this.EditEvent.emit(id);
    }
}