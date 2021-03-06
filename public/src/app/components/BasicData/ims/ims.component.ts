import { Component, OnInit } from '@angular/core';
import { IMSService, AuthenticationService } from '../../../services';
import { IMSData, CurrentUser } from '../../../Models';
import * as hf from '../../helpers/helper.functions';

@Component({
  selector: 'app-basic-ims',
  templateUrl: './ims.component.html'
})
export class ImsDataComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser();
  collection: IMSData[] = [];
  srchObj: IMSData = new IMSData();
  model: IMSData;
  showTable: boolean;
  Formstate: string;
  headerText: string;
  errorMessage: string;
  orderbyString =  '';
  orderbyClass = 'glyphicon glyphicon-sort';

  constructor(public serv: IMSService, private auth: AuthenticationService) {}

  ngOnInit() {
    this.serv.getIMS().subscribe(
      cols => {
        this.collection = cols;
      },
      err => hf.handleError(err)
    );
    this.TableBack();
  }
  CreateNew() {
    this.model = new IMSData();
    this.showTable = false;
    this.Formstate = 'Create';
    this.headerText = 'Create New Sales IMS';
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
    this.serv.getIMS(id).subscribe(ret => {
      this.model = ret[0];
      this.showTable = false;
      this.Formstate = state;
      this.headerText = state == 'Details' ? 'IMS ' + state : state + ' IMS';
    }, err => hf.handleError(err));
  }
  TableBack() {
    this.showTable = true;
    this.Formstate = null;
    this.headerText = 'IMS Regions';
    this.errorMessage = null;
  }
  HandleForm(event) {
    event.preventDefault();
    const newIMS: IMSData = this.model;
    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertIMS(newIMS).subscribe(
          ret => {
            if (ret.error) {
              hf.handleError(ret.error)
            } else if (ret.affected > 0) {
              this.ngOnInit();
            }
          }, err => hf.handleError(err)
        );
        break;
      case 'Edit':
        this.serv.UpdateIMS(newIMS.IMSID, newIMS).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Delete':
        this.serv.DeleteIMS(newIMS.IMSID).subscribe(ret => {
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
