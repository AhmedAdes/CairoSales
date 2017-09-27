import { Component, OnInit } from '@angular/core';
import { DestinationService, RegionService, AuthenticationService, MedSpecService, ImportanceService, IMSService } from '../../services';
import { Destination, provinces, Region, CurrentUser, MedSpec, VisitImportance, DestinationUser, IMSData } from '../../Models';
import { Ng2MapModule } from 'ng2-map';

@Component({
  selector: 'app-dest',
  templateUrl: './destination.component.html'
})
export class DestinationComponent implements OnInit {

  currentUser: CurrentUser = this.auth.getUser();
  collection: Destination[] = [];
  filteredDest: Destination[] = [];
  srchObj: Destination = new Destination();
  model: Destination = new Destination();
  showTable: boolean;
  Formstate: string;
  headerText: string;
  errorMessage: string;
  ProvinceList: any[] = provinces;
  RegionList: Region[] = [];
  MedSpecList: MedSpec[] = [];
  VisImpList: VisitImportance[] = [];
  UserList: DestinationUser[] = [];
  lines: any[] = [];
  DestUsers: any[] = [];
  IMSList: IMSData[] = []
  allIMSList: IMSData[] = []
  orderbyString: string = '-Assigned;-PlanExist;';
  orderbyClass: string = 'glyphicon glyphicon-sort';
  curMonth = new Date().getMonth();
  selIMS: any
  ClassColumn: string = 'Approved'
  locPos: any
  zoom = 8

  constructor(public serv: DestinationService, private srvReg: RegionService, private srvIms: IMSService,
    private srvMed: MedSpecService, private srvImp: ImportanceService,
    private auth: AuthenticationService) { }

  ngOnInit() {

    this.srvMed.getSpec().subscribe(spec => {
      this.MedSpecList = spec;
      this.srvImp.getImp().subscribe(imp => {
        this.VisImpList = imp;
        this.srvIms.getUserIMS(this.currentUser.userID).subscribe(ims => {
          this.IMSList = ims
          this.srvIms.getIMS().subscribe(i => {
            this.allIMSList = i
            if (this.currentUser.jobClass < 1 || this.currentUser.jobClass == 99) {
              this.serv.getDestination().subscribe(cols => {
                this.collection = cols;
                this.filteredDest = this.collection
                this.TableBack();
              })
            } else {
              this.serv.getUserChainDestination(this.currentUser.userID).subscribe(cols => {
                this.collection = cols;
                this.TableBack();
              })
            }
            this.srchObj.DestType = 'Clinic (Doctor)';
            this.locPos = {
              lat: this.model.GPSLoclat ? this.model.GPSLoclat : 30.7891,
              lng: this.model.GPSLoclng ? this.model.GPSLoclng : 31.6011
            }
          })
        })
      })
    }, err => this.errorMessage = err.message);
  }

  CreateNew() {
    this.model = new Destination();
    this.model.DestType = this.srchObj.DestType;
    this.serv.getAllDestUsers().subscribe(usr => {
      this.UserList = usr;
      let unique = this.UserList.map(function (obj) { return obj.LineName; });
      this.lines = unique.filter((x, i, a) => a.indexOf(x) == i)
      this.DestUsers = this.UserList.filter(u => u.selected == true).map(ud => {
        return { DestID: this.model.DestID, UserID: ud.UserID, LineID: ud.LineName }
      })
    })
    this.showTable = false;
    this.Formstate = 'Create';
    this.headerText = 'Create New Customer';
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
    this.serv.getDestination(id).subscribe(ret => {
      this.model = ret[0];
      this.srvReg.getProvinceRegions(this.model.ProvinceID.replace("'", "''")).subscribe(reg => {
        this.RegionList = reg;
        this.serv.getDestUsers(id).subscribe(usr => {
          this.UserList = usr[0];
          let unique = this.UserList.map(function (obj) { return obj.LineName; });
          this.lines = unique.filter((x, i, a) => a.indexOf(x) == i)
          this.DestUsers = this.UserList.filter(u => u.selected == true).map(ud => {
            return { DestID: this.model.DestID, UserID: ud.UserID, LineID: ud.LineName }
          })
          this.showTable = false;
          this.Formstate = state;
          this.headerText = state == 'Details' ? 'Customer ' + state : state + ' Customer';
          this.locPos = {
            lat: this.model.GPSLoclat ? this.model.GPSLoclat : 30.7891,
            lng: this.model.GPSLoclng ? this.model.GPSLoclng : 31.6011
          }
          this.zoom = 12
        })
      })
    }, err => this.errorMessage = err.message);
  }
  TableBack() {
    this.showTable = true;
    this.Formstate = null;
    this.headerText = 'Customers';
    this.errorMessage = null;
    this.zoom = 8
  }
  TabClicked(option) {
    this.srchObj.DestType = option
    this.model.DestType = option
    this.IMSSelected()
  }
  onProvinceChanged(newobj) {
    if (newobj.target.value) {
      let province = newobj.target.value.split(':')[1].trim().replace("'", "''").toString()
      this.generateCity()
      this.srvReg.getApprovedProvinceRegions(province).subscribe(reg => this.RegionList = reg)
    }
  }
  HandleForm(event) {
    event.preventDefault();

    if (this.DestUsers.length <= 0) {
      this.errorMessage = 'Please, Select a Medical Rep. for each Sales Line'
      return
    }
    let newDestination: Destination = this.model;
    newDestination.CreateUser = this.currentUser.userID;
    newDestination.SpecName = this.MedSpecList.filter(sp => sp.SpecID == this.model.MedSpecID)[0].SpecName
    newDestination.RegionName = this.RegionList.filter(sp => sp.RegionID == this.model.RegionID)[0].RegionName
    newDestination.RegionProvince = newDestination.RegionName + ' - ' + newDestination.ProvinceID
    newDestination.IMS = this.allIMSList.filter(sp => sp.IMSID == this.model.IMSID)[0].IMS
    newDestination.ImpName = this.VisImpList.filter(sp => sp.ImpID == this.model.VisitImpID)[0].ImpName
    newDestination.VisitsNo = this.VisImpList.filter(sp => sp.ImpID == this.model.VisitImpID)[0].VisitsNo
    newDestination.GPSLoclat = parseFloat((<number>this.locPos.lat).toPrecision(12))
    newDestination.GPSLoclng = parseFloat((<number>this.locPos.lng).toPrecision(12))
    let dest = this.lines.map(l => {
      let d = this.DestUsers.filter(du => du.LineID == l)
      if (d.length > 0) { return d[0] } else { return null }
    }).filter(du => du != null)
    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertDestination(newDestination, dest).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message;
          } else if (ret.affected > 0) {
            // this.ngOnInit();
            newDestination.DestID = ret.set.DestID
            this.collection.push(newDestination);
            this.IMSSelected()
            this.TableBack();
          }
        }, err => this.errorMessage = err.message);
        break;
      case 'Edit':
        this.serv.UpdateDestination(newDestination.DestID, newDestination, dest).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message;
          } else if (ret.affected > 0) {
            // this.ngOnInit();
            let indx = this.collection.findIndex(dst => dst.DestID == newDestination.DestID)
            this.collection.fill(newDestination, indx, indx + 1)
            this.IMSSelected()
            this.TableBack()
          }
        }, err => this.errorMessage = err.message);
        break;
      case 'Delete':
        this.serv.DeleteDestination(newDestination.DestID).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message;
          } else if (ret.affected > 0) {
            // this.ngOnInit();
            let indx = this.collection.findIndex(dst => dst.DestID == newDestination.DestID)
            this.collection.splice(indx, 1)
            this.IMSSelected()
            this.TableBack()
          }
        }, err => this.errorMessage = err.message);
        break;
      default:
        break;
    }
  }
  ApproveDestination(id: number) {
    this.serv.ApproveDestination(id, this.currentUser.userID).subscribe(ret => {
      if (ret.error) {
        this.errorMessage = ret.error.message;
      } else if (ret.affected > 0) {
        let tabs = document.getElementsByClassName('tabs');
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].className = 'tabs';
        }
        document.getElementById('tab2').className = 'active';
        this.ngOnInit();
      }
    }, err => this.errorMessage = err.message);
  }
  SortTable(column: string) {
    let sortCol = column == 'ClassColumn' ? this.ClassColumn : column
    if (this.orderbyString.indexOf(sortCol) == -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes';
      this.orderbyString = '+' + sortCol;
    } else if (this.orderbyString.indexOf('-' + sortCol) == -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
      this.orderbyString = '-' + sortCol;
    } else {
      this.orderbyClass = 'glyphicon glyphicon-sort';
      this.orderbyString = '';
    }
  }
  userSelected(obj) {
    let index = this.DestUsers.findIndex(d => d.LineID == obj.LineID)
    if (!obj.userID) {
      this.DestUsers.splice(index, index + 1);
      return
    }
    let destuser = { DestID: this.model.DestID, UserID: obj.userID, LineID: obj.LineID }
    if (index >= 0) {
      this.DestUsers.fill(destuser, index, index + 1)
    } else {
      this.DestUsers.push(destuser)
    }
  }
  IMSSelected() {
    if (this.selIMS) {
      this.filteredDest = this.collection.filter(d => d.IMSID == this.selIMS)
    } else {
      this.filteredDest = this.collection
    }
  }
  log({ target: marker }, str) {
    this.locPos = {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng()
    }
    // console.log('new position .... >', this.locPos, str);
  }
  ChangePosition() {
    this.locPos = { lat: 30.680577909715115, lng: 31.590195153125023 }
  }
  generateCity() {
    if (this.model.RegionID) { this.model.RegionName = this.RegionList.filter(sp => sp.RegionID == this.model.RegionID)[0].RegionName }
    this.model.City = `${this.model.ProvinceID ? this.model.ProvinceID : ''}, ${this.model.RegionName ? this.model.RegionName : ''}`
  }
  generateAddress() {
    this.model.Address = `${this.model.City ? this.model.City : ''}; ` +
      `${this.model.Street ? this.model.Street : ''}; ` +
      `${this.model.Building ? 'Building: ' + this.model.Building : ''}; ` +
      `${this.model.Floor ? 'Floor: ' + this.model.Floor : ''};` + `${this.model.Flat ? 'Flat: ' + this.model.Flat : ''}`
  }
}
