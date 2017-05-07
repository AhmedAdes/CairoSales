import { Component, OnInit } from '@angular/core';
import { LineService, UserService, AuthenticationService } from '../../../services';
import { SalesLine, CurrentUser } from '../../../Models';

@Component({
    selector: 'salesline',
    templateUrl: './lines.component.html'
})
export class SalesLineComponent implements OnInit {
    currentUser: CurrentUser = this.auth.getUser();
    collection: SalesLine[] = [];
    searchLine: SalesLine = new SalesLine();
    model: SalesLine;
    showTable: boolean;
    Formstate: string;
    headerText: string;
    errorMessage: string;
    users: any[];
    orderbyString: string = "";
    orderbyClass: string = "glyphicon glyphicon-sort";

    constructor(public serv: LineService, private _userServ: UserService, private auth: AuthenticationService) { }

    ngOnInit() {
        this.serv.getLine().subscribe(cols => { if (cols.error) { this.errorMessage = cols.error.message } else { this.collection = cols } },
            err => { console.log(err); this.errorMessage = err.error.message; });
        this._userServ.getuser().subscribe(cols => this.users = cols, err => { console.log(err); this.errorMessage = err.error.message; });
        this.TableBack();
    }
    CreateNew() {
        this.model = new SalesLine();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Sales Line';
    }

    EditThis(id: number) {
        this.loadDetails(id, 'Edit');
    }
    ShowDetails(id: number) {
        this.loadDetails(id, 'Details');
    }
    Delete(id: number) {
        this.loadDetails(id, 'Delete');
    }
    loadDetails(id, state) {
        this.serv.getLine(id).subscribe(ret => {
            this.model = ret[0];
            this.showTable = false;
            this.Formstate = state;
            this.headerText = state == 'Details' ? 'Sales Line ' + state : state + ' Sales Line';
        }, err => this.errorMessage = err.message)
    }
    TableBack() {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Sales Lines';
        this.errorMessage = null;
    }
    HandleForm(event) {
        event.preventDefault();
        var newLine: SalesLine = this.model;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertLine(newLine).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateLine(newLine.SalesLineID, newLine).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteLine(newLine.SalesLineID).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
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
}
