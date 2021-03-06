import { Component, OnInit } from '@angular/core';
import { MedSpecService, AuthenticationService } from '../../../services';
import { MedSpec, CurrentUser } from '../../../Models';
import * as hf from '../../helpers/helper.functions';

@Component({
  selector: 'app-spec',
  templateUrl: './medspec.component.html',
  providers: [MedSpecService]
})
export class MedSpecComponent implements OnInit {

  currentUser: CurrentUser = this.auth.getUser();
  collection: MedSpec[] = [];
  searchSpec: MedSpec = new MedSpec();
  model: MedSpec;
  showTable: boolean;
  Formstate: string;
  headerText: string;
  errorMessage: string;
  orderbyString =  '';
  orderbyClass = 'glyphicon glyphicon-sort';

  constructor(public serv: MedSpecService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.serv.getSpec().subscribe(cols => this.collection = cols, err => hf.handleError(err));
    this.TableBack();
  }

  CreateNew() {
    this.model = new MedSpec();
    this.showTable = false;
    this.Formstate = 'Create';
    this.headerText = 'Create New Account';
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
    this.serv.getSpec(id).subscribe(ret => {
      this.model = ret[0];
      this.showTable = false;
      this.Formstate = state;
      this.headerText = state == 'Details' ? 'Account ' + state : state + ' Account';
    }, err => hf.handleError(err))
  }
  TableBack() {
    this.showTable = true;
    this.Formstate = null;
    this.headerText = 'Accounts';
    this.errorMessage = null;
  }
  HandleForm(event) {
    event.preventDefault();
    const newObject: MedSpec = this.model;
    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertSpec(newObject).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Edit':
        this.serv.UpdateSpec(newObject.SpecID, newObject).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Delete':
        this.serv.DeleteSpec(newObject.SpecID).subscribe(ret => {
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
