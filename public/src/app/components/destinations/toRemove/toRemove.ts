import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DestinationService } from '../../../services';
import { Destination, CurrentUser } from '../../../Models';

@Component({
  selector: 'app-dest-remove',
  templateUrl: './toRemove.html'
})
export class DestinationRemoveComponent implements OnInit {
  @Input() currentUser: CurrentUser
  @Input() toRemoveList: Destination[]
  @Input() srchRmv: Destination
  @Output() DestRemove = new EventEmitter()
  @Output() DestDetail = new EventEmitter()
  @Output() DestDelete = new EventEmitter()
  orderbyString = '+Destination';
  orderbyClass = 'glyphicon glyphicon-sort';
  p: number

  ngOnInit() {

  }
  RemoveDestination(id) {
    this.DestRemove.emit(id)
  }
  ShowDetails(id) {
    this.DestDetail.emit(id)
  }
  Delete(id) {
    this.DestDelete.emit(id)
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
