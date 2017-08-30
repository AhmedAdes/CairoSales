import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { topUsers, User, CurrentUser } from '../../../Models';
import { DashboardService, UserService } from '../../../services';
import * as hf from '../../helpers/helper.functions'

@Component({
  selector: 'dash-topusers',
  templateUrl: './topUsers.html'
})

export class TopUsersComponent implements OnInit {

  @Input() currentUser: CurrentUser;
  medReps: any[] = []
  lineID
  lineName
  today: Date
  constructor(private srvDash: DashboardService, private srvUsr: UserService) { }

  ngOnInit() {
    this.today  = new Date()
    var firstDate: Date = new Date(this.today.getFullYear(), this.today.getMonth() , 1)
    var secondDate: Date = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 1)
    var secDate: Date = new Date(secondDate.setDate(secondDate.getDate() - 1))
    this.srvUsr.getuser(this.currentUser.userID).subscribe(usr => {
      var selUsr: User = usr[0]
      this.lineID = selUsr.SalesLineID
      this.lineName = selUsr.LineName
      console.log(firstDate)
      console.log(secDate)
      this.srvDash.getTopUsers(hf.handleDate(firstDate), hf.handleDate(secDate), this.lineID).subscribe(
        cols => this.medReps = cols.map(col =>  {return {UserID: col.UserID,
                                                      UserName: col.UserName,
                                                      Visits: col.CommittedVisits + ' of ' + col.Planned,
                                                      ComVisitPrcnt: col.ComVisitPrcnt,
                                                    photo: col.photo ? "data:image/PNG;base64," + btoa([].reduce.call(new Uint8Array(col.photo.data),function(p,c){return p+String.fromCharCode(c)},'')) : './assets/img/avatar5.png'}})
      )
    })
  }
}
