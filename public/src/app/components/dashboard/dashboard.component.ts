import { Component, OnInit } from '@angular/core';
import { DashboardService, AuthenticationService, UserService } from '../../services';
import { User, CurrentUser } from '../../Models';
import * as hf from '../helpers/helper.functions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  currentUser: CurrentUser = this.auth.getUser();
  collection: User[] = [];
  users: any[] = [];
  seluser: User
  chaintrue = true
  chainfalse = false
  planned
  committed
  today
  promo
  headings = ['This Month Planned Visits', 'This Month Committed Visits',
    "Today's Committed Visits", 'This Month Promo Tools']

  constructor(private srvUser: UserService, private srvDash: DashboardService, private auth: AuthenticationService) { }
  ngOnInit() {
    this.srvUser.getUserChain(this.currentUser.userID).subscribe(cols => {
      this.collection = cols;
      // var unique = this.collection.map(function (obj) { return obj.UserID; });
      this.users = this.collection.filter((x, i, a) => a.indexOf(x) === i)
      this.srvDash.getUserChainCounts(this.currentUser.userID).subscribe(ret => {
        this.planned = ret.planned[0].visCount
        this.committed = ret.committed[0].visCount
        this.today = ret.today[0].visCount
        this.promo = ret.promo[0].promoCount
      }, err => hf.handleError(err))
    }, err => hf.handleError(err))
  }

  UserChanged($user) {
    this.seluser = null
    this.seluser = this.collection.find(u => u.UserID == $user.target.value.trim())
  }
}
