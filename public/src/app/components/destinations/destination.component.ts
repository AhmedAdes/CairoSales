import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {
  DestinationService,
  RegionService,
  AuthenticationService,
  MedSpecService,
  ImportanceService,
  IMSService
} from '../../services';
import {
  Destination,
  provinces,
  Region,
  CurrentUser,
  MedSpec,
  VisitImportance,
  DestinationUser,
  IMSData
} from '../../Models';
import { NguiMapModule, NguiMapComponent } from '@ngui/map';
import * as hf from '../helpers/helper.functions';

@Component({
  selector: 'app-dest',
  templateUrl: './destination.component.html'
})
export class DestinationComponent implements OnInit, AfterViewInit {
  currentUser: CurrentUser = this.auth.getUser();
  collection: Destination[] = [];
  filteredDest: Destination[] = [];
  toApproveList: Destination[] = [];
  toRemoveList: Destination[] = [];
  toAssignList: Destination[] = [];
  srchObj: Destination = new Destination();
  srchAprv: Destination = new Destination();
  srchRmv: Destination = new Destination();
  srchAsgn: Destination = new Destination();
  model: Destination = new Destination();
  showTable: boolean;
  spinner = true;
  Formstate: string;
  headerText: string;
  errorMessage: string;
  ProvinceList = provinces;
  AllRegions: Region[] = [];
  RegionList: Region[] = [];
  MedSpecList: MedSpec[] = [];
  VisImpList: VisitImportance[] = [];
  UserList: DestinationUser[] = [];
  lines: any[] = [];
  DestUsers: any[] = [];
  IMSList: IMSData[] = [];
  allIMSList: IMSData[] = [];
  orderbyString =  '-Assigned;-PlanExist;';
  orderbyClass = 'glyphicon glyphicon-sort';
  curMonth = new Date().getMonth();
  selIMS: any;
  ClassColumn = 'Approved';
  locPos: any;
  mrkPos: any;
  fallback: '[30.14400328, 31.33193496]';
  zoom = 8;

  @ViewChild('map') curMap: NguiMapComponent;

  constructor(
    public serv: DestinationService,
    private srvReg: RegionService,
    private srvIms: IMSService,
    private srvMed: MedSpecService,
    private srvImp: ImportanceService,
    private auth: AuthenticationService
  ) {}

  ngOnInit() {
    this.spinner = true
    this.srvMed.getSpec().subscribe(spec => {
      this.MedSpecList = spec;
      this.srvImp.getImp().subscribe(imp => {
        this.VisImpList = imp;
        this.srvIms.getUserIMS(this.currentUser.userID).subscribe(ims => {
          this.IMSList = ims;
          this.srvIms.getIMS().subscribe(i => {
            this.allIMSList = i;
            this.srvReg.getRegion().subscribe(reg => this.AllRegions = reg, err => hf.handleError(err));
            if (
              this.currentUser.jobClass < 1 ||
              this.currentUser.jobClass === 99
            ) {
              this.serv.getDestination().subscribe(cols => {
                this.collection = cols;
                this.filteredDest = this.collection.filter(
                  d => d.Approved === true
                );
                this.toApproveList = this.collection.filter(
                  d => d.Approved === false || d.Approved == null
                );
                this.toRemoveList = this.collection.filter(
                  d => d.RemoveRequest === true
                );
                this.toAssignList = this.collection.filter(
                  d => d.AssignRequest === true
                );
                this.TableBack();
              }, err => hf.handleError(err));
            } else {
              this.serv
                .getUserChainDestination(this.currentUser.userID)
                .subscribe(cols => {
                  this.collection = cols;
                  this.filteredDest = this.collection.filter(
                    d => d.Approved === true
                  );
                  this.toApproveList = this.collection.filter(
                    d => d.Approved === false || d.Approved == null
                  );
                  this.toRemoveList = this.collection.filter(
                    d => d.RemoveRequest === true
                  );
                  this.serv
                    .getUserNotAssignedDestination(this.currentUser.userID)
                    .subscribe(asgn => this.toAssignList = asgn, err => hf.handleError(err) );
                  this.TableBack();
                }, err => hf.handleError(err));
            }
            this.srchObj.DestType = 'Clinic (Doctor)';
            this.srchAprv.DestType = 'Clinic (Doctor)';
            this.srchRmv.DestType = 'Clinic (Doctor)';
            this.srchAsgn.DestType = 'Clinic (Doctor)';
            this.locPos = {
              lat: this.model.GPSLoclat ? this.model.GPSLoclat : 30.14400328,
              lng: this.model.GPSLoclng ? this.model.GPSLoclng : 31.33193496
            };
            this.mrkPos = this.locPos;
          }, err => hf.handleError(err));
        }, err => hf.handleError(err));
      }, err => hf.handleError(err));
    }, err => hf.handleError(err));
  }
  ngAfterViewInit() {
  }

  CreateNew() {
    this.model = new Destination();
    this.model.DestType = this.srchObj.DestType;
    this.serv.getAllDestUsers().subscribe(usr => {
      this.UserList = usr;
      const unique = this.UserList.map(obj => { return obj.LineName });
      this.lines = unique.filter((x, i, a) => a.indexOf(x) === i);
      this.DestUsers = this.UserList.filter(u => u.selected === true).map(ud => {
        return {
          DestID: this.model.DestID,
          UserID: ud.UserID,
          LineID: ud.LineName
        };
      });
    }, err => hf.handleError(err));
    this.showTable = false;
    if (this.currentUser.jobClass < 1) {
      this.Formstate = 'Create';
    } else if (this.currentUser.jobClass === 3) {
      this.Formstate = 'CreateRequest';
    }
    this.headerText = 'Create New Customer';
  }
  EditThis(id: number) {
    if (this.currentUser.jobClass < 1) {
      this.loadDetails(id, 'Edit');
    } else if (this.currentUser.jobClass === 3) {
      this.loadDetails(id, 'Complete Data');
    }
  }
  ShowDetails(id: number) {
    this.loadDetails(id, 'Details');
  }
  Delete(id: number) {
    this.loadDetails(id, 'Delete');
  }
  RequestRemove(id: number) {
    this.loadDetails(id, 'RemoveRequest');
  }
  RequestAssign(id: number) {
    this.loadDetails(id, 'AssignRequest');
  }
  loadDetails(id, state) {
    this.serv.getDestination(id).subscribe(ret => {
      this.model = ret[0];
      this.srvReg.getProvinceRegions(this.model.ProvinceID).subscribe(reg => {
        this.RegionList = reg;
        this.serv.getDestUsers(id).subscribe(usr => {
          this.UserList = usr[0];
          const unique = this.UserList.map(function(obj) { return obj.LineName; });
          this.lines = unique.filter((x, i, a) => a.indexOf(x) === i);
          this.DestUsers = this.UserList
            .filter(u => u.selected === true)
            .map(ud => {
              return {
                DestID: this.model.DestID,
                UserID: ud.UserID,
                LineID: ud.LineName
              };
            });
          this.showTable = false;
          this.Formstate = state;
          this.headerText = state == 'Details' ? 'Customer ' + state : state + ' a Customer';
          this.locPos = {
            lat: this.model.GPSLoclat ? this.model.GPSLoclat : 30.14400328,
            lng: this.model.GPSLoclng ? this.model.GPSLoclng : 31.33193496
          };
          this.zoom = 12;
        }, err => hf.handleError(err));
      }, err => hf.handleError(err));
    }, err => hf.handleError(err));
  }
  TableBack() {
    this.spinner = false
    this.showTable = true;
    this.Formstate = null;
    this.headerText = 'Customers';
    this.errorMessage = null;
    this.zoom = 8;
  }
  TabClicked(option) {
    this.srchObj.DestType = option;
    this.srchAprv.DestType = option;
    this.srchRmv.DestType = option;
    this.srchAsgn.DestType = option;
    this.model.DestType = option;
    this.IMSSelected();
  }
  onProvinceChanged(newobj) {
    if (newobj.target.value) {
      const prov = newobj.target.value
        .split(':')[1]
        .trim()
        .toString();
      this.generateCity();
      this.RegionList = this.AllRegions.filter(
        r => r.ProvinceID == prov && r.Approved === true
      );
      this.model.RegionID = null;
    }
  }
  HandleForm(formvalid) {
    // event.preventDefault();
    if (
      !formvalid &&
      (this.Formstate === 'Create' ||
        this.Formstate === 'CreateRequest' ||
        this.Formstate === 'Edit' ||
        this.Formstate === 'Complete Data')
    ) {
      hf.handleError('Please, Complete the Required Fields')
      return;
    }
    if (this.currentUser.jobClass === 3 && this.Formstate === 'CreateRequest') {
      this.DestUsers.push({
        DestID: this.model.DestID,
        UserID: this.currentUser.userID,
        LineID: this.UserList.find(
          ul => ul.SalesLineID === this.currentUser.lineID
        ).LineName
      });
    }
    if (this.DestUsers.length <= 0 && this.Formstate !== 'Delete' && this.Formstate !== 'AssignRequest') {
      hf.handleError('Please, Select a Medical Rep. for each Sales Line')
      return;
    }
    const newDestination: Destination = this.model;
    newDestination.CreateUser = this.currentUser.userID;
    newDestination.SpecName = this.MedSpecList.find(
      sp => sp.SpecID === this.model.MedSpecID
    ).SpecName;
    newDestination.RegionName = this.RegionList.find(
      sp => sp.RegionID === this.model.RegionID
    ).RegionName;
    newDestination.RegionProvince =
      newDestination.RegionName + ' - ' + newDestination.ProvinceID;
    newDestination.IMS = this.allIMSList.find(
      sp => sp.IMSID === this.model.IMSID
    ).IMS;
    newDestination.ImpName = this.VisImpList.find(
      sp => sp.ImpID === this.model.VisitImpID
    ).ImpName;
    newDestination.VisitsNo = this.VisImpList.find(
      sp => sp.ImpID === this.model.VisitImpID
    ).VisitsNo;
    newDestination.GPSLoclat = parseFloat(
      (<number>this.mrkPos.lat).toPrecision(12)
    );
    newDestination.GPSLoclng = parseFloat(
      (<number>this.mrkPos.lng).toPrecision(12)
    );
    const dest = this.lines
      .map(l => {
        const d = this.DestUsers.filter(du => du.LineID == l);
        if (d.length > 0) {
          return d[0];
        } else {
          return null;
        }
      })
      .filter(du => du != null);
    switch (this.Formstate) {
      case 'Create':
      case 'CreateRequest':
        this.serv.InsertDestination(newDestination, dest).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            // this.ngOnInit();
            newDestination.DestID = ret.set.DestID;
            this.collection.push(newDestination);
            this.IMSSelected();
            this.TableBack();
          }
        }, err => hf.handleError(err));
        break;
      case 'Edit':
      case 'Complete Data':
        this.serv
          .UpdateDestination(newDestination.DestID, newDestination, dest)
          .subscribe(ret => {
            if (ret.error) {
              hf.handleError(ret.error)
            } else if (ret.affected > 0) {
              // this.ngOnInit();
              const indx = this.collection.findIndex(
                dst => dst.DestID === newDestination.DestID
              );
              this.collection.fill(newDestination, indx, indx + 1);
              this.IMSSelected();
              this.TableBack();
            }
          }, err => hf.handleError(err));
        break;
      case 'Delete':
        this.serv.DeleteDestination(newDestination.DestID).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            // this.ngOnInit();
            const indx = this.collection.findIndex(
              dst => dst.DestID === newDestination.DestID
            );
            this.collection.splice(indx, 1);
            this.IMSSelected();
            this.TableBack();
          }
        }, err => hf.handleError(err));
        break;
      case 'RemoveRequest':
        this.serv
          .RemoveDestination(newDestination.DestID, this.currentUser.userID)
          .subscribe(ret => {
            if (ret.error) {
              hf.handleError(ret.error)
            } else if (ret.affected > 0) {
              // this.ngOnInit();
              newDestination.RemoveRequest = true;
              newDestination.RemoveUser = this.currentUser.userID;
              newDestination.RemoveUserName = this.currentUser.UserName;
              const indx = this.collection.findIndex(
                dst => dst.DestID === newDestination.DestID
              );
              this.collection.fill(newDestination, indx, indx + 1);
              this.IMSSelected();
              this.TableBack();
            }
          }, err => hf.handleError(err));
        break;
      case 'AssignRequest':
        this.serv
          .DestinationAssignRequest(
            newDestination.DestID,
            this.currentUser.userID
          )
          .subscribe(ret => {
            if (ret.error) {
              hf.handleError(ret.error)
            } else if (ret.affected > 0) {
              // this.ngOnInit();
              newDestination.AssignRequest = true;
              newDestination.AssignUser = this.currentUser.userID;
              newDestination.AssignUserName = this.currentUser.UserName;
              const indx = this.toAssignList.findIndex(
                dst => dst.DestID === newDestination.DestID
              );
              this.toAssignList.fill(newDestination, indx, indx + 1);
              this.IMSSelected();
              this.TableBack();
            }
          }, err => hf.handleError(err));
        break;
      default:
        break;
    }
  }
  ApproveDestination(id: number) {
    this.serv.ApproveDestination(id, this.currentUser.userID).subscribe(ret => {
      if (ret.error) {
        hf.handleError(ret.error)
      } else if (ret.affected > 0) {
        const tabs = document.getElementsByClassName('tabs');
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].className = 'tabs';
        }
        document.getElementById('tab2').className = 'active';
        this.ngOnInit();
      }
    }, err => hf.handleError(err));
  }
  RemoveDestination(id: number) {
    const userID = this.toRemoveList.find(r => r.DestID === id).RemoveUser;
    this.serv.GrantRemoveDestination(id, userID).subscribe(ret => {
      if (ret.error) {
        hf.handleError(ret.error)
      } else if (ret.affected > 0) {
        const tabs = document.getElementsByClassName('tabs');
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].className = 'tabs';
        }
        document.getElementById('tab2').className = 'active';
        this.ngOnInit();
      }
    }, err => hf.handleError(err));
  }
  AssignDestination(id: number) {
    const userID = this.toAssignList.find(r => r.DestID === id).AssignUser;
    this.serv.GrantAssignDestination(id, userID).subscribe(ret => {
      if (ret.error) {
        hf.handleError(ret.error)
      } else if (ret.affected > 0) {
        const tabs = document.getElementsByClassName('tabs');
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].className = 'tabs';
        }
        document.getElementById('tab2').className = 'active';
        this.ngOnInit();
      }
    }, err => hf.handleError(err));
  }
  SortTable(column: string) {
    const sortCol = column === 'ClassColumn' ? this.ClassColumn : column;
    if (this.orderbyString.indexOf(sortCol) === -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes';
      this.orderbyString =  '+' + sortCol;
    } else if (this.orderbyString.indexOf('-' + sortCol) === -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
      this.orderbyString =  '-' + sortCol;
    } else {
      this.orderbyClass = 'glyphicon glyphicon-sort';
      this.orderbyString =  '';
    }
  }
  userSelected(obj) {
    const index = this.DestUsers.findIndex(d => d.LineID == obj.LineID);
    if (!obj.userID) {
      this.DestUsers.splice(index, index + 1);
      return;
    }
    const destuser = {
      DestID: this.model.DestID,
      UserID: obj.userID,
      LineID: obj.LineID
    };
    if (index >= 0) {
      this.DestUsers.fill(destuser, index, index + 1);
    } else {
      this.DestUsers.push(destuser);
    }
  }
  IMSSelected() {
    if (this.selIMS) {
      this.filteredDest = this.collection.filter(
        d => d.IMSID == this.selIMS && d.Approved === true
      );
      this.toApproveList = this.collection.filter(
        d =>
          d.IMSID == this.selIMS && (d.Approved === false || d.Approved == null)
      );
      this.toRemoveList = this.collection.filter(
        d => d.IMSID == this.selIMS && d.RemoveRequest === true
      );
      if (this.currentUser.jobClass < 1 || this.currentUser.jobClass === 99) {
        this.toAssignList = this.collection.filter(
          d => d.IMSID == this.selIMS && d.AssignRequest === true
        );
      }
    } else {
      this.filteredDest = this.collection.filter(d => d.Approved === true);
      this.toApproveList = this.collection.filter(
        d => d.Approved === false || d.Approved == null
      );
      this.toRemoveList = this.collection.filter(d => d.RemoveRequest === true);
      if (this.currentUser.jobClass < 1 || this.currentUser.jobClass === 99) {
        this.toAssignList = this.collection.filter(
          d => d.AssignRequest === true
        );
      }
    }
  }
  log({ target: marker }, str) {
    this.locPos = {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng()
    };
    this.mrkPos = {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng()
    };
    console.log('new position .... >', this.locPos, str);
  }
  onIdle({ target: map }) {
    if (map.markers) {
      this.mrkPos = {
        lat: map.markers[0].getPosition().lat(),
        lng: map.markers[0].getPosition().lng()
      };
      console.log(this.mrkPos.lat, this.mrkPos.lng, 'idle');
    }
  }
  ChangePosition() {
    if (!this.model.City) {
      this.generateCity();
    }
    // this.locPos = this.ProvinceList.find(p => p.name === this.model.ProvinceID).engName + ', Egypt'
    this.locPos = this.model.City.replace(',', '') + ', Egypt';
  }
  getCurrentPosition() {
    // this.curMap.center = ''
    // this.locPos = '[]'
  }
  generateCity() {
    if (this.model.RegionID) {
      this.model.RegionName = this.RegionList.find(
        sp => sp.RegionID === this.model.RegionID
      ).RegionName;
    }
    this.model.City = `${this.model.ProvinceID
      ? this.model.ProvinceID
      : ''}, ${this.model.RegionName ? this.model.RegionName : ''}`;
    this.generateAddress();
  }
  generateAddress() {
    this.model.Address =
      `${this.model.City ? this.model.City : ''}; ` +
      `${this.model.Street ? this.model.Street : ''}; ` +
      `${this.model.Building ? 'Building: ' + this.model.Building : ''}; ` +
      `${this.model.Floor ? 'Floor: ' + this.model.Floor : ''};` +
      `${this.model.Flat ? 'Flat: ' + this.model.Flat : ''}`;
  }
}
