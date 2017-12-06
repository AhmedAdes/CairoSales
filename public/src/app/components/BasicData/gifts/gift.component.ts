import { Component, OnInit } from '@angular/core';
import { GiftService, AuthenticationService } from '../../../services';
import { Gifts, CurrentUser } from '../../../Models';
import * as hf from '../../helpers/helper.functions';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html'
})
export class GiftComponent implements OnInit {

  currentUser: CurrentUser = this.auth.getUser();
  collection: Gifts[] = [];
  searchGift: Gifts = new Gifts();
  model: Gifts;
  showTable: boolean;
  Formstate: string;
  headerText: string;
  errorMessage: string;
  orderbyString =  '';
  orderbyClass = 'glyphicon glyphicon-sort';

  constructor(public serv: GiftService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.serv.getGift().subscribe(cols => this.collection = cols, err => hf.handleError(err));
    this.TableBack();
  }

  CreateNew() {
    this.model = new Gifts();
    this.showTable = false;
    this.Formstate = 'Create';
    this.headerText = 'Create New Tool';
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
    this.serv.getGift(id).subscribe(ret => {
      this.model = ret[0];
      this.showTable = false;
      this.Formstate = state;
      this.headerText = state == 'Details' ? 'Product ' + state : state + ' Product';
    }, err => hf.handleError(err));
  }

  TableBack() {
    this.showTable = true;
    this.Formstate = null;
    this.headerText = 'Promotional Tools';
    this.errorMessage = null;
  }
  HandleForm(event) {
    event.preventDefault();
    const newObject: Gifts = this.model;
    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertGift(newObject).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Edit':
        this.serv.UpdateGift(newObject.GiftID, newObject).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Delete':
        this.serv.DeleteGift(newObject.GiftID).subscribe(ret => {
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
    if (this.orderbyString.indexOf(column) == -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes';
      this.orderbyString =  '+' + column;
    } else if (this.orderbyString.indexOf('-' + column) == -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
      this.orderbyString =  '-' + column;
    } else {
      this.orderbyClass = 'glyphicon glyphicon-sort';
      this.orderbyString =  '';
    }
  }
}
