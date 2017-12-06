import { Component, OnInit } from '@angular/core';
import { RegionService } from '../../services/region.service';
import { Region } from '../../Models/region';
import { provinces } from '../../Models/BasicObjects';
import { CurrentUser } from '../../Models/user';
import { AuthenticationService } from '../../services/auth.service';
import * as hf from '../helpers/helper.functions'

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html'
})
export class RegionComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser();
  collection: Region[] = [];
  srchObj: Region = new Region();
  model: Region;
  showTable: boolean;
  Formstate: string;
  headerText: string;
  errorMessage: string;
  ProvinceList: any[] = provinces;
  orderbyString = '';
  orderbyClass = 'glyphicon glyphicon-sort';

  constructor(public serv: RegionService, private auth: AuthenticationService) { }

  ngOnInit() {
    if (this.currentUser.jobClass < 1) {
      this.serv.getRegion().subscribe(cols => this.collection = cols, err => hf.handleError(err));
    } else {
      this.serv.getUserChainRegions(this.currentUser.userID).subscribe(cols => this.collection = cols, err => hf.handleError(err));
    }
    this.TableBack();
  }

  CreateNew() {
    this.model = new Region();
    this.showTable = false;
    this.Formstate = 'Create';
    this.headerText = 'Create New Province';
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
    this.serv.getRegion(id).subscribe(ret => {
      this.model = ret[0];
      this.showTable = false;
      this.Formstate = state;
      this.headerText = state == 'Details' ? 'Province ' + state : state + ' Province';
    }, err => hf.handleError(err));
  }
  TableBack() {
    this.showTable = true;
    this.Formstate = null;
    this.headerText = 'Provinces';
    this.errorMessage = null;
  }
  HandleForm(event) {
    event.preventDefault();
    const newRegion: Region = this.model;
    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertRegion(newRegion).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Edit':
        this.serv.UpdateRegion(newRegion.RegionID, newRegion).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Delete':
        this.serv.DeleteRegion(newRegion.RegionID).subscribe(ret => {
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
  ApproveRegion(id: number) {
    this.serv.ApproveRegion(id, this.currentUser.userID).subscribe(ret => {
      if (ret.error) {
        hf.handleError(ret.error)
      } else if (ret.affected > 0) {
        this.ngOnInit();
      }
    }, err => hf.handleError(err));
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
