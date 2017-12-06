import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { VacationService, UserService, AuthenticationService } from '../../services';
import { Vacation, VacTypes, User, CurrentUser } from '../../Models';
import { alreadyExist, minDate, maxDate, planDateInRange } from '../../pipes/validators'
import * as hf from '../helpers/helper.functions'

@Component({
    selector: 'app-vac',
    templateUrl: './vac.component.html'
})
export class VacationComponent implements OnInit {
    inFrm: FormGroup;
    currentUser: CurrentUser = this.auth.getUser();
    collection: Vacation[] = [];
    userList: User[] = [];
    vacTypeList = VacTypes;
    srchObj: Vacation = new Vacation();
    model: Vacation;
    cnvToDate: string;
    cnvFromDate: string;
    showTable: boolean;
    Formstate: string;
    headerText: string;
    errorMessage: string;
    orderbyString = '';
    orderbyClass = 'glyphicon glyphicon-sort';
    spinner = true

    constructor(private srvVac: VacationService, private srvUser: UserService,
        private auth: AuthenticationService, fb: FormBuilder) {
        this.inFrm = fb.group({
            'fromDate': [this.cnvFromDate, Validators.required],
            'toDate': [this.cnvToDate, Validators.required],
            'UserID': [null, Validators.required],
            'VacType': [null, Validators.required],
            'Notes': [null]
        })
        this.inFrm.controls['fromDate'].valueChanges.subscribe(val => this.FromDateChange(val))
    }

    ngOnInit() {
        this.srvUser.getuser().subscribe(usr => {
            this.userList = usr;
            if (this.currentUser.jobClass > 1 && this.currentUser.jobClass < 99) {
                this.srvVac.getUserVacations(this.currentUser.userID).subscribe(cols => {
                    this.collection = cols;
                    this.TableBack();
                })
            } else {
                this.srvVac.getVacation().subscribe(cols => {
                    this.collection = cols;
                    this.TableBack();
                })
            }
        }, err => hf.handleError(err))
    }

    CreateNew() {
        this.model = new Vacation();
        const today = new Date();
        this.cnvFromDate = hf.handleDate(today);
        this.cnvToDate = hf.handleDate(today);
        if (this.currentUser.jobClass > 1 && this.currentUser.jobClass < 99) {
            this.model.UserID = this.currentUser.userID
            this.inFrm.controls['UserID'].disable()
        } else {
            this.inFrm.controls['UserID'].enable()
        }
        this.updateValidators('to')
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Vacation';
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
        this.srvVac.getVacation(id).subscribe(ret => {
            this.model = ret[0];
            this.cnvFromDate = this.model.FromDate.toString().split('T')[0];
            this.cnvToDate = this.model.ToDate.toString().split('T')[0];
            this.inFrm.controls['UserID'].disable()
            this.updateValidators('to')
            this.FromDateChange(this.inFrm.controls['fromDate'].value)

            this.showTable = false;
            this.Formstate = state;
            this.headerText = state == 'Details' ? 'Vacation ' + state : state + ' Vacation';
        }, err => hf.handleError(err))
    }
    TableBack() {
        this.showTable = true;
        this.spinner = false;
        this.Formstate = null;
        this.inFrm.reset();
        this.headerText = 'User Vacations';
        this.errorMessage = null;
    }
    HandleForm(event) {
        event.preventDefault();
        this.model.FromDate = new Date(this.cnvFromDate);
        this.model.ToDate = new Date(this.cnvToDate);
        switch (this.Formstate) {
            case 'Create':
                this.srvVac.InsertVacation(this.model).subscribe(ret => {
                    if (ret.error) {
                        hf.handleError(ret.error)
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                }, err => hf.handleError(err));
                break;
            case 'Edit':
                this.srvVac.UpdateVacation(this.model.VacID, this.model).subscribe(ret => {
                    if (ret.error) {
                        hf.handleError(ret.error)
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                }, err => hf.handleError(err));
                break;
            case 'Delete':
                this.srvVac.DeleteVacation(this.model.VacID).subscribe(ret => {
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
    FromDateChange(value) {
        if (!value) {return};
        this.updateValidators('to')
    }
    updateValidators(all: string) {
        switch (all) {
            case 'all':
                this.inFrm.controls['fromDate'].setValidators(Validators.compose([Validators.required,
                  planDateInRange(this.collection, this.model.VacID, this.model.UserID)]));
                this.inFrm.controls['fromDate'].markAsTouched()
                this.inFrm.controls['fromDate'].updateValueAndValidity()
                this.inFrm.controls['toDate'].setValidators(Validators.compose([Validators.required,
                  planDateInRange(this.collection, this.model.VacID, this.model.UserID),
                minDate(this.inFrm.controls['fromDate'].value)]));
                this.inFrm.controls['toDate'].markAsTouched()
                this.inFrm.controls['toDate'].updateValueAndValidity()
                break;
            case 'to':
                this.inFrm.controls['toDate'].setValidators(Validators.compose([Validators.required,
                  minDate(this.inFrm.controls['fromDate'].value)]));
                this.inFrm.controls['toDate'].markAsTouched()
                this.inFrm.controls['toDate'].updateValueAndValidity()
                break;
            default:
                break;
        }
    }
}
