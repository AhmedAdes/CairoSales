import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { WeekPlanService, DestinationService, UserService, LineService, AuthenticationService } from '../../services';
import { CurrentUser, User, Destination, WeekPlan, WeekPlanDest } from '../../Models';
import { minDate, maxDate } from '../../pipes/validators';
import * as hf from '../helpers/helper.functions'

@Component({
    selector: 'app-weekplan',
    templateUrl: 'weekPlan.component.html'
})

export class WeekPlanComponent implements OnInit {
    constructor(private auth: AuthenticationService, private srvDst: DestinationService,
        private srvUsr: UserService, private srvPln: WeekPlanService, fb: FormBuilder) {
        this.inFrm = fb.group({
            'weekNo': [null],
            'monthNo': [null],
            'strtDate': [this.cnvStartDate, Validators.required]
        })
        this.inFrm.controls['strtDate'].valueChanges.subscribe(val => this.onDateChanged(val))
    }
    currentUser: CurrentUser = this.auth.getUser();
    showTable: boolean;
    Formstate: string;
    headerText: string;
    errorMessage: string;
    selUser: any;
    collection: WeekPlan[] = [];
    srchObj: WeekPlan = new WeekPlan();
    model: WeekPlan = new WeekPlan();
    Allusers: User[] = [];
    users: any[] = [];
    destinations: Destination[] = [];
    thisday: string;
    orderbyString: string = "";
    orderbyClass: string = "glyphicon glyphicon-sort";
    inFrm: FormGroup;
    cnvStartDate: string;
    lastDate: string
    plnDest: WeekPlanDest[] = []
    selDest: WeekPlanDest[] = []
    loadingDetails: boolean = false

    ngOnInit() {
        this.srvUsr.getuser().subscribe(cols => {
            this.Allusers = cols;
            var unique = this.Allusers.map(function (obj) { return { UserID: obj.UserID, UserName: obj.UserName, LineName: obj.LineName } });
            this.users = unique.filter((x, i, a) => a.findIndex(U => U.UserID == x.UserID) == i)
            if (this.currentUser.jobClass == 3) {
                this.selUser = this.users.filter(u => u.UserID === this.currentUser.userID)[0]
                this.srvPln.getUserPlan(this.selUser.UserID).subscribe(cols => {
                    this.collection = cols
                    this.TableBack()
                })
            }
            else {
                this.TableBack();
            }
        })
    }
    CreateNew() {
        this.model = new WeekPlan();
        var today = new Date();
        this.cnvStartDate = hf.handleDate(today);
        // this.updateValidators('all')
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Plan';
        this.ToggleAllDest(false);
        this.srvPln.getLastWeekPlanDate(this.currentUser.userID).subscribe(dt => {
            this.lastDate = hf.handleDate(new Date(dt[0].lastDate))
            this.cnvStartDate = this.lastDate;
        })
        // this.selDest.forEach(drg => drg.Selected = false)
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
        this.srvPln.getPlan(id).subscribe(ret => {
            this.model = ret[0];
            this.loadingDetails = true
            this.cnvStartDate = this.model.StartDate.toString().split('T')[0];
            // this.updateValidators('all')
            // this.onDateChanged(this.inFrm.controls['strtDate'].value)
            this.inFrm.controls['strtDate'].disable()
            this.srvPln.getPlanDetails(id, this.currentUser.userID, this.model.WeekNo, this.cnvStartDate).subscribe(det => {
                this.plnDest = det;
                this.showTable = false;
                this.Formstate = state;
                this.headerText = state == 'Details' ? 'Week Plan ' + state : state + ' Week Plan';
            }, err => this.errorMessage = err.message);
        }, err => this.errorMessage = err.message)
        this.loadingDetails = false
    }
    onDateChanged(value) {
        if (this.loadingDetails || !value) { return }
        this.model.MonthNo = new Date(value).getMonth() + 1
        this.model.WeekNo = Math.ceil(new Date(value).getDate() / 7)
        this.srvPln.getWeekPlanDest(this.currentUser.userID, this.model.WeekNo, value).subscribe(dst => {
            this.plnDest = dst;
        })
    }
    HandleForm(event) {
        event.preventDefault();
        this.model.StartDate = new Date(this.cnvStartDate)
        this.model.UserID = this.currentUser.userID
        var selDests = this.plnDest.filter(c => c.Selected == true)
        if (selDests.length <= 0 && this.Formstate != "Delete") {
            this.errorMessage = "Please Select Any of the Products"; return;
        }
        switch (this.Formstate) {
            case 'Create':
                this.srvPln.InsertPlan(this.model, selDests).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    } else {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.srvPln.UpdatePlan(this.model.WplanID, this.model, selDests).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.srvPln.DeletePlan(this.model.WplanID).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    }
    UserChanged($user) {
        this.selUser = this.users.filter(u => u.UserName == $user.target.value.split('@')[0].trim())[0]
        this.srvPln.getUserPlan(this.selUser.UserID).subscribe(cols => this.collection = cols)
    }
    TableBack() {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Week Plan';
        this.errorMessage = null;
        this.inFrm.controls['strtDate'].enable()        
        this.loadingDetails = false
    }
    ToggleAllDest(value) {
        this.plnDest.forEach(dst => dst.Selected = value)
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