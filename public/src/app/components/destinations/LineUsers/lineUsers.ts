import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DestinationUser } from '../../../Models';
@Component({
    selector: 'dest-lineusers',
    template: `
    <div class="row form-group">
        <label for="SelectUser" class="control-label col-md-3 col-sm-4">{{line}} Sales Line</label>
         <div class="col-md-9 col-sm-8">
            <select class="form-control" name="SelectUser" [(ngModel)]="SelectedUser"
                (change)="line != 'All' && SelectChanged()" #usr="ngModel" [disabled]="disable">
                <option value="">Select a Medical Rep.</option>
                <option *ngFor="let i of dispUsers" [ngValue]="i.UserID">{{i.UserName}}</option>
            </select>
            <div class='error' *ngIf="usr.touched && !usr.valid">
                <div class="alert alert-danger" *ngIf="usr.hasError('required')">A Rep. is required.</div>
            </div>
        </div>
        <button type="button" class="col-md-offset-2 btn btn-primary" *ngIf="line == 'All' && !disable"
         (click)="SelectChanged()">Add User</button>
    </div>
    `
})
export class LineUsersComponent implements OnInit {
    @Input() UserList: DestinationUser[]
    @Input() line: string
    @Input() disable: boolean
    @Output() userSelected = new EventEmitter()
    dispUsers: DestinationUser[] = []
    SelectedUser: number

    constructor() { }

    ngOnInit() {
        this.dispUsers = this.line == 'All' ? this.UserList : this.UserList.filter(u => u.LineName == this.line)
        const SelectedUsers = this.dispUsers.filter(u => u.selected == true)
        if (SelectedUsers.length > 0) { this.SelectedUser = SelectedUsers[0].UserID }
    }

    SelectChanged() {
        this.userSelected.emit({userID: this.SelectedUser, LineID: this.line})
    }
}
