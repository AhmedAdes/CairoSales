import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  VisitService, GiftService, DrugService, DestinationService, MedSpecService,
  UserRegionService, AuthenticationService, SurveyQuestionService
} from '../../services';
import { emailValidator, matchingPasswords, minDate, maxDate } from '../../pipes/validators';
import {
  Visits, CurrentUser, VisitDrugs, Drugs, VisitGifts, Gifts, MedSpec,
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
  docNameslist: string[] = [];
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
  orderbyString =  '';
  orderbyClass = 'glyphicon glyphicon-sort';
  yesterday: string
  thisday: string
  visTypes = VisitTypes
  managers: User[] = []
  drgsChanged: number
  selUser: any
  selDrugName: any
  stillSaving: boolean
  MedSpecList: MedSpec[] = [];
  hsptlDocs = []
  locPos: any
  mrkPos: any
  fallback: '[30.082824203107098, 31.34755614624021]'
  zoom = 8
  public modalRef: BsModalRef;
  showCustModal: boolean
  spinner = true;
  isHospital = false;
  savedSome = false;
  selectedIndex
  @ViewChild('template') custTemp: TemplateRef<any>

  constructor(private serv: VisitService, private srvGift: GiftService, private srvDrug: DrugService, private route: ActivatedRoute,
    private srvDest: DestinationService, private srvUreg: UserRegionService, private modalService: BsModalService,
    private auth: AuthenticationService, fb: FormBuilder, private srvQ: SurveyQuestionService, private srvSpc: MedSpecService) {}

  ngOnInit() {
    this.InitiatetheForm()
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
            this.srvSpc.getSpec().subscribe(spc => this.MedSpecList = spc)
            this.allAns = ans
            this.TableBack();
          })
        });
      })
    });
  }
  InitiatetheForm(): any {
    this.inFrm = new FormGroup({
      visType: new FormControl('', Validators.required),
      accompanyID: new FormControl(''),
      visDate: new FormControl(this.cnvVisitDate, Validators.required),
      region: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required ),
      generalComment: new FormControl(''),
      docGroup: new FormGroup({
        doctor: new FormControl(''),
        spec: new FormControl('')
      })
    }, (group: FormGroup) => {
        if (group.controls['visType'].value === 'Coaching Visit-With Manager' && !group.controls['accompanyID'].value) {
          return { mngrRequired: true };
        }
      }
    )
    this.inFrm.get('visDate').valueChanges.subscribe(val => this.onDateChanged(val))
    this.inFrm.get('destination').valueChanges.subscribe(val => this.onDestChange(val))
    // this.inFrm.controls['visTime'].valueChanges.subscribe(val => this.onTimeChanged(val))
  }
  CreateNew(isHosptl) {
    this.model = new Visits();
    this.isHospital = isHosptl
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
    if (isHosptl) {
      this.model.DestType = 'Hospital'
      this.srvDest.getUserHospitals(this.currentUser.userID).subscribe(hsp => {
        if (hsp.error) {
          hf.handleError(hsp.error)
        } else {
          this.ViewDests = hsp[0]
          this.showTable = false;
        }
      }, err => hf.handleError(err))
    } else {
      this.showTable = false;
    }
    this.VisDrugs = [];
    this.VisGifts = [];
    this.visAnsrs = [];
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
            this.isHospital = this.model.HospitalVisit
            if (this.model.HospitalVisit) {
              this.srvDest.getUserHospitals(this.currentUser.userID).subscribe(hsp => {
                if (hsp.error) {
                  hf.handleError(hsp.error)
                } else {
                  this.ViewDests = hsp[0]
                  this.showTable = false;
                  this.Formstate = state;
                  this.headerText = state === 'Details' ? 'Visit ' + state : state + ' Visit';
                }
              }, err => hf.handleError(err))
            } else {
              if (this.currentUser.jobClass < 1 || this.currentUser.jobClass === 99) {
                this.srvDest.getApprovedRegionDestinations(this.model.RegionID).subscribe(dst => {
                  if (dst.error) {
                    hf.handleError(dst.error)
                  } else {
                    this.destinations = dst;
                    this.ViewDests = this.destinations.filter(obj => obj.DestType === this.model.DestType);
                    this.destModel = this.destinations.find(obj => obj.DestID === this.model.DestID)
                    // this.showCustModal = this.checkCustomerFinished()
                    this.showTable = false;
                    this.Formstate = state;
                    this.headerText = state === 'Details' ? 'Visit ' + state : state + ' Visit';
                  }
                }, err => hf.handleError(err));
              } else {
                this.srvDest.getPlanApprovedRegionDestinations(this.model.RegionID, this.currentUser.userID, this.cnvVisitDate)
                  .subscribe(dst => {
                    if (dst.error) {
                      hf.handleError(dst.error)
                    } else {
                      this.destinations = dst[0];
                      this.ViewDests = this.destinations.filter(obj => obj.DestType === this.model.DestType);
                      this.destModel = this.destinations.find(obj => obj.DestID === this.model.DestID)
                      // this.showCustModal = this.checkCustomerFinished()
                      this.showTable = false;
                      this.Formstate = state;
                      this.headerText = state === 'Details' ? 'Visit ' + state : state + ' Visit';
                    }
                  }, err => hf.handleError(err));
              }
            }
          }, err => hf.handleError(err))
        }, err => hf.handleError(err))
      });
    }, err => hf.handleError(err));
  }
  TableBack() {
    if (this.savedSome) {
      this.savedSome = false
      this.ngOnInit()
      return
    }
    this.showTable = true;
    this.Formstate = null;
    this.headerText = 'Visits';
    this.spinner = false
    this.inFrm.reset();
    this.errorMessage = null;
    this.stillSaving = false
    this.hsptlDocs = []
  }
  resetForm() {
    this.stillSaving = false
    this.errorMessage = null;
    this.VisDrugs = []
    this.visAnsrs = []
    this.VisGifts = []
    this.inFrm.get('docGroup').get('doctor').setValue('')
    this.inFrm.get('docGroup').get('spec').setValue('')
  }
  HandleForm(formValue) {
    if (this.stillSaving) { return }
    if (this.inFrm.invalid) { this.stillSaving = false; return }
    if (this.VisDrugs.length <= 0 && this.Formstate !== 'Delete') {
      hf.handleError('Please Add Some Products');
      this.stillSaving = false
      return;
    }
    if (this.isHospital && !this.selectedIndex) {
      hf.handleError('Please select a Doctor from the list');
      this.stillSaving = false
      return;
    }
    // if (!this.checkCustomerFinished() && this.Formstate !== 'Delete') { this.OpenModal(this.custTemp); return; }
    this.stillSaving = true
    this.model.UserID = this.Formstate === 'Create' ? this.currentUser.userID : this.model.UserID;
    this.model.VisitDate = new Date(this.cnvVisitDate);
    this.model.VisitTime = new Date(this.cnvVisitDate + 'T' + this.cnvVisitTime);
    this.model.VisitTime.setHours(this.model.VisitTime.getHours() - 2)
    this.model.HospitalVisit = this.isHospital
    if (this.isHospital) {
      this.model.DoctorName = this.hsptlDocs[this.selectedIndex].DoctorName
      this.model.SpecID = this.hsptlDocs[this.selectedIndex].SpecID
    }
    // if (this.model.VisitTime.getHours() > new Date().getHours()) {
    // }
    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertVisit(this.model, this.VisDrugs, this.VisGifts, this.visAnsrs).subscribe(ret => {
          if (ret.error) {
            ret.error.message && ret.error.message
              .includes('Violation of UNIQUE KEY') ? hf.handleError(`Can't Insert two visits for the same Customer
                        in the same day`) : hf.handleError(ret.error); this.stillSaving = false
          } else {
            if (this.isHospital) {
              this.resetForm()
              this.savedSome = true
              hf.showSuccessVisit()
              this.route.fragment.subscribe(f => {
                const element = document.querySelector('#basic')
                if (element) {element.scrollIntoView(true)}
              })
            } else { this.ngOnInit() }
          }
        });
        break;
      case 'Edit':
        this.serv.UpdateVisit(this.model.VisitID, this.model, this.VisDrugs, this.VisGifts, this.visAnsrs).subscribe(ret => {
          if (ret.error) {
            ret.error.message && ret.error.message
            .includes('Violation of UNIQUE KEY') ? hf.handleError(`Can't Insert two visits for the same Customer
                      in the same day`) : hf.handleError(ret.error); this.stillSaving = false
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        });
        break;
      case 'Delete':
        this.serv.DeleteVisit(this.model.VisitID).subscribe(ret => {
          if (ret.error) {
            ret.error.message && ret.error.message
            .includes('Violation of UNIQUE KEY') ? hf.handleError(`Can't Insert two visits for the same Customer
                      in the same day`) : hf.handleError(ret.error); this.stillSaving = false
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
      this.orderbyString =  '+' + column;
    } else if (this.orderbyString.indexOf('-' + column) === -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
      this.orderbyString =  '-' + column;
    } else {
      this.orderbyClass = 'glyphicon glyphicon-sort';
      this.orderbyString =  '';
    }
  }
  disableDateField() {
    if (new Date() > new Date(this.cnvVisitDate + 'T' + '23:59:00')) {
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
          hf.handleError(dst.error)
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
  onDestChange(val) {
    if (val) {
      // const Dest = +newobj.target.value.split(':')[1].trim();
      if (this.isHospital) {
        this.srvDest.getHospitalDoctors(+val).subscribe(ret => {
          this.hsptlDocs = ret[0]
          this.docNameslist = ret[0].map(doc => {return doc.DoctorName})
          this.model.RegionID = this.ViewDests.find(d => d.DestID === val).RegionID
          this.inFrm.get('region').setValue(this.ViewDests.find(d => d.DestID === val).RegionID)
          if (this.Formstate !== 'Create') {
            this.selectedIndex = this.hsptlDocs.findIndex(h => h.DoctorName == this.model.DoctorName && h.SpecID == this.model.SpecID)
          }
        })
      } else {
      this.srvDest.checkMaxVisit(val, this.currentUser.userID, this.cnvVisitDate).subscribe(ret => {
        if (ret.error) {
          hf.handleError(ret.error)
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
  }
  AddDoctor() {
    if (this.inFrm.get('docGroup').get('doctor').value && this.inFrm.get('docGroup').get('spec').value ) {
      if (this.hsptlDocs.findIndex(d => d.DoctorName == this.inFrm.get('docGroup').get('doctor').value &&
      d.SpecID == this.inFrm.get('docGroup').get('spec').value) <= -1) {
        const docObj = {
          DoctorName: this.inFrm.get('docGroup').get('doctor').value,
          SpecID: this.inFrm.get('docGroup').get('spec').value,
          SpecName: this.MedSpecList.find(s => s.SpecID == this.inFrm.get('docGroup').get('spec').value).SpecName,
        }
        this.hsptlDocs.push(docObj)
        this.selectedIndex = this.hsptlDocs.length - 1
      }
    }
  }
  docSelect() {
    if (this.inFrm.get('docGroup').get('doctor').value) {
      this.selectedIndex = this.hsptlDocs.findIndex(d => d.DoctorName == this.inFrm.get('docGroup').get('doctor').value)
    }
  }
  listClick(event, newValue) {
    this.selectedIndex = newValue;
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
    const AnsToBeRemoved = this.visAnsrs.filter(v => v.DrugID === drg)
    while (AnsToBeRemoved.length) {
      const c = AnsToBeRemoved.pop()
      this.visAnsrs.splice(this.visAnsrs.findIndex(i => i.AnswerID === c.AnswerID && i.DrugID === drg), 1);
    }
    const GftToBeRemoved = this.VisGifts.filter(v => v.DrugID === drg)
    while (GftToBeRemoved.length) {
      const c = GftToBeRemoved.pop()
      this.VisGifts.splice(this.VisGifts.findIndex(i => i.GiftID === c.GiftID && i.DrugID === drg), 1);
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
    const Ansrs = this.visAnsrs.filter(v => v.DrugID === this.VisDrugs[indx].DrugID)
    this.drgAnsrs = Ansrs.map(q => {
      return {
        QID: q.QID, QText: this.allAns.filter(a => a.QID === q.QID)[0].QText,
        Answers: this.allAns.filter(a => a.QID === q.QID)
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
        hf.handleError(ret.error)
      } else if (ret.affected > 0) {
        // this.ngOnInit();
        this.HandleForm(event)
        this.modalRef.hide()
      }
    }, err => hf.handleError(err));
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
