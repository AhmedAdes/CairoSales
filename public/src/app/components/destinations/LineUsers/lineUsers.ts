import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DestinationUser } from '../../../Models';
@Component({
    selector: 'dest-lineusers',
    template: `
    <div class="row form-group">
        <label for="SelectUser" class="control-label col-md-4 col-sm-4">{{line}} Sales Line</label>
         <div class="col-md-8 col-sm-8">
            <select class="form-control" name="SelectUser" [(ngModel)]="SelectedUser" (change)="SelectChanged()" #usr="ngModel">
                <option value="">Select a Medical Rep.</option>
                <option *ngFor="let i of dispUsers" [ngValue]="i.UserID">{{i.UserName}}</option>
            </select>
            <div class='error' *ngIf="usr.touched && !usr.valid">
                <div class="alert alert-danger" *ngIf="usr.hasError('required')">A Rep. is required.</div>
            </div>
        </div>
    </div>
    `
})
export class LineUsersComponent implements OnInit {
    @Input() UserList: DestinationUser[]
    @Input() line: string
    @Output() userSelected = new EventEmitter()
    dispUsers: DestinationUser[] = []
    SelectedUser: number

    constructor() { }

    ngOnInit() {
        this.dispUsers = this.UserList.filter(u => u.LineName == this.line)
        var SelectedUsers = this.dispUsers.filter(u => u.selected == true)
        if (SelectedUsers.length > 0) { this.SelectedUser = SelectedUsers[0].UserID }
    }

    SelectChanged() {
        this.userSelected.emit({userID: this.SelectedUser, LineID: this.line})
    }
}