import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Schedule, CurrentUser, User } from '../../../Models';
import { DashboardService } from '../../../services';
import * as hf from '../../helpers/helper.functions'

@Component({
  selector: 'dash-schedule',
  templateUrl: './schedule.html'
})
export class UserScheduleComponent implements OnInit, OnChanges {
  @Input() currentUser: CurrentUser;
  @Input() user?: User;
  @Input() chain?: boolean;
  userSched: Schedule[] = [];
  appliedClass = true
  dispUser: any
  strdate: string

  constructor(private srvSchd: DashboardService) { }

  ngOnInit() {
    // this.srvSchd.getUserSchedule(this.currentUser.userID).subscribe(scd => this.userSched = scd);
    // this.newSchedule(new Date())

    if (this.chain) {
      this.dispUser = {
        userID: this.user.UserID,
        UserName: this.user.UserName
      }
    } else {
      this.dispUser = {
        userID: this.currentUser.userID,
        UserName: this.currentUser.UserName
      }
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    this.viewBulk()
  }
  newSchedule(datevalue: Date) {
    if (!datevalue) { return }
    this.strdate = hf.handleDate(datevalue)
    this.viewBulk()
  }
  viewBulk() {
    if (!this.strdate) {
      return;
    }
    this.ngOnInit()
    this.srvSchd.getUserScheduleDate(this.dispUser.userID, this.strdate).subscribe(scd => this.userSched = scd[0],
      err => hf.handleError(err));
  }
  changeArrowClass() {
    this.appliedClass = !this.appliedClass
  }
}
