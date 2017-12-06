import { Component, OnInit } from '@angular/core';
import { LineService, UserService, AuthenticationService } from '../../../services';
import { SalesLine, CurrentUser } from '../../../Models';
import * as hf from '../../helpers/helper.functions';

@Component({
    selector: 'app-bsc-salesline',
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
    orderbyString = '';
    orderbyClass = 'glyphicon glyphicon-sort';

    constructor(public serv: LineService, private _userServ: UserService, private auth: AuthenticationService) { }

    ngOnInit() {
        this.serv.getLine().subscribe(cols => {
          if (cols.error) { hf.handleError(cols.error) } else { this.collection = cols }
        }, err => hf.handleError(err));
        this._userServ.getuser().subscribe(cols => this.users = cols, err => hf.handleError(err));
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
        }, err => hf.handleError(err))
    }
    TableBack() {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Sales Lines';
        this.errorMessage = null;
    }
    HandleForm(event) {
        event.preventDefault();
        const newLine: SalesLine = this.model;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertLine(newLine).subscribe(ret => {
                    if (ret.error) {
                        hf.handleError(ret.error)
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                }, err => hf.handleError(err));
                break;
            case 'Edit':
                this.serv.UpdateLine(newLine.SalesLineID, newLine).subscribe(ret => {
                    if (ret.error) {
                        hf.handleError(ret.error)
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                }, err => hf.handleError(err));
                break;
            case 'Delete':
                this.serv.DeleteLine(newLine.SalesLineID).subscribe(ret => {
                    if (ret.error) {
                        hf.handleError(ret.error)
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                }, err => hf.handleError(err));
                break;
            default:
                break;
        }
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
