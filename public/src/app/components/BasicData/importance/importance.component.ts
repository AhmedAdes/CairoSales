import { Component, OnInit } from '@angular/core';
import { VisitImportance, CurrentUser } from '../../../Models';
import { AuthenticationService, ImportanceService } from '../../../services';

@Component({
  selector: 'app-importance',
  templateUrl: './importance.component.html'
})
export class ImportanceComponent implements OnInit {

  constructor(public serv: ImportanceService, private auth: AuthenticationService) { }

  currentUser: CurrentUser = this.auth.getUser();
  collection: VisitImportance[] = [];
  searchImp: VisitImportance = new VisitImportance();
  model: VisitImportance;
  showTable: boolean;
  Formstate: string;
  headerText: string;
  errorMessage: string;
  orderbyString: string = "";
  orderbyClass: string = "glyphicon glyphicon-sort";

  ngOnInit() {
    this.serv.getImp().subscribe(cols => this.collection = cols);
    this.TableBack();
  }

  CreateNew() {
    this.model = new VisitImportance();
    this.showTable = false;
    this.Formstate = 'Create';
    this.headerText = 'Create New Visit Cycle';
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
    this.serv.getImp(id).subscribe(ret => {
      this.model = ret[0];
      this.showTable = false;
      this.Formstate = state;
      this.headerText = state == 'Details' ? 'Visit Cycle ' + state : state + ' Visit Cycle';
    }, err => this.errorMessage = err.message);
  }
  
  TableBack() {
    this.showTable = true;
    this.Formstate = null;
    this.headerText = 'Visit Cycle';
    this.errorMessage = null;
  }
  HandleForm(event) {
    event.preventDefault();
    var newObject: VisitImportance = this.model;
    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertImp(newObject).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message;
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        });
        break;
      case 'Edit':
        this.serv.UpdateImp(newObject.ImpID, newObject).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message;
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        });
        break;
      case 'Delete':
        this.serv.DeleteImp(newObject.ImpID).subscribe(ret => {
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
}
