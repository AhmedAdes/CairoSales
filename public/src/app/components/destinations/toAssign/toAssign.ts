import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DestinationService } from '../../../services';
import { Destination, CurrentUser } from '../../../Models';

@Component({
  selector: 'app-dest-assign',
  templateUrl: './toAssign.html'
})
export class DestinationAssignComponent implements OnInit {
  @Input() currentUser: CurrentUser
  @Input() toAssignList: Destination[]
  @Input() srchAsgn: Destination
  @Output() DestReqAssign = new EventEmitter()
  @Output() DestEdit = new EventEmitter()
  @Output() DestDetail = new EventEmitter()
  @Output() DestAssign = new EventEmitter()
  orderbyString =  '+Destination';
  orderbyClass = 'glyphicon glyphicon-sort';
  p: number

  ngOnInit() {

  }
  RequestAssign(id) {
    this.DestReqAssign.emit(id)
  }
  EditThis(id) {
    this.DestEdit.emit(id)
  }
  ShowDetails(id) {
    this.DestDetail.emit(id)
  }
  AssignDestination(id) {
    this.DestAssign.emit(id)
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
