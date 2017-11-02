import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UserService, AuthenticationService } from '../../../services';
import { User, CurrentUser } from '../../../Models';

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
  currentUser: CurrentUser = this.auth.getUser();
  currentUrl: string;
  links: Array<any> = [
    {
      'title': 'Dashboard',
      'icon': 'dashboard',
      'link': ['/home/dashboard']
    },
    {
      'title': 'Startup Data',
      'icon': 'link',
      'disabled': this.currentUser.jobClass >= 1 && this.currentUser.jobClass < 99 ? true : null,
      'sublinks': [
        {
          'title': 'Sales Lines',
          'link': ['/home/basic/lines'],
        },
        {
          'title': 'Products',
          'link': ['/home/basic/drugs'],
        },
        {
          'title': 'Accounts',
          'link': ['/home/basic/specs'],
        },
        {
          'title': 'Visit Cycles',
          'link': ['/home/basic/vimp'],
        },
        {
          'title': 'Promotional Tools Types',
          'link': ['/home/basic/gifts'],
        },
        {
          'title': 'Promotional Tools',
          'link': ['/home/basic/promo'],
        },
        {
          'title': 'IMS Regions',
          'link': ['/home/basic/ims'],
        },
        {
          'title': 'Survey Questions',
          'link': ['/home/basic/srvQ'],
        }
      ]
    },
    {
      'title': 'Users',
      'icon': 'dashboard',
      'link': ['/home/user'],
      'disabled': this.currentUser.jobClass > 2 && this.currentUser.jobClass < 99 ? true : null
    },
    {
      'title': 'Vacations',
      'icon': 'dashboard',
      'link': ['/home/vac'],
      // 'disabled': this.currentUser.jobClass > 2 && this.currentUser.jobClass < 99 ? true : null
    },
    {
      'title': 'Provinces',
      'icon': 'dashboard',
      'link': ['/home/regions']
    },
    {
      'title': 'Customers',
      'icon': 'dashboard',
      'link': ['/home/dest']
    },
    {
      'title': 'Visits',
      'icon': 'dashboard',
      'link': ['/home/visit']
    },
    {
      'title': 'Plans',
      'icon': 'dashboard',
      'link': ['/home/plan'],
      'disabled': this.currentUser.jobClass > 1 && this.currentUser.jobClass < 99 ? true : null
    },
    {
      'title': 'Week Plan',
      'icon': 'dashboard',
      'link': ['/home/wkplan'],
      // 'disabled': this.currentUser.jobClass > 1 && this.currentUser.jobClass < 99 ? true : null
    },
    {
      'title': 'Reports',
      'icon': 'dashboard',
      'link': ['/home/reports/home']
    },
    {
      'title': 'IDI Plant Reports',
      'icon': 'dashboard',
      'link': ['/home/idiReports/home'],
      'disabled': this.currentUser.jobClass > 1 && this.currentUser.jobClass < 99 ? true : null
    },
    {
      'title': 'Contact Us',
      'icon': 'dashboard',
      'link': ['/home/cntct']
    },
    {
      'title': 'Messages',
      'icon': 'dashboard',
      'link': ['/home/msg'],
      'disabled': this.currentUser.jobClass > 1 && this.currentUser.jobClass < 99 ? true : null
    },
  ];
  photo: string
  constructor(private userServ: UserService, public router: Router, private auth: AuthenticationService) {
    // getting the current url
    this.router.events.filter(event => event instanceof NavigationStart).subscribe((e: NavigationStart) => this.currentUrl = e.url);

    this.photo = this.currentUser.photo ? 'data:image/PNG;base64,' + this.currentUser.photo : './assets/img/avatar5.png'
  }
  public ngOnInit() {
    // TODO
  }
}
