import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
import { Message } from '../../../Models/message';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  /* tslint:disable */
  selector: '.messagesBox',
  /* tslint:enable */
  styleUrls: ['./messages-box.component.css'],
  templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent implements OnInit {
  // Declaring the variable for binding with initial value

  messages: Observable<any[]>;
  // messages: Message[];
  mesCount: Observable<number>;

  constructor(db: AngularFireDatabase) {
    this.messages = db.list('messages').valueChanges()
    this.mesCount = this.messages.count()
  }

  public ngOnInit() {
    console.log(this.messages)
    console.log(this.messages.subscribe( msg => msg.length))
  }
}
