import { Component, OnInit } from '@angular/core';
import { MessageService, AuthenticationService } from '../../services';
import { Message, CurrentUser } from '../../Models';
import * as hf from '../helpers/helper.functions'

@Component({
  selector: 'app-mssg',
  templateUrl: './messages.component.html'
})
export class MessageComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser();
  collection: Message[] = [];
  srchObj: Message = new Message();
  model: Message;
  showTable: boolean;
  Formstate: string;
  headerText: string;
  errorMessage: string;
  orderbyString = '';
  orderbyClass = 'glyphicon glyphicon-sort';
  expire: string

  constructor( public serv: MessageService, private auth: AuthenticationService ) {}

  ngOnInit() {
    this.serv.getMessage().subscribe(cols => (this.collection = cols));
    this.TableBack();
  }

  CreateNew() {
    this.model = new Message();
    this.expire = hf.handleDate(new Date())
    this.showTable = false;
    this.Formstate = 'Create';
    this.headerText = 'Create New Message';
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
  loadDetails(id, state: string) {
    this.serv.getMessage(id).subscribe(ret => {
      this.model = ret[0];
      this.showTable = false;
      this.Formstate = state;
      this.headerText =
        state === 'Details' ? 'Message ' + state : state + ' Message';
    }, err => (this.errorMessage = err.message));
  }
  TableBack() {
    this.showTable = true;
    this.Formstate = null;
    this.headerText = 'Global Messages';
    this.errorMessage = null;
  }
  HandleForm(event) {
    event.preventDefault();
    const newObj: Message = this.model;
    newObj.authorID = this.currentUser.userID
    newObj.authorName = this.currentUser.UserName
    newObj.createDate = new Date()
    newObj.expireDate = new Date(this.expire)
    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertMessage(newObj).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message;
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        });
        break;
      case 'Edit':
        this.serv.UpdateMessage(newObj.ID, newObj).subscribe(ret => {
          if (ret.error) {
            this.errorMessage = ret.error.message;
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        });
        break;
      case 'Delete':
        this.serv.DeleteMessage(newObj.ID).subscribe(ret => {
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
}
