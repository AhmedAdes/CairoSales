import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, VisitService, DestinationService } from '../../../services';
import { User, CurrentUser } from '../../../Models';

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser();
  visCount: number;
  DestCount: number;

  constructor(private auth: AuthenticationService, private router: Router,
    private srvDest: DestinationService, private srvVis: VisitService) {
    // TODO
  }

  public ngOnInit() {
    // TODO
    this.srvDest.getUserChainCount(this.currentUser.userID).subscribe(cont => {
      this.srvVis.getUserVisitsCount(this.currentUser.userID).subscribe(vis => {
        this.DestCount = cont[0].DestCount
        this.visCount = vis[0].visCount
      })
    })
  }

  private logout = (): void => {
    // this.router.navigate(['/']);
    this.auth.logout();
  }
}
