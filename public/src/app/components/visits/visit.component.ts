import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {
  VisitService, GiftService, DrugService, DestinationService,
  UserRegionService, AuthenticationService, SurveyQuestionService
} from '../../services';
import { emailValidator, matchingPasswords, minDate, maxDate } from '../../pipes/validators';
import {
  Visits, CurrentUser, VisitDrugs, Drugs, VisitGifts, Gifts,
  Destination, Region, VisitTypes, User, VisitAnswers, SurveyAnswer
} from '../../Models';
import * as hf from '../helpers/helper.functions'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
  inFrm: FormGroup;
  cnvVisitDate: string;
  cnvVisitTime: string;
  currentUser: CurrentUser = this.auth.getUser();
  collection: Visits[] = [];
  srchObj: Visits = new Visits();
  model: Visits;
  destModel: Destination = new Destination();
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
  visAnsrs: VisitAnswers[] = [];
  allAns: SurveyAnswer[] = []
  drgAnsrs: any[] = [];
  visDrugModel: VisitDrugs = new VisitDrugs();
  visGiftModel: VisitGifts = new VisitGifts();
  orderbyString = '';
  orderbyClass = 'glyphicon glyphicon-sort';
  yesterday: string
  thisday: string
  visTypes = VisitTypes
  managers: User[] = []
  drgsChanged: number
  selUser: any
  selDrugName: any
  stillSaving: boolean
  locPos: any
  mrkPos: any
  fallback: '[30.082824203107098, 31.34755614624021]'
  zoom = 8
  public modalRef: BsModalRef;
  showCustModal: boolean
  @ViewChild('template') custTemp: TemplateRef<any>

  constructor(private serv: VisitService, private srvGift: GiftService, private srvDrug: DrugService,
    private srvDest: DestinationService, private srvUreg: UserRegionService, private modalService: BsModalService,
    private auth: AuthenticationService, fb: FormBuilder, private srvQ: SurveyQuestionService) {
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
          if (group.controls['visType'].value === 'Coaching Visit-With Manager' && !group.controls['accompanyID'].value) {
            return { mngrRequired: true };
          }
        }
      })
    this.inFrm.controls['visDate'].valueChanges.subscribe(val => this.onDateChanged(val))
    // this.inFrm.controls['visTime'].valueChanges.subscribe(val => this.onTimeChanged(val))
  }

  ngOnInit() {
    this.serv.getUserVisitsByDate(this.currentUser.userID).subscribe(cols => {
      this.collection = cols;
      const unique = this.collection.map(function (obj) { return { UserID: obj.UserID, UserName: obj.UserName, LineName: obj.LineName } });
      this.users = unique.filter((x, i, a) => a.findIndex(U => U.UserID === x.UserID) === i)
      if (this.currentUser.jobClass === 3) { this.selUser = this.users[0] }
      this.srvUreg.getUserChainRegions(this.currentUser.userID).subscribe(rgs => {
        this.regions = rgs;
        this.srvUreg.getUserManagers(this.currentUser.userID).subscribe(mng => {
          this.managers = mng
          this.srvQ.getAllAnswers().subscribe(ans => {
            this.allAns = ans
            this.TableBack();
          })
        });
      })
    });
  }
  CreateNew() {
    this.model = new Visits();
    this.destModel = new Destination();
    this.model.DestType = 'Clinic (Doctor)';
    this.model.VisitType = 'Single';
    this.visDrugModel = new VisitDrugs();
    this.visGiftModel = new VisitGifts();
    const today = new Date();
    this.cnvVisitDate = hf.handleDate(today);
    this.cnvVisitTime = hf.handleTime(today);
    this.yesterday = hf.handleDate(new Date(today.setDate(today.getDate() - 1)));
    this.thisday = this.cnvVisitDate;
    this.inFrm.controls['visDate'].setValidators(Validators.compose([Validators.required, maxDate(new Date(this.cnvVisitDate)),
    minDate(new Date(this.yesterday))]));
    this.VisDrugs = [];
    this.VisGifts = [];
    this.visAnsrs = [];
    this.showTable = false;
    this.Formstate = 'Create';
    this.headerText = 'Create New Visit';
    this.disableDateField()
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
      this.inFrm.controls['visDate'].setValidators(Validators.compose([Validators.required, maxDate(new Date(this.cnvVisitDate)),
      minDate(new Date(this.yesterday))]));
      this.disableDateField()

      this.cnvVisitTime = hf.handleTime(this.model.VisitTime);
      this.visDrugModel = new VisitDrugs();
      this.visGiftModel = new VisitGifts();
      this.serv.getVisitDrugs(id).subscribe(ret1 => {
        this.VisDrugs = ret1;
        this.serv.getVisitGifts(id).subscribe(ret2 => {
          this.VisGifts = ret2;
          this.srvQ.getVisitDrugAnswers(id).subscribe(ret3 => {
            this.visAnsrs = ret3
            if (this.currentUser.jobClass < 1 || this.currentUser.jobClass === 99) {
              this.srvDest.getApprovedRegionDestinations(this.model.RegionID).subscribe(dst => {
                if (dst.error) {
                  this.errorMessage = dst.error.message ? dst.error.message : dst.error;
                } else {
                  this.destinations = dst;
                  this.ViewDests = this.destinations.filter(obj => obj.DestType === this.model.DestType);
                  this.destModel = this.destinations.find(obj => obj.DestID === this.model.DestID)
                  // this.showCustModal = this.checkCustomerFinished()
                  this.showTable = false;
                  this.Formstate = state;
                  this.headerText = state === 'Details' ? 'Visit ' + state : state + ' Visit';
                }
              });
            } else {
              this.srvDest.getPlanApprovedRegionDestinations(this.model.RegionID, this.currentUser.userID, this.cnvVisitDate)
                .subscribe(dst => {
                  if (dst.error) {
                    this.errorMessage = dst.error.message ? dst.error.message : dst.error;
                  } else {
                    this.destinations = dst[0];
                    this.ViewDests = this.destinations.filter(obj => obj.DestType === this.model.DestType);
                    this.destModel = this.destinations.find(obj => obj.DestID === this.model.DestID)
                    // this.showCustModal = this.checkCustomerFinished()
                    this.showTable = false;
                    this.Formstate = state;
                    this.headerText = state === 'Details' ? 'Visit ' + state : state + ' Visit';
                  }
                });
            }
          })
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
  HandleForm(event?) {
    event.preventDefault();
    if (this.stillSaving) { return }
    if (this.VisDrugs.length <= 0 && this.Formstate !== 'Delete') {
      this.errorMessage = 'Please Add Some Products';
      this.stillSaving = false
      return;
    }
    // if (!this.checkCustomerFinished() && this.Formstate !== 'Delete') { this.OpenModal(this.custTemp); return; }
    this.stillSaving = true
    this.model.UserID = this.Formstate === 'Create' ? this.currentUser.userID : this.model.UserID;
    this.model.VisitDate = new Date(this.cnvVisitDate);
    this.model.VisitTime = new Date(this.cnvVisitDate + 'T' + this.cnvVisitTime);
    this.model.VisitTime.setHours(this.model.VisitTime.getHours() - 2)
    // if (this.model.VisitTime.getHours() > new Date().getHours()) {
    // }
    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertVisit(this.model, this.VisDrugs, this.VisGifts, this.visAnsrs).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message ? ret.error.message
              .includes('Violation of UNIQUE KEY') ? `Can't Insert two visits for the same Customer
                        in the same day` : ret.error.message : ret.error;
          } else {
            this.ngOnInit();
          }
        });
        break;
      case 'Edit':
        this.serv.UpdateVisit(this.model.VisitID, this.model, this.VisDrugs, this.VisGifts, this.visAnsrs).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message ? ret.error.message
              .includes('Violation of UNIQUE KEY') ? `Can't Insert two visits for the same Customer
                        in the same day` : ret.error.message : ret.error;
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        });
        break;
      case 'Delete':
        this.serv.DeleteVisit(this.model.VisitID).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message ? ret.error.message.includes('Violation of UNIQUE KEY') ?
              `Can't Insert two visits for the same Customer
                        in the same day` : ret.error.message : ret.error;
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
    if (this.orderbyString.indexOf(column) === -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes';
      this.orderbyString = '+' + column;
    } else if (this.orderbyString.indexOf('-' + column) === -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
      this.orderbyString = '-' + column;
    } else {
      this.orderbyClass = 'glyphicon glyphicon-sort';
      this.orderbyString = '';
    }
  }
  disableDateField() {
    if (new Date() > new Date(this.cnvVisitDate + 'T' + '06:00:00')) {
      this.inFrm.controls['visDate'].disable();
    } else {
      this.inFrm.controls['visDate'].enable()
    }
  }
  onRegChange(newobj) {
    if (newobj.target.value) {
      const region = newobj.target.value.split(':')[1].trim();
      const visDate = this.model.VisitDate == null ? new Date() : this.model.VisitDate
      this.srvDest.getPlanApprovedRegionDestinations(region, this.currentUser.userID, hf.handleDate(visDate)).subscribe(dst => {
        if (dst.error) {
          this.errorMessage = dst.error.message ? dst.error.message : dst.error;
        } else {
          this.destinations = dst[0];
          if (this.destinations.length > 0) {
            this.ViewDests = this.destinations.filter(obj => obj.DestType === this.model.DestType);
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
        this.ViewDests = this.destinations.filter(obj => obj.DestType === this.model.DestType);
      } else {
        this.ViewDests = []
        this.model.DestID = null
      }
    }
  }
  onDestChange(newobj) {
    if (newobj.target.value) {
      const Dest = newobj.target.value.split(':')[1].trim();
      this.srvDest.checkMaxVisit(Dest, this.currentUser.userID, this.cnvVisitDate).subscribe(ret => {
        if (ret.error) {
          this.errorMessage = ret.error.message ? ret.error.message : ret.error;
        } else {
          if (ret.length <= 0) { return }
          if (ret[0].Allowed) {
            // this.destModel = this.destinations.find(d => d.DestID == Dest)
            // this.showCustModal = this.checkCustomerFinished()
          } else {
            this.inFrm.controls['destination'].setErrors({ 'maxVisit': true });
          }
        }
      })
    }
  }
  onDateChanged(value) {
    // let newtimedate = new Date(value + 'T' + this.cnvVisitTime)
    // if (newtimedate > new Date()) {
    //     this.inFrm.controls['visTime'].setErrors({ 'maxTime': true })
    // }
    // else { }
  }
  onTimeChanged(value) {
    // let newtimedate = new Date(this.cnvVisitDate + 'T' + value)
    // newtimedate.setHours(newtimedate.getHours() - 2)
    // if (newtimedate > new Date()) {
    //     this.inFrm.controls['visTime'].setErrors({ 'maxTime': true })
    // }
    // else { }
  }
  drugChangeEvent(value) {
    this.drgsChanged = value;
  }
  ansChangeEvent(value) {
    const len = this.visAnsrs.length
  }
  DeleteDrug(index) {
    const drg = this.VisDrugs[index].DrugID
    const AnsToBeRemoved = this.visAnsrs.filter(v => v.DrugID == drg)
    while (AnsToBeRemoved.length) {
      let c = AnsToBeRemoved.pop()
      this.visAnsrs.splice(this.visAnsrs.findIndex(i => i.AnswerID == c.AnswerID && i.DrugID == drg), 1);
    }
    const GftToBeRemoved = this.VisGifts.filter(v => v.DrugID == drg)
    while (GftToBeRemoved.length) {
      let c = GftToBeRemoved.pop()
      this.VisGifts.splice(this.VisGifts.findIndex(i => i.GiftID == c.GiftID && i.DrugID == drg), 1);
    }

    this.VisDrugs.splice(index, 1);
    this.drgsChanged = this.VisDrugs.length;
  }
  removeElements(arr, elm) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].DrugID === elm) {
        arr.splice(i, 0)
      }
    }
  }
  UserChanged($user) {
    this.selUser = this.users.filter(u => u.UserName === $user.target.value.split('@')[0].trim())[0]
  }
  DeleteGift(index) {
    this.VisGifts.splice(index, 1);
    this.drgsChanged = this.VisDrugs.length;
  }
  prepareDrgAnsrs(indx) {
    this.selDrugName = this.VisDrugs[indx].DrugName
    let Ansrs = this.visAnsrs.filter(v => v.DrugID == this.VisDrugs[indx].DrugID)
    this.drgAnsrs = Ansrs.map(q => {
      return {
        QID: q.QID, QText: this.allAns.filter(a => a.QID == q.QID)[0].QText,
        Answers: this.allAns.filter(a => a.QID == q.QID)
      }
    })
    this.drgAnsrs.forEach(sr => sr.Answers.forEach(a => a['checked'] = Ansrs.findIndex(i => i.AnswerID == a.AnswerID) >= 0))
  }

  log({ target: marker }, str) {
    this.locPos = {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng()
    }
    this.mrkPos = {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng()
    }
    console.log('new position .... >', this.locPos, str);
  }
  onIdle({ target: map }) {
    if (map.markers) {
      this.mrkPos = {
        lat: map.markers[0].getPosition().lat(),
        lng: map.markers[0].getPosition().lng()
      }
      console.log(this.mrkPos.lat, this.mrkPos.lng, 'idle')
    }
  }
  ChangePosition() {
    if (!this.destModel.City) {
      this.destModel.City = `${this.destModel.ProvinceID ?
        this.destModel.ProvinceID : ''}, ${this.destModel.RegionName ? this.destModel.RegionName : ''}`
    }
    // this.locPos = this.ProvinceList.find(p => p.name === this.destModel.ProvinceID).engName + ', Egypt'
    this.locPos = this.destModel.City.replace(',', '') + ', Egypt'
  }
  generateAddress() {
    this.destModel.Address = `${this.destModel.City ? this.destModel.City : ''}; ` +
      `${this.destModel.Street ? this.destModel.Street : ''}; ` +
      `${this.destModel.Building ? 'Building: ' + this.destModel.Building : ''}; ` +
      `${this.destModel.Floor ? 'Floor: ' + this.destModel.Floor : ''};` + `${this.destModel.Flat ? 'Flat: ' + this.destModel.Flat : ''}`
  }
  saveCustomer(event) {
    event.preventDefault();
    this.destModel.GPSLoclat = this.mrkPos.lat
    this.destModel.GPSLoclng = this.mrkPos.lng
    this.srvDest.UpdateDestinationOnly(this.destModel.DestID, this.destModel).subscribe(ret => {
      if (ret.error) {
        this.errorMessage = ret.error.message;
      } else if (ret.affected > 0) {
        // this.ngOnInit();
        this.HandleForm(event)
        this.modalRef.hide()
      }
    }, err => this.errorMessage = err.message);
  }
  checkCustomerFinished() {
    return this.destModel.GPSLoclat ?
      this.destModel.GPSLoclng ?
        this.destModel.City ?
          this.destModel.Building ?
            this.destModel.Flat ?
              this.destModel.Floor ?
                this.destModel.Mobile ? true : false :
                false :
              false :
            false :
          false :
        false :
      false
  }
  OpenModal(template: TemplateRef<any>) {
    // this.ChangePosition()
    // this.modalRef = this.modalService.show(template);
  }
}
