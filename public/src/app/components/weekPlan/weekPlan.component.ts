import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { WeekPlanService, DestinationService, UserService, LineService, AuthenticationService } from '../../services';
import { CurrentUser, User, Destination, WeekPlan, WeekPlanDest } from '../../Models';
import { minDate, maxDate } from '../../pipes/validators';

@Component({
    selector: 'app-weekplan',
    templateUrl: 'weekPlan.component.html'
})

export class WeekPlanComponent implements OnInit {
    constructor(private auth: AuthenticationService, private srvDst: DestinationService,
        private srvUsr: UserService, private srvPln: WeekPlanService, fb: FormBuilder) {
        this.inFrm = fb.group({
            'weekNo': [null, Validators.required],
            'monthNo': [null],
            'strtDate': [this.cnvStartDate, Validators.required]
        })
    }
    currentUser: CurrentUser = this.auth.getUser();
    showTable: boolean;
    Formstate: string;
    headerText: string;
    errorMessage: string;
    selUser: any;
    collection: WeekPlan[] = [];
    srchObj: WeekPlan = new WeekPlan();
    model: WeekPlan;
    Allusers: User[] = [];
    users: any[] = [];
    destinations: Destination[] = [];
    thisday: string;
    orderbyString: string = "";
    orderbyClass: string = "glyphicon glyphicon-sort";
    inFrm: FormGroup;
    cnvStartDate: string;
    plnDest: WeekPlanDest[] = []

    ngOnInit() {
        this.srvUsr.getuser().subscribe(cols => {
            this.Allusers = cols;
            var unique = this.Allusers.map(function (obj) { return { UserID: obj.UserID, UserName: obj.UserName, LineName: obj.LineName } });
            this.users = unique.filter((x, i, a) => a.findIndex(U => U.UserID == x.UserID) == i)
            if (this.currentUser.jobClass == 3) {
                this.selUser = this.users.filter(u => u.UserID === this.currentUser.userID)[0]
            }
            this.TableBack();
        })
    }
    CreateNew() {

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