import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import {
    VisitService, GiftService, DrugService, DestinationService,
    UserRegionService, AuthenticationService
} from '../../services';
import { emailValidator, matchingPasswords, minDate, maxDate } from '../../pipes/validators';
import {
    Visits, CurrentUser, VisitDrugs, Drugs, VisitGifts, Gifts,
    Destination, Region, VisitTypes, User
} from '../../Models';
import * as hf from '../helpers/helper.functions'

@Component({
    selector: 'app-visit',
    templateUrl: './visit.component.html'
})
export class VisitComponent implements OnInit {
    inFrm: FormGroup;
    cnvVisitDate: string;
    cnvVisitTime: string;

    constructor(private serv: VisitService, private srvGift: GiftService, private srvDrug: DrugService,
        private srvDest: DestinationService, private srvUreg: UserRegionService,
        private auth: AuthenticationService, fb: FormBuilder) {
        this.inFrm = fb.group({
            'visType': [null, Validators.required],
            'accompanyID': [null],
            'visDate': [this.cnvVisitDate, Validators.required],
            // 'visTime': [this.cnvVisitTime, Validators.required],
            'region': [null, Validators.required],
            'destination': [null, Validators.required],
            'generalComment': [null]
        }, {
                validator: (group: FormGroup) => {
                    if (group.controls['visType'].value == "Coaching Visit-With Manager" && !group.controls['accompanyID'].value) {
                        return { mngrRequired: true };
                    }
                }
            })
        this.inFrm.controls['visDate'].valueChanges.subscribe(val => this.onDateChanged(val))
        // this.inFrm.controls['visTime'].valueChanges.subscribe(val => this.onTimeChanged(val))
    }

    currentUser: CurrentUser = this.auth.getUser();
    collection: Visits[] = [];
    srchObj: Visits = new Visits();
    model: Visits;
    showTable: boolean;
    Formstate: string;
    headerText: string;
    errorMessage: string;
    users: any[] = [];
    destinations: Destination[] = [];
    ViewDests: Destination[] = [];
    regions: Region[] = [];
    VisDrugs: VisitDrugs[] = [];
    VisGifts: VisitGifts[] = [];
    visDrugModel: VisitDrugs = new VisitDrugs();
    visGiftModel: VisitGifts = new VisitGifts();
    orderbyString: string = "";
    orderbyClass: string = "glyphicon glyphicon-sort";
    yesterday: string
    thisday: string
    visTypes = VisitTypes
    managers: User[] = []
    drgsChanged: number
    selUser: any
    stillSaving: boolean

    ngOnInit() {
        this.serv.getUserVisitsByDate(this.currentUser.userID).subscribe(cols => {
            this.collection = cols;
            var unique = this.collection.map(function (obj) { return { UserID: obj.UserID, UserName: obj.UserName } });
            this.users = unique.filter((x, i, a) => a.findIndex(U => U.UserID == x.UserID) == i)
            if (this.currentUser.jobClass == 3) { this.selUser = this.users[0] }
            this.srvUreg.getUserChainRegions(this.currentUser.userID).subscribe(rgs => {
                this.regions = rgs;
                this.srvUreg.getUserManagers(this.currentUser.userID).subscribe(mng => this.managers = mng);
                this.TableBack();
            })
        });
    }
    CreateNew() {
        this.model = new Visits();
        this.model.DestType = 'Clinic (Doctor)';
        this.model.VisitType = 'Single';
        this.visDrugModel = new VisitDrugs();
        this.visGiftModel = new VisitGifts();
        var today = new Date();
        this.cnvVisitDate = hf.handleDate(today);
        this.cnvVisitTime = hf.handleTime(today);
        this.yesterday = hf.handleDate(new Date(today.setDate(today.getDate() - 1)));
        this.thisday = this.cnvVisitDate;
        this.inFrm.controls['visDate'].setValidators(Validators.compose([Validators.required, maxDate(new Date(this.cnvVisitDate)), minDate(new Date(this.yesterday))]));
        this.VisDrugs = [];
        this.VisGifts = [];
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Visit';
        if (new Date() > new Date(this.cnvVisitDate + 'T' + '01:00:00')) {
            this.inFrm.controls['visDate'].disable();
        } else {
            this.inFrm.controls['visDate'].enable()
        }
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
        this.serv.getVisit(id).subscribe(ret => {
            this.model = ret[0];
            this.cnvVisitDate = this.model.VisitDate.toString().split('T')[0];
            this.yesterday = hf.handleDate(new Date(new Date(this.cnvVisitDate).setDate(new Date(this.cnvVisitDate).getDate() - 1)));
            this.thisday = this.cnvVisitDate;
            this.inFrm.controls['visDate'].setValidators(Validators.compose([Validators.required, maxDate(new Date(this.cnvVisitDate)), minDate(new Date(this.yesterday))]));
            if (new Date() > new Date(this.cnvVisitDate + 'T' + '01:00:00')) {
                this.inFrm.controls['visDate'].disable();
            } else {
                this.inFrm.controls['visDate'].enable()
            }
            this.cnvVisitTime = hf.handleTime(this.model.VisitTime);
            this.visDrugModel = new VisitDrugs();
            this.visGiftModel = new VisitGifts();
            this.serv.getVisitDrugs(id).subscribe(ret1 => {
                this.VisDrugs = ret1;
                this.serv.getVisitGifts(id).subscribe(ret2 => {
                    this.VisGifts = ret2;
                    if (this.currentUser.jobClass < 1 || this.currentUser.jobClass == 99) {
                        this.srvDest.getApprovedRegionDestinations(this.model.RegionID).subscribe(dst => {
                            if (dst.error) {
                                this.errorMessage = dst.error.message ? dst.error.message : dst.error;
                            } else {
                                this.destinations = dst;
                                this.ViewDests = this.destinations.filter(obj => obj.DestType == this.model.DestType);
                                this.showTable = false;
                                this.Formstate = state;
                                this.headerText = state == 'Details' ? 'Visit ' + state : state + ' Visit';
                            }
                        });
                    } else {
                        this.srvDest.getPlanApprovedRegionDestinations(this.model.RegionID, this.currentUser.userID, this.cnvVisitDate).subscribe(dst => {
                            if (dst.error) {
                                this.errorMessage = dst.error.message ? dst.error.message : dst.error;
                            } else {
                                this.destinations = dst[0];
                                this.ViewDests = this.destinations.filter(obj => obj.DestType == this.model.DestType);
                                this.showTable = false;
                                this.Formstate = state;
                                this.headerText = state == 'Details' ? 'Visit ' + state : state + ' Visit';
                            }
                        });
                    }
                })
            });
        }, err => this.errorMessage = err.message);
    }
    TableBack() {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Visits';
        this.errorMessage = null;
        this.stillSaving = false
        this.inFrm.reset();
    }
    HandleForm(event) {
        event.preventDefault();
        if (this.stillSaving) return
        this.stillSaving = true
        this.model.UserID = this.Formstate == 'Create' ? this.currentUser.userID : this.model.UserID;
        this.model.VisitDate = new Date(this.cnvVisitDate);
        this.model.VisitTime = new Date(this.cnvVisitDate + 'T' + this.cnvVisitTime);
        this.model.VisitTime.setHours(this.model.VisitTime.getHours() - 2)
        // if (this.model.VisitTime.getHours() > new Date().getHours()) {
        // }
        if (this.VisDrugs.length <= 0 && this.Formstate != "Delete") {
            this.errorMessage = "Please Add Some Products";
            return;
        }
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertVisit(this.model, this.VisDrugs, this.VisGifts).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message ? ret.error.message.includes('Violation of UNIQUE KEY') ? `Can't Insert two visits for the same Customer
                        in the same day`: ret.error.message : ret.error;
                    } else {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateVisit(this.model.VisitID, this.model, this.VisDrugs, this.VisGifts).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message ? ret.error.message.includes('Violation of UNIQUE KEY') ? `Can't Insert two visits for the same Customer
                        in the same day`: ret.error.message : ret.error;
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteVisit(this.model.VisitID).subscribe(ret => {
                    if (ret.error) {
                        this.errorMessage = ret.error.message ? ret.error.message.includes('Violation of UNIQUE KEY') ? `Can't Insert two visits for the same Customer
                        in the same day`: ret.error.message : ret.error;
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
    onRegChange(newobj) {
        if (newobj.target.value) {
            var region = newobj.target.value.split(':')[1].trim();
            var visDate = this.model.VisitDate == null ? new Date() : this.model.VisitDate
            this.srvDest.getPlanApprovedRegionDestinations(region, this.currentUser.userID, hf.handleDate(visDate)).subscribe(dst => {
                if (dst.error) {
                    this.errorMessage = dst.error.message ? dst.error.message : dst.error;
                } else {
                    this.destinations = dst[0];
                    if (this.destinations.length > 0) {
                        this.ViewDests = this.destinations.filter(obj => obj.DestType == this.model.DestType);
                    } else {
                        this.ViewDests = []
                        this.model.DestID = null
                    }
                }
            });
        }
    }
    onDestTypeChange(newobj, DestType) {
        if (newobj.target.checked === true) {
            this.model.DestType = DestType
            if (this.destinations.length > 0) {
                this.ViewDests = this.destinations.filter(obj => obj.DestType == this.model.DestType);
            } else {
                this.ViewDests = []
                this.model.DestID = null
            }
        }
    }
    onDestChange(newobj) {
        if (newobj.target.value) {
            var Dest = newobj.target.value.split(':')[1].trim();
            this.srvDest.checkMaxVisit(Dest, this.currentUser.userID, this.cnvVisitDate).subscribe(ret => {
                if (ret.error) {
                    this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                } else {
                    if (ret.length <= 0) { return }
                    if (ret[0].Allowed) {
                    } else {
                        this.inFrm.controls['destination'].setErrors({ "maxVisit": true });
                    }
                }
            })
        }
    }
    onDateChanged(value) {
        // let newtimedate = new Date(value + 'T' + this.cnvVisitTime)
        // if (newtimedate > new Date()) {
        //     this.inFrm.controls['visTime'].setErrors({ "maxTime": true })
        // }
        // else { }
    }
    onTimeChanged(value) {
        // let newtimedate = new Date(this.cnvVisitDate + 'T' + value)
        // newtimedate.setHours(newtimedate.getHours() - 2)
        // if (newtimedate > new Date()) {
        //     this.inFrm.controls['visTime'].setErrors({ "maxTime": true })
        // }
        // else { }
    }
    drugChangeEvent(value) {
        this.drgsChanged = value;
    }
    DeleteDrug(index) {
        this.VisDrugs.splice(index, 1);
        this.VisGifts.filter(gft => gft.DrugID == index).splice(1)
        this.drgsChanged = this.VisDrugs.length;
    }
    UserChanged($user) {
        this.selUser = this.users.filter(u => u.UserName == $user.target.value)[0]
    }
    DeleteGift(index) {
        this.VisGifts.splice(index, 1);
        this.drgsChanged = this.VisDrugs.length;
    }
}
