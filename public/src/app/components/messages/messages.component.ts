import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {
  MessageService,
  UserService,
  AuthenticationService
} from '../../services';
import { Message, CurrentUser } from '../../Models';
import * as hf from '../helpers/helper.functions';
import { Console } from '@angular/core/src/console';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

interface MsgUsers {
  UserID: number;
  UserName: string;
  Checked: boolean;
}

@Component({
  selector: 'app-mssg',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
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
  orderbyString =  '';
  orderbyClass = 'glyphicon glyphicon-sort';
  expire: string;
  userList: MsgUsers[] = [];
  public modalRef: BsModalRef;
  @ViewChild('content') msgTemp: TemplateRef<any>;

  constructor(
    public serv: MessageService,
    private srvUsr: UserService,
    private auth: AuthenticationService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    if (this.currentUser.jobClass === 3) {
      this.serv.getUserMessages(this.currentUser.userID).subscribe(cols => this.collection = cols, err => hf.handleError(err) );
    } else {
      this.serv.getAuthorMessages(this.currentUser.userID).subscribe(cols => this.collection = cols, err => hf.handleError(err) );
    }
    this.TableBack();
  }

  CreateNew() {
    this.model = new Message();
    this.expire = hf.handleDate(new Date());
    this.srvUsr.getUserChain(this.currentUser.userID).subscribe(
      usr => this.userList = usr.map(u => {
          return { UserID: u.UserID, UserName: u.UserName, Checked: false };
        }), err => hf.handleError(err)
    );
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
  PopUpThis(id: number) {
    this.loadDetails(id, 'Popup');
  }
  loadDetails(id, state: string) {
    this.serv.getMessage(id).subscribe(ret => {
      this.serv.getMessageUsers(id).subscribe(ret1 => {
        this.userList = ret1;
        this.model = ret[0];
        this.expire = hf.handleDate(new Date(this.model.expireDate));
        if (state === 'Popup') {
          this.modalRef = this.modalService.show(this.msgTemp);
        } else {
          this.showTable = false;
          this.Formstate = state;
          this.headerText =
            state === 'Details' ? 'Message ' + state : state + ' Message';
        }
      });
    }, err => hf.handleError(err));
  }
  TableBack() {
    this.showTable = true;
    this.Formstate = null;
    this.model = new Message();
    this.headerText = 'Global Messages';
    this.errorMessage = null;
  }
  HandleForm(formValid) {
    if (!formValid) {
      return;
    }
    const newObj: Message = this.model;
    newObj.authorID = this.currentUser.userID;
    newObj.authorName = this.currentUser.UserName;
    newObj.createDate = new Date();
    newObj.expireDate = new Date(this.expire);

    const selUsers = this.userList.filter(c => c.Checked === true);
    if (selUsers.length <= 0 && this.Formstate !== 'Delete') {
      hf.handleError('Please Select Any of the Users')
      return;
    }

    switch (this.Formstate) {
      case 'Create':
        this.serv.InsertMessage(newObj, selUsers).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Edit':
        this.serv.UpdateMessage(newObj.ID, newObj, selUsers).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Delete':
        this.serv.DeleteMessage(newObj.ID).subscribe(ret => {
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
  ToggleAllUsers(value) {
    this.userList.forEach(drg => (drg.Checked = value));
  }
  msgDismiss() {
    this.serv.GotItMessage(this.model.ID, this.currentUser.userID).subscribe(ret => this.modalRef.hide(), err => hf.handleError(err) )
  }
}
