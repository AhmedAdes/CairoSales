import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService, RegionService, AuthenticationService, UserRegionService, LineService } from '../../services';
import { emailValidator, matchingPasswords, alreadyExist } from '../../pipes/validators';
import { User, CurrentUser, Region, JobClass, SalesLine, ReplaceUser } from '../../Models';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    inputForm: FormGroup;
    replcForm: FormGroup

    constructor(public serv: UserService,
        public regserv: RegionService,
        private srvln: LineService,
        private auth: AuthenticationService,
        private usrRegServ: UserRegionService,
        private fb: FormBuilder) {
        this.inputForm = fb.group({
            'UserID': null,
            'UserName': [null, Validators.required],
            'LoginName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
            'UserPass': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
            'ConfPass': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
            'JobClass': [null, Validators.required],
            manager: [null, Validators.required],
            lineID: [null, Validators.required],
            'Email': [null, emailValidator],
            'Phone': null
        }, { validator: matchingPasswords('UserPass', 'ConfPass') })

        this.replcForm = fb.group({
            'User1ID': null,
            'User1Name': [null, Validators.required],
            'User2ID': [null, Validators.required]
        })

        this.inputForm.controls['JobClass'].valueChanges.subscribe(value => this.TitleChanged(value))
    }

    currentUser: CurrentUser = this.auth.getUser();
    collection: User[] = [];
    searchUser: User = new User();
    model: User;
    showTable: boolean;
    Formstate: string;
    headerText: string;
    errorMessage: string;
    classList = JobClass.filter(obj => obj.class > this.currentUser.jobClass && obj.class != 99);
    regions: Region[] = [];
    userRegions: Region[] = [];
    managerList: User[] = []
    salesLines: SalesLine[] = []
    selectedRegion: number;
    orderbyString: string = "";
    orderbyClass: string = "glyphicon glyphicon-sort";
    rplcModel: ReplaceUser
    replcUsers: User[] = [];

    ngOnInit() {
        this.serv.getUserChain(this.currentUser.userID).subscribe(cols => {
            this.collection = cols;
            this.regserv.getRegion().subscribe(reg => {
                this.regions = reg;
                this.srvln.getLine().subscribe(ln => {
                    this.salesLines = ln;
                    this.TableBack();
                })
            });
        });
    }
    CompleteLogin() {
        if (this.model.UserName) {
            var sp = this.model.UserName.split(" ");
            this.model.LoginName = sp[0].charAt(0) + '.' + sp[sp.length - 1];
        }
    }
    CreateNew() {
        this.model = new User();
        this.inputForm.controls['LoginName'].setValidators(Validators.compose([Validators.required, alreadyExist(this.collection, 'LoginName', '')]));
        this.inputForm.controls["UserName"].enable()
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New User';
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
    Disable(id: number) {
        this.loadDetails(id, 'Disable');
    }
    Replace(id: number) {
        this.loadDetails(id, 'Replace');
    }
    loadDetails(id, state) {
        if (state == 'Replace') {
            this.serv.getuser(id).subscribe(ret => {
                this.srvln.getLineUsers(ret[0].SalesLineID).subscribe(ret1 => {
                    this.replcUsers = ret1
                    this.rplcModel = new ReplaceUser()
                    this.rplcModel.user1ID = ret[0].UserID
                    this.rplcModel.User1Name = ret[0].UserName
                    this.showTable = false;
                    this.Formstate = state;
                    this.headerText = state + ' User';
                })
            })
        }
        else {
            this.serv.getuser(id).subscribe(ret => {
                this.usrRegServ.getUSerRegion(id).subscribe(ret1 => {
                    this.userRegions = ret1;
                    this.model = ret[0];
                    if (state == 'Edit') {
                        this.inputForm.controls["UserName"].disable()
                        this.inputForm.controls['ConfPass'].setValue(this.model.UserPass);
                        this.inputForm.controls['LoginName'].setValidators(Validators.compose([Validators.required, alreadyExist(this.collection, 'LoginName', this.model.LoginName)]));
                        this.inputForm.updateValueAndValidity();
                    }
                    this.showTable = false;
                    this.Formstate = state;
                    this.headerText = state == 'Details' ? 'User ' + state : state + ' User';
                });
            })
        }
    }
    TableBack() {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Users';
        this.errorMessage = null;
        this.inputForm.reset();
    }
    HandleForm(event) {
        event.preventDefault();
        var newUser: User = this.model;
        // newUser.DirectManager = this.currentUser.userID;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertUser(newUser, this.userRegions).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    } else if (ret.affected > 0) { this.ngOnInit(); }
                });
                break;
            case 'Edit':
                this.serv.UpdateUser(newUser.UserID, newUser, this.userRegions).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    } else if (ret.affected > 0) { this.ngOnInit(); }
                });
                break;
            case 'Delete':
                this.serv.DeleteUser(newUser.UserID).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Disable':
                this.serv.DisableUser(newUser.UserID).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Replace':
                this.serv.RotateUsers(this.rplcModel.user1ID, this.rplcModel.user2ID).subscribe(ret => {
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

    ApproveUser(id: number) {
        this.serv.ApproveUser(id, this.currentUser.userID).subscribe(ret => {
            if (ret.error) {
                this.errorMessage = ret.error.message;
            } else if (ret.affected > 0) {
                this.ngOnInit();
            }
        });
    }

    addRegion() {
        if (this.selectedRegion != null && this.userRegions.findIndex(x => x.RegionID == this.selectedRegion) == -1) {
            var regio: Region = this.regions.filter(obj => obj.RegionID == this.selectedRegion)[0];
            this.userRegions.push(regio);
        }
    }
    removeRegion(index: number) {
        console.log(index);
        this.userRegions.splice(index, 1);
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
    TitleChanged(value) {
        if (!value) return
        var Class = JobClass.find(c => c.class == JobClass.find(l => l.name == value).class - 1)
        this.managerList = this.collection.filter(usr => usr.JobClass == Class.name && usr.SalesLineID == this.model.SalesLineID)

        if (Class.class == 1) {
            this.inputForm.controls['manager'].clearValidators()
        } else {
            this.inputForm.controls['manager'].setValidators([Validators.required])
        }
    }
}
