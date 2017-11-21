import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
import { Message } from '../../../Models/message';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService, MessageService } from '../../../services';
import { CurrentUser } from '../../../Models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  /* tslint:disable */
  selector: '.messagesBox',
  /* tslint:enable */
  styleUrls: ['./messages-box.component.css'],
  templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent implements OnInit {
  // Declaring the variable for binding with initial value

  messages: Observable<any>;
  listmsg: any[];
  mesCount: Observable<number>;
  currentUser: CurrentUser = this.auth.getUser();
  model: Message = new Message();
  public modalRef: BsModalRef;
  @ViewChild('content') msgTemp: TemplateRef<any>;

  constructor(
    public serv: MessageService,
    public db: AngularFireDatabase,
    private auth: AuthenticationService,
    private modalService: BsModalService
  ) {
    this.messages = db
      .list('messages', ref =>
        ref.orderByChild('expireDate').startAt(new Date().toISOString())
      )
      .valueChanges()
      .map(msgs =>
        msgs.filter((msg: Message) => {
          if (msg.users) {
            if (
              msg.users.findIndex(
                elm =>
                  JSON.stringify(elm) ===
                  JSON.stringify({ [this.currentUser.userID]: true })
              ) === -1
            ) {
              return false;
            }
            return true;
          }
          return false;
        })
      );
  }

  public ngOnInit() {}
  public POPUP(id: number) {
    this.messages.subscribe(
      msgs => (this.model = msgs.find(msg => msg.ID === id))
    );
    this.modalRef = this.modalService.show(this.msgTemp);
  }
  msgDismiss() {
    this.serv
      .GotItMessage(this.model.ID, this.currentUser.userID)
      .subscribe(ret => {
        this.modalRef.hide();
      });
  }
}
