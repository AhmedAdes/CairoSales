webpackJsonp([0,4],{

/***/ 1000:
/***/ (function(module, exports) {

module.exports = "<!--<div>\r\n    <ng-sidebar-container>\r\n\r\n        <ng-sidebar [sidebarClass]=\"'demo-sidebar'\" [(opened)]=\"_opened\" [animate]=\"_animate\" [mode]=\"_MODES[1]\" [closeOnClickOutside]=\"_closeOnClick\"\r\n            [position]=\"_POSITIONS[0]\">\r\n            <sidebar></sidebar>\r\n        </ng-sidebar>\r\n\r\n        <header class=\"navbar demo-header\">\r\n            <div class=\"topnav\">\r\n                <div class=\"navbar-brand\">\r\n                    <button (click)=\"_toggleSidebar()\" class=\"demo-header__toggle\">Toggle sidebar</button>\r\n                    <a [routerLink]=\"['dashboard']\" class=\"\">IDI Sales & Marketing</a>\r\n                </div>\r\n                <ul class=\"nav navbar-nav top-nav navbar-right pull-right top-right-nav\">\r\n                    <li><a href=\"javascript:void(0)\">{{currentUser.UserName}}</a></li>\r\n                    <li><a [routerLink]=\"['/logout']\">Logout</a></li>\r\n                </ul>\r\n            </div>\r\n        </header>\r\n        <section class=\"main-container shuffle-animation demo-contents\">\r\n            <router-outlet></router-outlet>\r\n        </section>\r\n\r\n    </ng-sidebar-container>\r\n\r\n</div>-->\r\n\r\n<app-header>{{'LOADING'}} header...</app-header>\r\n\r\n<app-menu-aside>{{'LOADING'}} menu...</app-menu-aside>\r\n\r\n<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n\t<!-- Content Header (Page header) -->\r\n\t<toaster-container [toasterconfig]=\"toastrConfig\"></toaster-container>\r\n\t<app-breadcrumb></app-breadcrumb>\r\n\r\n\t<!-- Main content -->\r\n\t<section class=\"content\">\r\n\t\t<div class=\"box box-default\">\r\n\t\t\t<div class=\"box-body\">\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n<app-footer>{{'LOADING'}} footer...</app-footer>\r\n<!--<app-aside>{{'LOADING'}} control sidebar...</app-aside>-->"

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

module.exports = "<nav class=\"demo-sidebar\">\r\n    <ul class=\"nav-list list-group\" id=\"accordion\">\r\n        <li *ngIf=\"currentUser.jobClass <= 1\">\r\n            <a class=\"list-group-item\" data-toggle=\"collapse\" href=\"#basicMenu\" aria-expanded=\"false\" aria-controls=\"basicMenu\">\r\n                Startup Data\r\n            </a>\r\n        </li>\r\n        <div id=\"basicMenu\" class=\"panel-collapse collapse\">\r\n            <ul class=\"list-group\">\r\n                <li><a [routerLink]=\"['/home/basic/lines']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Sales Lines</a></li>\r\n                <li><a [routerLink]=\"['/home/basic/drugs']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Products</a></li>\r\n                <li><a [routerLink]=\"['/home/basic/specs']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Accounts</a></li>\r\n                <li><a [routerLink]=\"['/home/basic/vimp']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Visit Cycles</a></li>\r\n                <li><a [routerLink]=\"['/home/basic/gifts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Promotional Tools Types</a></li>\r\n                <li><a [routerLink]=\"['/home/basic/promo']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Promotional Tools</a></li>\r\n            </ul>\r\n        </div>\r\n        <li *ngIf=\"currentUser.jobClass <= 1\"><a data-parent=\"#accordion\" [routerLink]=\"['/home/user']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Users</a>            </li>\r\n\r\n        <li><a data-parent=\"#accordion\" [routerLink]=\"['/home/regions']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Provinces</a></li>\r\n\r\n        <li><a data-parent=\"#accordion\" [routerLink]=\"['/home/dest']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Customers</a></li>\r\n\r\n        <li><a data-parent=\"#accordion\" [routerLink]=\"['/home/visit']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Visits</a></li>\r\n\r\n        <li *ngIf=\"currentUser.jobClass <= 1\"><a data-parent=\"#accordion\" [routerLink]=\"['/home/plan']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Plans</a></li>\r\n\r\n        <li *ngIf=\"currentUser.jobClass <= 4\">\r\n            <a class=\"list-group-item\" data-toggle=\"collapse\" href=\"#reportsMenu\" aria-expanded=\"false\" aria-controls=\"reportsMenu\">\r\n                Reports\r\n            </a>\r\n        </li>\r\n        <div id=\"reportsMenu\" class=\"panel-collapse collapse\">\r\n            <ul class=\"list-group\">\r\n                <li><a [routerLink]=\"['/home/reports/visCount']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Visit Counts Comparison</a></li>\r\n                <!--<li><a [routerLink]=\"['/home/basic/drugs']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Products</a></li>\r\n                <li><a [routerLink]=\"['/home/basic/specs']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Accounts</a></li>\r\n                <li><a [routerLink]=\"['/home/basic/vimp']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Visit Cycles</a></li>\r\n                <li><a [routerLink]=\"['/home/basic/gifts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Promotional Tools Types</a></li>\r\n                <li><a [routerLink]=\"['/home/basic/promo']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Promotional Tools</a></li>-->\r\n            </ul>\r\n        </div>\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-inverse navbar-fixed-top topnav\">\r\n    <div class=\"navbar-toggleable-xs clearfix text-center\">\r\n        <button (click)=\"closesidebar()\" class=\"navbar-brand demo-header__toggle\">Toggle sidebar</button>\r\n        <a [routerLink]=\"['dashboard']\" class=\"navbar-brand\">IDI Sales & Marketing</a>\r\n        <ul class=\"nav navbar-nav top-nav navbar-right pull-xs-right top-right-nav\">\r\n            <li><a href=\"javascript:void(0)\">{{currentUser.UserName}}</a></li>\r\n            <li><a [routerLink]=\"['/logout']\">Logout</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 1003:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2\">\r\n            <h1 class=\"text-center\">IDI Sales System</h1>\r\n            <img src=\"./assets/img/SB-admin.png\" width=\"150px\" class=\"user-avatar img-responsive center-block\" />\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                    <label for=\"username\">User Name</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n                    <img *ngIf=\"loading\" alt=\"Image\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                    />\r\n                </div>\r\n                <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n                <a href=\"javascript:void\">forget Password</a>\r\n            </form>\r\n            <div class=\"alert-warning text-center\">\r\n                copy-rights reserved IDI Pharmaceutical 2016\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1004:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n    <div class=\"panel-heading\">\r\n\r\n        <h2> {{headerText}} </h2>\r\n        <button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n        <br><br>\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n            <p>{{errorMessage}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-body\" *ngIf=\"showTable\">\r\n        <table id=\"tblRegions\" class=\"table table-hover table-striped table-responsive\">\r\n            <colgroup>\r\n                <col width=\"25%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"20%\" />\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th> Plan Name <i (click)=\"SortTable('PlanName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('PlanName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Sales Line <i (click)=\"SortTable('LineName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('LineName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> From Date <i (click)=\"SortTable('FromDate')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('FromDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> To Date <i (click)=\"SortTable('ToDate')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('ToDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th></th>\r\n                </tr>\r\n                <tr>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"PlanName\" [(ngModel)]=\"srchObj.PlanName\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"LineName\" [(ngModel)]=\"srchObj.LineName\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchFromDate\" name=\"FromDate\" [(ngModel)]=\"srchObj.FromDate\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchToDate\" name=\"ToDate\" [(ngModel)]=\"srchObj.ToDate\">\r\n                        </div>\r\n                    </th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of (collection | filter:srchObj | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n                    <td>{{item.PlanName}}</td>\r\n                    <td>{{item.LineName}}</td>\r\n                    <td>{{item.FromDate | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>{{item.ToDate | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>\r\n                        <button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.PlanID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n                        <button (click)=\"ShowDetails(item.PlanID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n                        <button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.PlanID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n    </div>\r\n\r\n    <div class=\"panel-body\" *ngIf=\"Formstate\">\r\n        <form [formGroup]=\"inFrm\" (submit)=\"inFrm.valid && HandleForm($event)\" novalidate>\r\n            <div class=\"form-horizontal\">\r\n\r\n                <h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this plan ?</h2>\r\n                <br>\r\n                <div class=\"card\">\r\n                    <h3 class=\"card-header\">Basic Data</h3>\r\n                    <div class=\"card-block\">\r\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['line'].valid }\">\r\n                            <label for=\"SalesLineID\" class=\"control-label col-md-2 col-sm-2\">Sales Line</label>\r\n                            <div class=\"col-md-10 col-sm-10\">\r\n                                <select class=\"form-control\" name=\"SalesLineID\" [(ngModel)]=\"model.SalesLineID\" [formControl]=\"inFrm.controls['line']\">\r\n                                    <option value=\"\">Select a Sales Line...</option>\r\n                                    <option *ngFor=\"let i of lines\" [ngValue]=\"i.SalesLineID\">{{i.LineName}}</option>\r\n                                </select>\r\n                                <div class='error' *ngIf=\"inFrm.controls['line'].touched && !inFrm.controls['line'].valid\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['line'].hasError('required')\">Sales Line is required.</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['fromDate'].valid }\">\r\n                            <label for=\"FromDate\" class=\"control-label col-md-2 col-sm-2\">From Date</label>\r\n                            <div class=\"col-md-10 col-sm-10\">\r\n                                <input id=\"FromDate\" class=\"form-control\" type=\"date\" name=\"FromDate\" [(ngModel)]=\"cnvFromDate\" [formControl]=\"inFrm.controls['fromDate']\">\r\n                                <div class='error' *ngIf=\"(inFrm.controls['fromDate'].touched && !inFrm.controls['fromDate'].valid) || (inFrm.submitted && !inFrm.controls['fromDate'].valid)\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['fromDate'].hasError('required')\">From Date is required.</div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['fromDate'].hasError('inRange')\">this Date falls within a previously recorded plan </div>\r\n                                    <!--<div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['fromDate'].hasError('maxDate')\">From Date must be within two days old.</div>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['toDate'].valid }\">\r\n                            <label for=\"ToDate\" class=\"control-label col-md-2 col-sm-2\">To Date</label>\r\n                            <div class=\"col-md-10 col-sm-10\">\r\n                                <input id=\"ToDate\" class=\"form-control\" type=\"date\" name=\"ToDate\" [(ngModel)]=\"cnvToDate\" [formControl]=\"inFrm.controls['toDate']\">\r\n                                <div class='error' *ngIf=\"(inFrm.controls['toDate'].touched && !inFrm.controls['toDate'].valid) || (inFrm.submitted && !inFrm.controls['toDate'].valid)\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['toDate'].hasError('required')\">To Date is required.</div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['toDate'].hasError('minDate')\">To Date must be Greater Than From Date.</div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['toDate'].hasError('inRange')\">this Date falls within a previously recorded plan </div>\r\n                                    <!--<div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['toDate'].hasError('maxDate')\">To Date must be within two days old.</div>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['plnName'].valid }\">\r\n                            <label for=\"PlanName\" class=\"control-label col-md-2 col-sm-2\">Plan Name</label>\r\n                            <div class=\"col-md-10 col-sm-10\">\r\n                                <input id=\"PlanName\" class=\"form-control\" type=\"text\" name=\"PlanName\" [(ngModel)]=\"model.PlanName\" [formControl]=\"inFrm.controls['plnName']\">\r\n                                <div class='error' *ngIf=\"(inFrm.controls['plnName'].touched && !inFrm.controls['plnName'].valid) || (inFrm.submitted && !inFrm.controls['plnName'].valid)\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['plnName'].hasError('required')\">Plan Name is required.</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h3>Products</h3>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"ToggleAllDrugs(true)\">Select All</button>\r\n                        <button type=\"button\" class=\"btn btn-warning\" (click)=\"ToggleAllDrugs(false)\">Unselect All</button>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <ul>\r\n                            <li *ngFor=\"let item of plnDrugs | orderby:'+DrugName'\">\r\n                                <input type=\"checkbox\" [name]=\"item.DrugID\" [checked]=\"item.Checked\" (change)=\"item.Checked = $event.target.checked\">                                {{item.DrugName}}\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h3>Accounts</h3>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"ToggleAllSpecs(true)\">Select All</button>\r\n                        <button type=\"button\" class=\"btn btn-warning\" (click)=\"ToggleAllSpecs(false)\">Unselect All</button>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <ul>\r\n                            <li *ngFor=\"let item of plnSpecs | orderby:'+SpecName'\">\r\n                                <input type=\"checkbox\" [name]=\"item.SpecID\" [checked]=\"item.Checked\" (change)=\"item.Checked = $event.target.checked\">                                {{item.SpecName}}\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h3>Cycles</h3>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"ToggleAllImps(true)\">Select All</button>\r\n                        <button type=\"button\" class=\"btn btn-warning\" (click)=\"ToggleAllImps(false)\">Unselect All</button>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item\" *ngFor=\"let item of plnImps | orderby:'+ImpName'\">\r\n                                <input type=\"checkbox\" [name]=\"item.ImpID\" [checked]=\"item.Checked\" (change)=\"item.Checked = $event.target.checked\">                                {{item.ImpName}}\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group no-print col-md-offset-1 col-sm-offset-1 col-md-10 col-sm-10\">\r\n                    <button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [disabled]='!inFrm.valid'>Save</button>                    |\r\n                    <button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button>                    |\r\n                    <button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n            <p>{{errorMessage}}</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1005:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n\t<div class=\"panel-heading\">\r\n\r\n\t\t<h2> {{headerText}} </h2>\r\n\t\t<button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n\t\t<br><br>\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n\t\t\t<p>{{errorMessage}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n\t\t<table id=\"tblRegions\" class=\"table table-hover table-striped table-responsive\">\r\n\t\t\t<colgroup>\r\n\t\t\t\t<col width=\"40%\" />\r\n\t\t\t\t<col width=\"20%\" />\r\n\t\t\t\t<col width=\"15%\" />\r\n\t\t\t\t<col width=\"25%\" />\r\n\t\t\t</colgroup>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th> Province Name <i (click)=\"SortTable('RegionName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('RegionName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Governerate <i (click)=\"SortTable('ProvinceID')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('ProvinceID') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchRegionName\" name=\"RegionName\" [(ngModel)]=\"srchObj.RegionName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchProvinceID\" name=\"ProvinceID\" [(ngModel)]=\"srchObj.ProvinceID\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let item of (collection | filter:srchObj | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n\t\t\t\t\t<td>{{item.RegionName}}</td>\r\n\t\t\t\t\t<td>{{item.ProvinceID}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" [disabled]=\"item.Approved\" (click)='ApproveRegion(item.RegionID)' class=\"btn btn-success\" title=\"Approve\"><i class=\"glyphicon glyphicon-ok\"></i></button>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.RegionID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n\t\t\t\t\t\t<button (click)=\"ShowDetails(item.RegionID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.RegionID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n        <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n\t</div>\r\n\r\n\t<div class=\"panel-body\" *ngIf=\"Formstate\">\r\n\t\t<form #f=\"ngForm\" (submit)=\"HandleForm($event)\">\r\n\t\t\t<div class=\"form-horizontal\">\r\n\r\n\t\t\t\t<h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this province ?</h2>\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<div class=\"form-group hidden\">\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"RegionID\" [(ngModel)]=\"model.RegionID\">\r\n\t\t\t\t</div>\t\t\t\t\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"RegionName\" class=\"control-label col-md-2 col-sm-2\">Province Name</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"RegionName\" [(ngModel)]=\"model.RegionName\" #RegionName=\"ngModel\" required>\r\n\t\t\t\t\t\t<div class='error' *ngIf=\"RegionName.touched && !RegionName.valid\">\r\n\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"RegionName.errors.required\">Province Name is required.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"ProvinceID\" class=\"control-label col-md-2 col-sm-2\">Governerate</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"ProvinceID\" [(ngModel)]=\"model.ProvinceID\" #ProvinceID=\"ngModel\" required>\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Governerate...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of ProvinceList\" [ngValue]=\"i.name\">{{i.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<div class='error' *ngIf=\"ProvinceID.touched && !ProvinceID.valid\">\r\n\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"ProvinceID.errors.required\">Governerate is required.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n\t\t\t\t\t<button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [disabled]='!f.valid'>Save</button> |\r\n\t\t\t\t\t<button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button> |\r\n\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 1006:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n\t<div class=\"panel-heading\">\r\n\r\n\t\t<h2> {{headerText}} </h2>\r\n\t\t<button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n\t\t<br><br>\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n\t\t\t<p>{{errorMessage}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n\t\t<table id=\"tblUsers\" class=\"table table-hover table-striped\">\r\n\t\t\t<colgroup>\r\n\t\t\t\t<col width=\"25%\" />\r\n\t\t\t\t<col width=\"20%\" />\r\n\t\t\t\t<col width=\"15%\" />\r\n\t\t\t\t<col width=\"15%\" />\r\n\t\t\t\t<col width=\"10%\" />\r\n\t\t\t\t<col width=\"15%\" />\r\n\t\t\t</colgroup>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th> User Name <i (click)=\"SortTable('UserName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('UserName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Direct Manager <i (click)=\"SortTable('DirectManagerName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('DirectManagerName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Title <i (click)=\"SortTable('JobClass')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('JobClass') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Sales Line <i (click)=\"SortTable('LineName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('LineName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> IMS <i (click)=\"SortTable('IMS')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('IMS') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchUserName\" name=\"UserName\" [(ngModel)]=\"searchUser.UserName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchDirectManagerName\" name=\"DirectManagerName\" [(ngModel)]=\"searchUser.DirectManagerName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchJobClass\" name=\"JobClass\" [(ngModel)]=\"searchUser.JobClass\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchLineName\" name=\"LineName\" [(ngModel)]=\"searchUser.LineName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchIMS\" name=\"IMS\" [(ngModel)]=\"searchUser.IMS\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let item of (collection | filter:searchUser | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n\t\t\t\t\t<td>{{item.UserName}}</td>\r\n\t\t\t\t\t<td>{{item.DirectManagerName}}</td>\r\n\t\t\t\t\t<td>{{item.JobClass}}</td>\r\n\t\t\t\t\t<td>{{item.LineName}}</td>\r\n\t\t\t\t\t<td>{{item.IMS}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" [disabled]=\"item.Approved\" (click)='ApproveUser(item.UserID)' class=\"btn btn-success\"\r\n\t\t\t\t\t\t title=\"Approve User\"><i class=\"glyphicon glyphicon-ok\"></i></button>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.UserID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n\t\t\t\t\t\t<button (click)=\"ShowDetails(item.UserID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n\t\t\t\t\t\t\t aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\tMore Actions <span class=\"caret\"></span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div><button class=\"btn btn-danger\" (click)=\"Delete(item.UserID)\"><i class=\"glyphicon glyphicon-trash\"></i> Delete</button></div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div><button class=\"btn btn-warning\" (click)=\"Disable(item.UserID)\"><i class=\"glyphicon glyphicon-ban-circle\"></i> Disable</button></div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li *ngIf=\"item.JobClass=='Medical Rep.'\">\r\n\t\t\t\t\t\t\t\t\t<div><button class=\"btn btn-default\" (click)=\"Replace(item.UserID)\"><i class=\"glyphicon glyphicon-refresh\"></i> Reallocate</button></div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--<button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.UserID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>-->\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t<pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n\t</div>\r\n\t<div class=\"panel-body\" *ngIf=\"Formstate\">\r\n\r\n\t\t<div *ngIf=\"Formstate != 'Replace'\">\r\n\t\t\t<form [formGroup]=\"inputForm\" (submit)=\"(inputForm.valid || Formstate == 'Delete'|| Formstate == 'Disable') && HandleForm($event)\"\r\n\t\t\t novalidate>\r\n\t\t\t\t<div class=\"form-horizontal\">\r\n\r\n\t\t\t\t\t<h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this user ?</h2>\r\n\t\t\t\t\t<h2 *ngIf=\"Formstate == 'Disable'\">Are you sure you want to disable this user ?</h2>\r\n\t\t\t\t\t<br>\r\n\r\n\t\t\t\t\t<!--<div class=\"form-group hidden\">\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"UserID\" [(ngModel)]=\"model.UserID\" [formControl]=\"inputForm.controls['UserID']\">\r\n\t\t\t\t</div>-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"SalesLineID\" class=\"control-label col-md-2 col-sm-2\">Sales Line</label>\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t\t<select class=\"form-control\" name=\"SalesLineID\" [(ngModel)]=\"model.SalesLineID\" [formControl]=\"inputForm.controls['lineID']\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Sales Line...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of salesLines\" [ngValue]=\"i.SalesLineID\">{{i.LineName}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div class='error' *ngIf=\"inputForm.controls['lineID'].touched\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['lineID'].hasError('required')\">Sales Line is required.</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"UserName\" class=\"control-label col-md-2 col-sm-2\">User Name</label>\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"UserName\" (focusout)=\"CompleteLogin()\" [(ngModel)]=\"model.UserName\" [formControl]=\"inputForm.controls['UserName']\">\r\n\t\t\t\t\t\t\t<div class='error' *ngIf=\"inputForm.controls['UserName'].touched\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['UserName'].hasError('required')\">User name is required.</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"LoginName\" class=\"control-label col-md-2 col-sm-2\">Login Name</label>\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"LoginName\" [(ngModel)]=\"model.LoginName\" [formControl]=\"inputForm.controls['LoginName']\">\r\n\t\t\t\t\t\t\t<div class='error' *ngIf=\"inputForm.controls['LoginName'].touched\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['LoginName'].hasError('required')\">Login Name is required.</div>\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['LoginName'].hasError('minlength')\">Login Name must be minimum 5 characters.</div>\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['LoginName'].hasError('maxlength')\">Login Name must be maximum 200 characters.</div>\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['LoginName'].hasError('alreadyexist')\">Login Name already exist.</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\">\r\n\t\t\t\t\t\t<label for=\"UserPass\" class=\"control-label col-md-2 col-sm-2\">User Password</label>\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"UserPass\" [(ngModel)]=\"model.UserPass\" [formControl]=\"inputForm.controls['UserPass']\">\r\n\t\t\t\t\t\t\t<div class='error' *ngIf=\"inputForm.controls['UserPass'].touched\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['UserPass'].hasError('required')\">User Password is required.</div>\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['UserPass'].hasError('minlength')\">User Password must be minimum 5 characters.</div>\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['UserPass'].hasError('maxlength')\">User Password must be maximum 200 characters.</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\" *ngIf=\"Formstate == 'Create'\">\r\n\t\t\t\t\t\t<label for=\"ConfPass\" class=\"control-label col-md-2 col-sm-2\">Confirm Password</label>\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"ConfPass\" [formControl]=\"inputForm.controls['ConfPass']\">\r\n\t\t\t\t\t\t\t<div class='error' *ngIf=\"inputForm.controls['ConfPass'].touched\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.hasError('mismatchedPasswords')\">Passwords do not match.</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"JobClass\" class=\"control-label col-md-2 col-sm-2\">Title</label>\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t\t<select class=\"form-control\" name=\"JobClass\" [(ngModel)]=\"model.JobClass\" [formControl]=\"inputForm.controls['JobClass']\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Title...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of classList\" [ngValue]=\"i.name\">{{i.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div class='error' *ngIf=\"inputForm.controls['JobClass'].touched\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['JobClass'].hasError('required')\">Title is required.</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"DirectManager\" class=\"control-label col-md-2 col-sm-2\">Direct Manager</label>\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t\t<select class=\"form-control\" name=\"DirectManager\" [(ngModel)]=\"model.DirectManager\" [formControl]=\"inputForm.controls['manager']\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Manager...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of managerList\" [ngValue]=\"i.UserID\">{{i.UserName}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div class='error' *ngIf=\"inputForm.controls['manager'].touched\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['manager'].hasError('required')\">Direct Manager is required.</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"Email\" class=\"control-label col-md-2 col-sm-2\">Email</label>\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"Email\" [(ngModel)]=\"model.Email\" [formControl]=\"inputForm.controls['Email']\">\r\n\t\t\t\t\t\t\t<div class='error' *ngIf=\"inputForm.controls['Email'].touched\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['Email'].hasError('required')\">Email is required.</div>\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['Email'].hasError('invalidEmail')\">Email is invalid; must be lowercase e.g.: john@doe.com</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"Phone\" class=\"control-label col-md-2 col-sm-2\">Phone</label>\r\n\t\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"Phone\" [(ngModel)]=\"model.Phone\" [formControl]=\"inputForm.controls['Phone']\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--<div class=\"form-group\">\r\n\t\t\t\t\t<h3>Regions of Operation</h3>\r\n\t\t\t\t\t<label for=\"Region\" class=\"control-label col-md-2 col-sm-2\">Add Region</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"selectedRegion\" [(ngModel)]=\"selectedRegion\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select a region</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let item of regions\" [ngValue]=\"item.RegionID\">{{item.RegionName}} - {{item.ProvinceID}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\" col-md-2 col-sm-2\">\r\n\t\t\t\t\t\t<button class=\"form-control btn btn-success\" type=\"button\" (click)=\"addRegion()\">Add</button>\r\n\t\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t\t\t<ul class=\"list-group col-md-8 col-md-offset-2\">\r\n\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let item of userRegions; let i = index\">\r\n\t\t\t\t\t\t\t<span class=\"btn btn-xs btn-danger pull-right\" (click)=\"removeRegion(i)\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n\t\t\t\t\t\t\t<span hidden>{{item.RegionID}}</span>\r\n\t\t\t\t\t\t\t<span>{{item.RegionName}} - {{item.ProvinceID}}</span> \r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>-->\r\n\t\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<button type=\"submit\" value=\"Save\" class=\"btn btn-primary\" *ngIf=\"Formstate!='Details' && Formstate!='Delete' && Formstate!='Disable'\"\r\n\t\t\t\t\t\t [disabled]='!inputForm.valid'>Save</button> |\r\n\t\t\t\t\t\t<button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button> |\r\n\t\t\t\t\t\t<button type=\"submit\" value=\"Disable\" class=\"btn btn-warning\" *ngIf=\"Formstate == 'Disable'\">Disable</button> |\r\n\t\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"Formstate == 'Replace'\">\r\n\t\t\t<form [formGroup]=\"replcForm\" (submit)=\"(replcForm.valid || Formstate == 'Replace') && HandleForm($event)\" novalidate>\r\n\t\t\t\t<div class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"UserName\" class=\"control-label col-md-4 col-sm-4\">User Name</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8 col-sm-8\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"UserName\" (focusout)=\"CompleteLogin()\" [(ngModel)]=\"rplcModel.User1Name\" [formControl]=\"replcForm.controls['User1Name']\">\r\n\t\t\t\t\t\t\t<div class='error' *ngIf=\"replcForm.controls['User1Name'].touched\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"replcForm.controls['User1Name'].hasError('required')\">User name is required.</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"replcUser\" class=\"control-label col-md-4 col-sm-4\">Reallocate Customers of</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8 col-sm-8\">\r\n\t\t\t\t\t\t\t<select class=\"form-control\" name=\"replcUser\" [(ngModel)]=\"rplcModel.user2ID\" [formControl]=\"replcForm.controls['User2ID']\">\r\n\t\t\t\t\t\t\t\t<option value=\"\">Select a User...</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let i of replcUsers\" [ngValue]=\"i.UserID\">{{i.UserName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<button type=\"submit\" value=\"Replace\" class=\"btn btn-warning\" *ngIf=\"Formstate == 'Replace'\">Replace</button> |\r\n\t\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 1007:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n    <div class=\"panel-heading\">\r\n\r\n        <h2> {{headerText}} </h2>\r\n        <button *ngIf=\"!Formstate \" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n        <br><br>\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n            <p>{{errorMessage}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-body\" *ngIf=\"showTable\">\r\n        <table id=\"tblVacs\" class=\"table table-hover table-striped table-responsive\">\r\n            <colgroup>\r\n                <col width=\"20%\" />\r\n                <col width=\"20%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"15%\" />\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th> Employee <i (click)=\"SortTable('UserName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('UserName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> IMS <i (click)=\"SortTable('IMS')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('IMS') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Vacation Type <i (click)=\"SortTable('VacType')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('VacType') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> From Date <i (click)=\"SortTable('FromDate')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('FromDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> To Date <i (click)=\"SortTable('ToDate')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('ToDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th></th>\r\n                </tr>\r\n                <tr>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"UserName\" [(ngModel)]=\"srchObj.UserName\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"IMS\" [(ngModel)]=\"srchObj.IMS\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"VacType\" [(ngModel)]=\"srchObj.VacType\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchFromDate\" name=\"FromDate\" [(ngModel)]=\"srchObj.FromDate\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchToDate\" name=\"ToDate\" [(ngModel)]=\"srchObj.ToDate\">\r\n                        </div>\r\n                    </th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <h4 *ngIf=\"collection.length == 0\"><span class=\"label label-warning text-center\">No Data exists to be shown</span></h4>\r\n                <tr *ngFor=\"let item of (collection | filter:srchObj | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n                    <td>{{item.UserName}}</td>\r\n                    <td>{{item.IMS}}</td>\r\n                    <td>{{item.VacType}}</td>\r\n                    <td>{{item.FromDate | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>{{item.ToDate | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>\r\n                        <button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.VacID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n                        <button (click)=\"ShowDetails(item.VacID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n                        <button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.VacID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n        \r\n    </div>\r\n\r\n    <div class=\"panel-body\" *ngIf=\"Formstate\">\r\n        <form [formGroup]=\"inFrm\" (submit)=\"inFrm.valid && HandleForm($event)\" novalidate>\r\n            <div class=\"form-horizontal\">\r\n\r\n                <h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this vacation ?</h2>\r\n                <br>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['UserID'].valid }\">\r\n                    <label for=\"UserID\" class=\"control-label col-md-2 col-sm-2\">User Name</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"UserID\" [(ngModel)]=\"model.UserID\" [formControl]=\"inFrm.controls['UserID']\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select a User...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of userList\" [ngValue]=\"i.UserID\">{{i.UserName}} - {{i.IMS}}</option>\r\n\t\t\t\t\t\t</select>\r\n                        <div class='error' *ngIf=\"inFrm.controls['UserID'].touched && !inFrm.controls['UserID'].valid\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['UserID'].hasError('required')\">User Name is required.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['VacType'].valid }\">\r\n                    <label for=\"VacType\" class=\"control-label col-md-2 col-sm-2\">Vacation Type</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"VacType\" [(ngModel)]=\"model.VacType\" [formControl]=\"inFrm.controls['VacType']\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Vacation Type...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of vacTypeList\" [ngValue]=\"i.name\">{{i.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n                        <div class='error' *ngIf=\"inFrm.controls['VacType'].touched && !inFrm.controls['VacType'].valid\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['VacType'].hasError('required')\">Vacation Type is required.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['fromDate'].valid }\">\r\n                    <label for=\"FromDate\" class=\"control-label col-md-2 col-sm-2\">From Date</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <input id=\"FromDate\" class=\"form-control\" type=\"date\" name=\"FromDate\" [(ngModel)]=\"cnvFromDate\" [formControl]=\"inFrm.controls['fromDate']\">\r\n                        <div class='error' *ngIf=\"(inFrm.controls['fromDate'].touched && !inFrm.controls['fromDate'].valid) || (inFrm.submitted && !inFrm.controls['fromDate'].valid)\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['fromDate'].hasError('required')\">From Date is required.</div>\r\n                            <!--<div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['fromDate'].hasError('maxDate')\">From Date must be within two days old.</div>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['toDate'].valid }\">\r\n                    <label for=\"ToDate\" class=\"control-label col-md-2 col-sm-2\">To Date</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <input id=\"ToDate\" class=\"form-control\" type=\"date\" name=\"ToDate\" [(ngModel)]=\"cnvToDate\" [formControl]=\"inFrm.controls['toDate']\">\r\n                        <div class='error' *ngIf=\"(inFrm.controls['toDate'].touched && !inFrm.controls['toDate'].valid) || (inFrm.submitted && !inFrm.controls['toDate'].valid)\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['toDate'].hasError('required')\">To Date is required.</div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['toDate'].hasError('minDate')\">To Date must be Greater Than From Date.</div>\r\n                            <!--<div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['toDate'].hasError('maxDate')\">To Date must be within two days old.</div>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['Notes'].valid }\">\r\n                    <label for=\"Notes\" class=\"control-label col-md-2 col-sm-2\">Notes</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <textarea rows=\"2\" cols=\"10\" class=\"form-control\" name=\"Notes\" [(ngModel)]=\"model.Notes\" [formControl]=\"inFrm.controls['Notes']\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n                    <button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [disabled]='!inFrm.valid'>Save</button>                    |\r\n                    <button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button>                    |\r\n                    <button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n            <p>{{errorMessage}}</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1008:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"drgform\" (submit)=\"drgform.valid && AddDrug($event)\">\r\n    <div class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n            <label for=\"DrugID\" class=\"control-label col-md-2 col-sm-2\">Product</label>\r\n            <div class=\"col-md-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"DrugID\" [(ngModel)]=\"drugmodel.DrugID\" [formControl]=\"drgform.controls['drugID']\">\r\n                    <option value=\"\">Select a Product...</option>\r\n                    <option *ngFor=\"let item of drugs | orderby:'+DrugName'\" [ngValue]=\"item.DrugID\">{{item.DrugName}}</option>\r\n                </select>\r\n                <div class=\"alert alert-danger\" *ngIf=\"(drgform.submitted || drgform.controls['drugID'].touched)  && !drgform.controls['drugID'].valid\">\r\n                    <span *ngIf=\"drgform.controls['drugID'].hasError('required')\">Product is Required</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"Comment\" class=\"control-label col-md-2 col-sm-2\">Comment</label>\r\n            <div class=\"col-md-10 col-sm-10\">\r\n                <textarea rows=\"2\" cols=\"10\" class=\"form-control\" type=\"text\" name=\"Comment\" [(ngModel)]=\"drugmodel.Comment\" [formControl]=\"drgform.controls['comment']\"></textarea> \r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!drgform.valid\">Add Drug</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ 1009:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"gftform\" (submit)=\"gftform.valid && AddGift($event)\">\r\n    <div class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n            <label for=\"GiftID\" class=\"control-label col-md-2 col-sm-2\">Promo Type</label>\r\n            <div class=\"col-md-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"GiftID\" [(ngModel)]=\"giftmodel.GiftID\" [formControl]=\"gftform.controls['giftID']\" (change)=\"ongiftChange($event)\">\r\n                    <option value=\"\">Select a Promo Type...</option>\r\n                    <option *ngFor=\"let item of gifts\" [ngValue]=\"item.GiftID\">{{item.GiftName}}</option>\r\n                </select>\r\n                <div class=\"alert alert-danger\" *ngIf=\"(gftform.submitted || gftform.controls['giftID'].touched)  && !gftform.controls['giftID'].valid\">\r\n                    <span *ngIf=\"gftform.controls['giftID'].hasError('required')\">Promo Type is Required</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"ToolID\" class=\"control-label col-md-2 col-sm-2\">Promo Tool</label>\r\n            <div class=\"col-md-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"ToolID\" [(ngModel)]=\"giftmodel.ToolID\" [formControl]=\"gftform.controls['toolID']\">\r\n                    <option value=\"\">Select a Promo Tool...</option>\r\n                    <option *ngFor=\"let item of dispTools\" [ngValue]=\"item.ToolID\">{{item.ToolName}}</option>\r\n                </select>\r\n                <div class=\"alert alert-danger\" *ngIf=\"(gftform.submitted || gftform.controls['toolID'].touched)  && !gftform.controls['toolID'].valid\">\r\n                    <span *ngIf=\"gftform.controls['toolID'].hasError('required')\">Promo Tool is Required</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <label for=\"Qty\" class=\"control-label col-md-2 col-sm-2\">Quantity</label>\r\n            <div class=\"col-md-10 col-sm-10\">\r\n                <input class=\"form-control\" type=\"number\" name=\"Qty\" [(ngModel)]=\"giftmodel.Qty\" [formControl]=\"gftform.controls['qty']\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"(gftform.submitted || gftform.controls['qty'].touched)  && !gftform.controls['qty'].valid\">\r\n                    <span *ngIf=\"gftform.controls['qty'].hasError('required')\">Quantity is Required</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!gftform.valid\">Add Tool</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ 1010:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"userVisits\">\r\n    <h3 class=\"card-title text-left\">\r\n        <a [id]=\"'toggle'+UserID\" class=\"btn btn-warning\" data-toggle=\"collapse\" [href]=\"'#'+UserID\" aria-expanded=\"true\" [attr.aria-controls]=\"UserID\" (click)=\"changeArrowClass()\">\r\n            <i class=\"glyphicon\" [ngClass]=\"appliedClass ? 'glyphicon-circle-arrow-up' : 'glyphicon-circle-arrow-down'\"></i>\r\n        </a>\r\n        {{userName}} visits\r\n    </h3>\r\n    <div [id]=\"UserID\" class=\"panel-collapse collapse in\">\r\n        <div class=\"card-block\">\r\n            <table id=\"tblVisits\" class=\"table table-hover table-striped\">\r\n                <colgroup>\r\n                    <col width=\"20%\" />\r\n                    <!--<col width=\"10%\" />-->\r\n                    <col width=\"20%\" />\r\n                    <col width=\"20%\" />\r\n                    <col width=\"10%\" />\r\n                    <col width=\"15%\" />\r\n                    <col width=\"15%\" />\r\n                </colgroup>\r\n                <thead>\r\n                    <tr>\r\n                        <th> Visit Date <i (click)=\"SortTable('VisitDate')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('VisitDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                        <!--<th> Time <i (click)=\"SortTable('VisitTime')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('VisitTime') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>-->\r\n                        <th> Customer <i (click)=\"SortTable('Destination')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('Destination') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                        <th> Province <i (click)=\"SortTable('RegionName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('RegionName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                        <th> Speciality <i (click)=\"SortTable('SpecName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('SpecName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                        <th> Visit Type <i (click)=\"SortTable('VisitType')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('VisitType') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                        <th></th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"srchVisitDate\" name=\"VisitDate\" [(ngModel)]=\"srchObj.VisitDate\">\r\n                            </div>\r\n                        </th>\r\n                        <!--<th>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"srchVisitTime\" name=\"VisitTime\" [(ngModel)]=\"srchObj.VisitTime\">\r\n                            </div>\r\n                        </th>-->\r\n                        <th>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"srchDestination\" name=\"Destination\" [(ngModel)]=\"srchObj.Destination\">\r\n                            </div>\r\n                        </th>\r\n                        <th>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"srchRegionName\" name=\"RegionName\" [(ngModel)]=\"srchObj.RegionName\">\r\n                            </div>\r\n                        </th>\r\n                        <th>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"srchSpecName\" name=\"SpecName\" [(ngModel)]=\"srchObj.SpecName\">\r\n                            </div>\r\n                        </th>\r\n                        <th>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"srchVisitType\" name=\"VisitType\" [(ngModel)]=\"srchObj.VisitType\">\r\n                            </div>\r\n                        </th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of (userVisits | filter:srchObj | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n                        <td>{{item.VisitDate | date: 'dd/MM/yyyy'}}</td>\r\n                        <!--<td>{{item.VisitTime | date:'shortTime'}}</td>-->\r\n                        <td>{{item.Destination}}</td>\r\n                        <td>{{item.RegionName}} - {{item.ProvinceID}}</td>\r\n                        <td>{{item.SpecName}}</td>\r\n                        <td>{{item.VisitType}}</td>\r\n                        <td>\r\n                            <!--<button *ngIf=\"currentUser.jobClass < 4 && currentUser.userID == item.UserID\" (click)='onEdit(item.VisitID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>-->\r\n                            <button (click)=\"onDetail(item.VisitID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n                            <button *ngIf=\"currentUser.userID == item.UserID\" (click)=\"onDelete(item.VisitID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n                        </td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n            <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1011:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n\n        <h2> {{headerText}} </h2>\n        <button *ngIf=\"!Formstate\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\n        <br *ngIf=\"!Formstate\">\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\n            <p>{{errorMessage}}</p>\n        </div>\n    </div>\n    <div class=\"card-block\" *ngIf=\"showTable\">\n        <div class=\"form-group row alert alert-success\" style=\"margin: 10px 5px; padding: 5px;\" *ngIf=\"currentUser.jobClass != 3\">\n            <label for=\"userID\" class=\"control-lable col-md-3 text-right\">Select a User</label>\n            <div class=\"col-md-9\">\n                <select class=\"form-control\" name=\"userID\" (change)=\"UserChanged($event)\">\n                    <option value=\"null\">Select a User...</option>\n                    <option *ngFor=\"let user of users\" [ngValue]=\"user.UserID\">{{user.UserName}}</option>\n                </select>\n            </div>\n        </div>\n        <div *ngIf=\"selUser\">\n            <visit-uservisits [UserID]=\"selUser.UserID\" [currentUser]=\"currentUser\" [collection]=\"collection\" (DeleteEvent)=\"Delete($event)\" (DetailEvent)=\"ShowDetails($event)\"\n                (EditEvent)=\"EditThis($event)\">\n            </visit-uservisits>\n        </div>\n    </div>\n\n    <div class=\"card-block\" *ngIf=\"Formstate\">\n        <form [formGroup]=\"inFrm\" (submit)=\"inFrm.valid && HandleForm($event)\" novalidate>\n            <div class=\"form-horizontal\">\n\n                <h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this visit ?</h2>\n                <br>\n                <div class=\"card\">\n                    <h3 class=\"card-header alert alert-info\" style=\"margin: 10px 5px; padding: 5px;\">Basic Data</h3>\n                    <div class=\"card-block\">\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['visType'].valid }\">\n                            <label for=\"VisitType\" class=\"control-label col-md-2 col-sm-2\">Visit Type</label>\n                            <div class=\"col-md-10 col-sm-10\">\n                                <select class=\"form-control\" name=\"VisitType\" [(ngModel)]=\"model.VisitType\" [formControl]=\"inFrm.controls['visType']\">\n                                    <option value=\"\">Select a Visit Type...</option>\n                                    <option *ngFor=\"let i of visTypes\" [ngValue]=\"i.name\">{{i.name}}</option>\n                                </select>\n                                <div class='error' *ngIf=\"inFrm.controls['visType'].touched && !inFrm.controls['visType'].valid\">\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['visType'].hasError('required')\">Visit Type is required.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"model.VisitType == 'Coaching Visit-With Manager'\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['accompanyID'].valid }\">\n                            <label for=\"AccompanyID\" class=\"control-label col-md-2 col-sm-2\">Accompanied By</label>\n                            <div class=\"col-md-10 col-sm-10\">\n                                <select class=\"form-control\" name=\"AccompanyID\" [(ngModel)]=\"model.AccompanyID\" [formControl]=\"inFrm.controls['accompanyID']\">\n                                    <option value=\"\">Select a Manger...</option>\n                                    <option *ngFor=\"let i of managers\" [ngValue]=\"i.UserID\">{{i.UserName}} - {{i.JobClass}}</option>\n                                </select>\n                                <div class='error' *ngIf=\"inFrm.controls['accompanyID'].touched && !inFrm.controls['accompanyID'].valid\">\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['accompanyID'].hasError('mngrRequired')\">Accompanied By field is required.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['visDate'].valid }\">\n                            <label for=\"VisitDate\" class=\"control-label col-md-2 col-sm-2\">Visit Date</label>\n                            <div class=\"col-md-10 col-sm-10\">\n                                <input id=\"VisitDate\" class=\"form-control\" type=\"date\" name=\"VisitDate\" [(ngModel)]=\"cnvVisitDate\" [formControl]=\"inFrm.controls['visDate']\"\n                                    [min]=\"yesterday\" [max]=\"thisday\">\n                                <div class='error' *ngIf=\"(inFrm.controls['visDate'].touched && !inFrm.controls['visDate'].valid) || (inFrm.submitted && !inFrm.controls['visDate'].valid)\">\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['visDate'].hasError('required')\">Visit Date is required.</div>\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['visDate'].hasError('minDate')\">Visit Date must be within two days old.</div>\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['visDate'].hasError('maxDate')\">Visit Date must be within two days old.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--<div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['visTime'].valid }\">\n                            <label for=\"VisitTime\" class=\"control-label col-md-2 col-sm-2\">Visit Time</label>\n                            <div class=\"col-md-10 col-sm-10\">\n                                <input class=\"form-control\" type=\"time\" name=\"VisitTime\" [(ngModel)]=\"cnvVisitTime\" [formControl]=\"inFrm.controls['visTime']\">\n                                <div class='error' *ngIf=\"(inFrm.controls['visTime'].touched && !inFrm.controls['visTime'].valid) || (inFrm.submitted && !inFrm.controls['visTime'].valid)\">\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['visTime'].hasError('required')\">Visit Time is required.</div>\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['visTime'].hasError('maxTime')\">Visit Time is Invalid.</div>\n                                </div>\n                            </div>\n                        </div>-->\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['region'].valid }\">\n                            <label for=\"RegionID\" class=\"control-label col-md-2 col-sm-2\">Regions</label>\n                            <div class=\"col-md-10 col-sm-10\">\n                                <select class=\"form-control\" name=\"RegionID\" [(ngModel)]=\"model.RegionID\" [formControl]=\"inFrm.controls['region']\" (change)=\"onRegChange($event)\">\n                                    <option value=\"\">Select a Province...</option>\n                                    <option *ngFor=\"let i of regions\" [ngValue]=\"i.RegionID\">{{i.RegionName}} - {{i.ProvinceID}}</option>\n                                </select>\n                                <div class='error' *ngIf=\"inFrm.controls['region'].touched && !inFrm.controls['region'].valid\">\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['region'].hasError('required')\">Province is required.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-md-offset-2 col-sm-offset-2\">\n                                <label class=\"radio-inline control-label col-md-5 col-sm-5\">\n                                    <input type=\"radio\" name=\"DestType\" (change)=\"onDestTypeChange($event, 'Clinic (Doctor)')\" [checked]=\"model.DestType == 'Clinic (Doctor)'\">Clinic (Doctor)\n                                </label>\n                                <label class=\"radio-inline control-label col-md-5 col-sm-5\">\n                                    <input type=\"radio\" name=\"DestType\" (change)=\"onDestTypeChange($event, 'Pharmacy')\" [checked]=\"model.DestType == 'Pharmacy'\">Pharmacy\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['destination'].valid }\">\n                            <label for=\"DestID\" class=\"control-label col-md-2 col-sm-2\">Customer</label>\n                            <div class=\"col-md-10 col-sm-10\">\n                                <select class=\"form-control\" name=\"DestID\" [(ngModel)]=\"model.DestID\" [formControl]=\"inFrm.controls['destination']\" (change)=\"onDestChange($event)\">\n                                    <option value=\"\">Select a Customer...</option>\n                                    <option *ngFor=\"let i of ViewDests\" [ngValue]=\"i.DestID\">{{i.Destination}}</option>\n                                </select>\n                                <div class='error' *ngIf=\"(inFrm.controls['destination'].touched && !inFrm.controls['destination'].valid) || (inFrm.submitted && !inFrm.controls['destination'].valid)\">\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['destination'].hasError('required')\">Customer is required.</div>\n                                    <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['destination'].hasError('maxVisit')\">this Customer has been visited the max numbers of visits allowed this month.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"GeneralComment\" class=\"control-label col-md-2 col-sm-2\">Overall Comments</label>\n                            <div class=\"col-md-10 col-sm-10\">\n                                <textarea rows=\"4\" cols=\"10\" class=\"form-control\" type=\"text\" name=\"GeneralComment\" [(ngModel)]=\"model.GeneralComment\" [formControl]=\"inFrm.controls['generalComment']\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <h3 class=\"card-header alert alert-success\" style=\"margin: 10px 5px; padding: 5px;\">Products</h3>\n                    <div class=\"card-block\">\n                        <visit-drugs *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [currentUser]=\"currentUser\" [visDrugs]=\"VisDrugs\" [drugmodel]=\"visDrugModel\"\n                            (drugChanged)=\"drugChangeEvent($event)\"></visit-drugs>\n                    </div>\n                    <table id=\"tblProducts\" class=\"table table-hover table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Product Name</th>\n                                <th>Comment</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let item of VisDrugs; let i = index\">\n                                <td>{{item.DrugName}}</td>\n                                <td>{{item.Comment}}</td>\n                                <td><button type=\"button\" class=\"btn btn-default\" (click)=\"DeleteDrug(i)\">Delete</button></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"card\">\n                    <h3 class=\"card-header alert alert-warning\" style=\"margin: 10px 5px; padding: 5px;\">Promotional Tools</h3>\n                    <div class=\"card-block\">\n                        <visit-gifts *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [visGifts]=\"VisGifts\" [visDrugs]=\"VisDrugs\" [giftmodel]=\"visGiftModel\"\n                            [drgsChanged]=\"drgsChanged\" (doneFill)=\"fillDone($event)\"></visit-gifts>\n                    </div>\n                    <table id=\"tblGifts\" class=\"table table-hover table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Promo Type</th>\n                                <th>Promo Tool</th>\n                                <th>Quantity</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let item of VisGifts; let i = index\">\n                                <td>{{item.GiftName}}</td>\n                                <td>{{item.ToolName}}</td>\n                                <td>{{item.Qty}}</td>\n                                <td><button type=\"button\" class=\"btn btn-default\" (click)=\"DeleteGift(i)\">Delete</button></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\n                    <button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [disabled]='!inFrm.valid || inFrm.submitted'>Save</button>                    |\n                    <button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button>                    |\n                    <button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\n                </div>\n            </div>\n        </form>\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\n            <p>{{errorMessage}}</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 1012:
/***/ (function(module, exports) {

module.exports = "<!-- Main Footer -->\n<footer class=\"main-footer\">\n\t<!-- To the right -->\n\t<!--<div class=\"pull-right hidden-xs\">Anything you want</div>-->\n\t<!-- Default to the left -->\n\t<strong>Copyright &copy; 2016 <a href=\"#\" routerLink=\"/\">IDI Pharmaceutical</a>.\n\t</strong> All rights reserved.\n</footer>\n"

/***/ }),

/***/ 1013:
/***/ (function(module, exports) {

module.exports = "<!-- Main Header -->\n<header class=\"main-header\">\n\t<!-- Logo -->\n\t<a href=\"javascript:void(0)\" routerLink=\"/home/dashboard\" class=\"logo\"> <!-- mini logo for sidebar mini 50x50 pixels -->\n\t\t<span class=\"logo-mini\"><b>IDI</b></span> <!-- logo for regular state and mobile devices -->\n\t\t<span class=\"logo-lg\"><b>IDI</b>-Sales</span>\n\t</a>\n\t<!-- Header Navbar -->\n\t<nav class=\"navbar navbar-static-top\" role=\"navigation\">\n\t\t<!-- Sidebar toggle button-->\n\t\t<a href=\"javascript:void(0)\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\"\n\t\t\trole=\"button\"> <span class=\"sr-only\">Toggle navigation</span>\n\t\t</a>\n\t\t<!-- Navbar Right Menu -->\n\t\t<div class=\"navbar-custom-menu\">\n\t\t\t<ul class=\"nav navbar-nav\" *ngIf=\"currentUser\">\n\t\t\t\t<!-- Messages: style can be found in dropdown.less-->\n\t\t\t\t<!--<li class=\"dropdown messages-menu messagesBox\"></li>-->\n\t\t\t\t<!-- Notifications Menu -->\n\t\t\t\t<!--<li class=\"dropdown notifications-menu notificationsBox\"></li>-->\n\t\t\t\t<!-- Tasks Menu -->\n\t\t\t\t<!--<li class=\"dropdown tasks-menu tasksBox\"></li>-->\n\t\t\t\t<!-- User Account Menu -->\n\t\t\t\t<li class=\"dropdown user user-menu userBox\"></li>\n\t\t\t\t<!-- Control Sidebar Toggle Button -->\n\t\t\t\t<li><a href=\"javascript:void(0)\" data-toggle=\"control-sidebar\"\n\t\t\t\t\tclass=\"toggle-sidebar-right\"><i class=\"fa fa-gears\"></i></a></li>\n\t\t\t</ul>\n\t\t\t<ul class=\"nav navbar-nav\" *ngIf=\"!currentUser\">\n\t\t\t\t<li><a [routerLink]=\"['/login']\"><i\n\t\t\t\t\t\tclass=\"fa fa-sign-in\"></i> Login</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</header>\n"

/***/ }),

/***/ 1014:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\" *ngIf=\"display\">\n  <h1>\n    {{ header }}\n    <small>{{ description }}</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <template let-item ngFor [ngForOf]=\"levels\">\n      <li [class.active]=\"item.active\">\n        <a [routerLink]=\"item.link\">\n          <i class=\"fa fa-{{item.icon}}\"></i> {{ item.title }}\n        </a>\n      </li>\n    </template>\n  </ol>\n</section>\n"

/***/ }),

/***/ 1015:
/***/ (function(module, exports) {

module.exports = "<!-- Control Sidebar -->\n<aside class=\"control-sidebar control-sidebar-dark\">\n\t<!-- Create the tabs -->\n\t<ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n\t\t<li class=\"active\"><a href=\"#control-sidebar-home-tab\"\n\t\t\tdata-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n\t\t<li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i\n\t\t\t\tclass=\"fa fa-gears\"></i></a></li>\n\t</ul>\n\t<!-- Tab panes -->\n\t<div class=\"tab-content\">\n\t\t<!-- Home tab content -->\n\t\t<div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\n\t\t\t<h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n\t\t\t<ul class=\"control-sidebar-menu\">\n\t\t\t\t<li><a href=\"javascript::;\"> <i\n\t\t\t\t\t\tclass=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\t\t\t\t\t\t<div class=\"menu-info\">\n\t\t\t\t\t\t\t<h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\t\t\t\t\t\t\t<p>Will be 23 on April 24th</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t</a></li>\n\t\t\t</ul>\n\t\t\t<!-- /.control-sidebar-menu -->\n\n\t\t\t<h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n\t\t\t<ul class=\"control-sidebar-menu\">\n\t\t\t\t<li><a href=\"javascript::;\">\n\t\t\t\t\t\t<h4 class=\"control-sidebar-subheading\">\n\t\t\t\t\t\t\tCustom Template Design <span\n\t\t\t\t\t\t\t\tclass=\"label label-danger pull-right\">70%</span>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<div class=\"progress progress-xxs\">\n\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</a></li>\n\t\t\t</ul>\n\t\t\t<!-- /.control-sidebar-menu -->\n\n\t\t</div>\n\t\t<!-- /.tab-pane -->\n\t\t<!-- Stats tab content -->\n\t\t<div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab\n\t\t\tContent</div>\n\t\t<!-- /.tab-pane -->\n\t\t<!-- Settings tab content -->\n\t\t<div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n\t\t\t<form method=\"post\">\n\t\t\t\t<h3 class=\"control-sidebar-heading\">General Settings</h3>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-sidebar-subheading\"> Report panel\n\t\t\t\t\t\tusage <input type=\"checkbox\" class=\"pull-right\" checked>\n\t\t\t\t\t</label>\n\t\t\t\t\t<p>Some information about this general settings option</p>\n\t\t\t\t</div>\n\t\t\t\t<!-- /.form-group -->\n\t\t\t</form>\n\t\t</div>\n\t\t<!-- /.tab-pane -->\n\t</div>\n</aside>\n<!-- /.control-sidebar -->\n<!-- Add the sidebar's background. This div must be placed\n               immediately after the control sidebar -->\n<div class=\"control-sidebar-bg\"></div>\n"

/***/ }),

/***/ 1016:
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\n<aside class=\"main-sidebar\">\n\t<!-- sidebar: style can be found in sidebar.less -->\n\t<section class=\"sidebar\" *ngIf=\"currentUser\">\n\t\t<!-- Sidebar user panel (optional) -->\n\t\t<div class=\"user-panel\">\n\t\t\t<div class=\"pull-left image\">\n\t\t\t\t<img [src]=\"currentUser.photo\" class=\"img-circle\" [alt]=\"currentUser.UserName\">\n\t\t\t</div>\n\t\t\t<div class=\"pull-left info\">\n\t\t\t\t<p>{{currentUser.UserName}}</p>\n\t\t\t\t<!-- Status -->\n\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- search form (Optional) -->\n\t\t<!--<form action=\"#\" method=\"get\" class=\"sidebar-form\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\"> <span class=\"input-group-btn\">\n\t\t\t\t\t<button type=\"submit\" name=\"search\" id=\"search-btn\"\n\t\t\t\t\t\tclass=\"btn btn-flat\">\n\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>-->\n\t\t<!-- /.search form -->\n\t\t<!-- Sidebar Menu -->\n\t\t<ul class=\"sidebar-menu\">\n\t\t\t<li class=\"header\">NAVIGATION</li>\n\t\t\t<template ngFor let-item [ngForOf]=\"links\">\n\t\t\t\t<template [ngIf]=\"!item.sublinks && !item.disabled\">\n\t\t\t\t\t<li [class.active]=\"item.link[0] === current_url\">\n\t\t\t\t\t\t<a *ngIf=\"!item.external\" [routerLink]=\"item.link\"> <i class=\"text-danger fa fa-{{item.icon}}\"></i> <span>{{item.title}}</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a *ngIf=\"item.external\" [href]=\"item.link\" [target]=\"item.target\">\n\t\t\t\t\t\t\t<i class=\"text-danger fa fa-{{item.icon}}\"></i> <span>{{item.title}}</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</template>\n\t\t\t\t<template [ngIf]=\"item.sublinks && !item.disabled\">\n\t\t\t\t\t<li class=\"treeview\">\n\t\t\t\t\t\t<a href=\"#\"> <i *ngIf=\"item.icon\" class=\"text-danger fa fa-{{item.icon}}\"></i> <span>{{item.title}}</span> <i class=\"fa fa-angle-left pull-right\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"treeview-menu\">\n\t\t\t\t\t\t\t<template ngFor let-subitem [ngForOf]=\"item.sublinks\">\n\t\t\t\t\t\t\t\t<li [class.active]=\"subitem.link[0] === current_url\">\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"!subitem.external\" [routerLink]=\"subitem.link\"> <i *ngIf=\"subitem.icon\" class=\"text-danger fa fa-{{subitem.icon}}\"></i> <span>{{subitem.title}}</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"subitem.external\" [href]=\"subitem.link\" [target]=\"subitem.target\"> <i *ngIf=\"subitem.icon\" class=\"fa fa-{{subitem.icon}}\"></i> <span>{{subitem.title}}</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</template>\n\t\t\t</template>\n\t\t</ul>\n\t\t<!-- /.sidebar-menu -->\n\t</section>\n\t<!-- /.sidebar -->\n</aside>"

/***/ }),

/***/ 1017:
/***/ (function(module, exports) {

module.exports = "<!-- Menu toggle button -->\n<a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <i\n\tclass=\"fa fa-envelope-o\"></i> <span class=\"label label-success\"\n\t[innerHTML]=\"messages.length\"></span>\n</a>\n<ul class=\"dropdown-menu\">\n\t<li class=\"header\">{{ 'MSGBOX.COUNT' }}</li>\n\t<li>\n\t\t<!-- inner menu: contains the messages -->\n\t\t<ul class=\"menu\">\n\t\t\t<li *ngFor=\"let msg of messages; let i = index\">\n\t\t\t\t<!-- start message --> <a href=\"javascript:void(0)\">\n\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t<!-- User Image -->\n\t\t\t\t\t\t<img src=\"{{msg.author.avatarUrl}}\" class=\"img-circle\"\n\t\t\t\t\t\t\talt=\"{{ msg.author.getName() }}\">\n\t\t\t\t\t</div> <!-- Message title and timestamp -->\n\t\t\t\t\t<h4>\n\t\t\t\t\t\t{{msg.title}} <small><i class=\"fa fa-clock-o\"></i>\n\t\t\t\t\t\t\t{{msg.date}}</small>\n\t\t\t\t\t</h4> <!-- The message -->\n\t\t\t\t\t<p>{{msg.content}}</p>\n\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- end message -->\n\t\t</ul> <!-- /.menu -->\n\t</li>\n\t<li class=\"footer\"><a href=\"javascript:void(0)\">{{ 'MSGBOX.FOOTER' }}</a></li>\n</ul>\n"

/***/ }),

/***/ 1018:
/***/ (function(module, exports) {

module.exports = "<!-- Menu toggle button -->\n<a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <i\n\tclass=\"fa fa-bell-o\"></i> <span class=\"label label-warning\">10</span>\n</a>\n<ul class=\"dropdown-menu\">\n\t<li class=\"header\">{{ 'NOTIFBOX.COUNT' }}</li>\n\t<li>\n\t\t<!-- Inner Menu: contains the notifications -->\n\t\t<ul class=\"menu\">\n\t\t\t<li>\n\t\t\t\t<!-- start notification --> <a href=\"javascript:void(0)\"> <i\n\t\t\t\t\tclass=\"fa fa-users text-aqua\"></i> 5 new members joined today\n\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- end notification -->\n\t\t</ul>\n\t</li>\n\t<li class=\"footer\"><a href=\"javascript:void(0)\">{{ 'NOTIFBOX.FOOTER' }}</a></li>\n</ul>\n"

/***/ }),

/***/ 1019:
/***/ (function(module, exports) {

module.exports = "<!-- Menu Toggle Button -->\n<a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <i\n\tclass=\"fa fa-flag-o\"></i> <span class=\"label label-danger\">9</span>\n</a>\n<ul class=\"dropdown-menu\">\n\t<li class=\"header\">{{ 'TASKBOX.COUNT' }}</li>\n\t<li>\n\t\t<!-- Inner menu: contains the tasks -->\n\t\t<ul class=\"menu\">\n\t\t\t<li>\n\t\t\t\t<!-- Task item --> <a href=\"javascript:void(0)\"> <!-- Task title and progress text -->\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tDesign some buttons <small class=\"pull-right\">20%</small>\n\t\t\t\t\t</h3> <!-- The progress bar -->\n\t\t\t\t\t<div class=\"progress xs\">\n\t\t\t\t\t\t<!-- Change the css width attribute to simulate progress -->\n\t\t\t\t\t\t<div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\"\n\t\t\t\t\t\t\trole=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\"\n\t\t\t\t\t\t\taria-valuemax=\"100\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">20% Complete</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- end task item -->\n\t\t</ul>\n\t</li>\n\t<li class=\"footer\"><a href=\"javascript:void(0)\">{{ 'TASKBOX.FOOTER' }}</a></li>\n</ul>\n"

/***/ }),

/***/ 1020:
/***/ (function(module, exports) {

module.exports = "<!-- Menu Toggle Button -->\n<a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <!-- The user image in the navbar-->\n\t<img [src]=\"currentUser.photo\" class=\"user-image\" alt=\"currentUser.UserName\"> <!-- hidden-xs hides the username on small devices so only the image appears. -->\n\t<span class=\"hidden-xs\">{{currentUser.UserName}}</span>\n</a>\n<ul class=\"dropdown-menu\">\n\t<!-- The user image in the menu -->\n\t<li class=\"user-header\"><img [src]=\"currentUser.photo\"\n\t\tclass=\"img-circle\" alt=\"currentUser.UserName\">\n\t\t<p>\n\t\t\t{{currentUser.UserName}} <small>{{currentUser.loginName}}</small>\n\t\t</p></li>\n\t<!-- Menu Body -->\n\t<li class=\"user-body\">\n\t\t<div class=\"col-xs-6 text-center\">\n\t\t\t<a class=\"label label-default\" href=\"javascript:void(0)\">Customers <span class=\"badge\">{{DestCount}}</span></a>\n\t\t</div>\n\t\t<div class=\"col-xs-6 text-center\">\n\t\t\t<a class=\"label label-default\" href=\"javascript:void(0)\">this Month Visits <span class=\"badge\">{{visCount}}</span></a>\n\t\t</div>\n\t\t<!--<div class=\"col-xs-4 text-center\">\n\t\t\t<a href=\"javascript:void(0)\">Friends</a>\n\t\t</div>-->\n\t</li>\n\t<!-- Menu Footer-->\n\t<li class=\"user-footer\">\n\t\t<div class=\"pull-left\">\n\t\t\t<a [routerLink]=\"['/home/pass']\" class=\"btn btn-default btn-flat\">Change Password</a>\n\t\t</div>\n\t\t<div class=\"pull-right\">\n\t\t\t<a [routerLink]=\"['/logout']\" class=\"btn btn-default btn-flat\">Sign out</a>\n\t\t</div>\n\t</li>\n</ul>\n"

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(14);
/* harmony export (immutable) */ __webpack_exports__["g"] = emailValidator;
/* harmony export (immutable) */ __webpack_exports__["d"] = matchingPasswords;
/* harmony export (immutable) */ __webpack_exports__["e"] = matchFieldValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = alreadyExist;
/* unused harmony export rangeLength */
/* unused harmony export min */
/* unused harmony export max */
/* harmony export (immutable) */ __webpack_exports__["c"] = minDate;
/* harmony export (immutable) */ __webpack_exports__["b"] = maxDate;
/* harmony export (immutable) */ __webpack_exports__["f"] = planDateInRange;
/*
  Custom validators to use everywhere.
*/

// SINGLE FIELD VALIDATORS
function emailValidator(control) {
    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
//CONTROL GROUP VALIDATORS
function matchingPasswords(passwordKey, confirmPasswordKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}
function matchFieldValue(FieldName, matchValue) {
    return function (group) {
        var Field = group.controls[FieldName];
        if (Field.value !== matchValue) {
            return {
                mismatchValue: true
            };
        }
    };
}
function alreadyExist(list, fieldName, current) {
    return function (control) {
        if (isPresent(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required(control)))
            return null;
        var v = control.value;
        return list.findIndex(function (p) { return p[fieldName] == v && p[fieldName] != current; }) < 0 ? null : { 'alreadyexist': true };
    };
}
/**
 * Validator that requires controls to have a value of a range length.
 */
function rangeLength(rangeLength) {
    return function (control) {
        if (isPresent(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required(control)))
            return null;
        var v = control.value;
        return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : { 'rangeLength': true };
    };
}
/**
 * Validator that requires controls to have a value of a min value.
 */
function min(min) {
    return function (control) {
        if (isPresent(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required(control)))
            return null;
        var v = control.value;
        return v >= min ? null : { 'min': true };
    };
}
/**
 * Validator that requires controls to have a value of a max value.
 */
function max(max) {
    return function (control) {
        if (isPresent(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required(control)))
            return null;
        var v = control.value;
        return v <= max ? null : { 'max': true };
    };
}
/**
 * Validator that requires controls to have a value of minDate.
 */
function minDate(minDate) {
    if (!isDate(minDate))
        throw Error('minDate value must be a formatted date');
    return function (control) {
        if (isPresent(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required(control)))
            return null;
        var d = new Date(control.value);
        if (!isDate(d))
            return { minDate: true };
        return d >= new Date(minDate) ? null : { minDate: true };
    };
}
/**
 * Validator that requires controls to have a value of maxDate.
 */
function maxDate(maxDate) {
    if (!isDate(maxDate))
        throw Error('maxDate value must be a formatted date');
    return function (control) {
        if (isPresent(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required(control)))
            return null;
        var d = new Date(control.value);
        if (!isDate(d))
            return { maxDate: true };
        return d <= new Date(maxDate) ? null : { maxDate: true };
    };
}
function planDateInRange(Range, PlanID, SalesLine) {
    // if (!isDate(maxDate)) throw Error('maxDate value must be a formatted date');
    if (Range.length <= 0)
        return null;
    return function (control) {
        if (isPresent(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required(control)))
            return null;
        var d = new Date(control.value);
        if (!isDate(d))
            return { inRange: true };
        var inDates = false;
        Range.forEach(function (rng) { if (SalesLine == rng.SalesLineID && PlanID != rng.PlanID && d >= new Date(rng.FromDate) && d <= new Date(rng.ToDate)) {
            inDates = true;
        } });
        return !inDates ? null : { inRange: true };
    };
}
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isDate(obj) {
    return !/Invalid|NaN/.test(new Date(obj).toString());
}
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/validators.js.map

/***/ }),

/***/ 1289:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1289;


/***/ }),

/***/ 1292:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(555);


/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "@media print {\r\n    @page {\r\n        size: portrait;\r\n        margin: 1cm;\r\n    }\r\n\r\n    .PrintnewPage {\r\n        page-break-after: always;\r\n    }\r\n\r\n    .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12,\r\n    .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\r\n        float: left;\r\n    }\r\n\r\n    .col-sm-12, .col-md-12 {\r\n        width: 100%;\r\n    }\r\n\r\n    .col-sm-11, .col-md-12 {\r\n        width: 91.66666666666666%;\r\n    }\r\n\r\n    .col-sm-10, .col-md-10 {\r\n        width: 83.33333333333334%;\r\n    }\r\n\r\n    .col-sm-9, .col-md-9 {\r\n        width: 75%;\r\n    }\r\n\r\n    .col-sm-8, .col-md-8 {\r\n        width: 66.66666666666666%;\r\n    }\r\n\r\n    .col-sm-7, .col-md-7 {\r\n        width: 58.333333333333336%;\r\n    }\r\n\r\n    .col-sm-6, .col-md-6 {\r\n        width: 50%;\r\n    }\r\n\r\n    .col-sm-5, .col-md-5 {\r\n        width: 41.66666666666667%;\r\n    }\r\n\r\n    .col-sm-4, .col-md-4 {\r\n        width: 33.33333333333333%;\r\n    }\r\n\r\n    .col-sm-3, .col-md-3 {\r\n        width: 25%;\r\n    }\r\n\r\n    .col-sm-2, .col-md-2 {\r\n        width: 16.666666666666664%;\r\n    }\r\n\r\n    .col-sm-1, .col-md-1 {\r\n        width: 8.333333333333332%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_BasicObjects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Access-Control-Allow-Origin': '*' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        // set token if saved in local storage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    }
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__Models_BasicObjects__["a" /* NodeUrl */] + 'authenticate', user, this.options)
            .map(function (response) {
            var arrRet = response.json()[0];
            if (arrRet[0].error) {
                return { login: false, error: arrRet[0].error };
            }
            else if (arrRet[0].Approved == false) {
                return { login: false, error: 'this user is not approved yet please wait for the activation.' };
            }
            // login successful if there's a jwt token in the response
            var token = arrRet[0] && arrRet[0].token;
            if (token) {
                // set token property
                _this.token = token;
                var userPhoto = new Image();
                userPhoto.src = './assets/img/avatar5.png';
                _this.currentUser = {
                    userID: arrRet[0].UserID, UserName: arrRet[0].UserName, loginName: user.LoginName,
                    jobClass: _this.getClass(arrRet[0].JobClass), token: token, photo: userPhoto.src
                };
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
                // return true to indicate successful login
                return { login: true, error: null };
            }
            else {
                // return false to indicate failed login
                return { login: false, error: 'Username or password is incorrect' };
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.getClass = function (job) {
        var ret = __WEBPACK_IMPORTED_MODULE_2__Models_BasicObjects__["b" /* JobClass */].filter(function (obj) { return obj.name == job; })[0].class;
        return ret;
    };
    AuthenticationService.prototype.getUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.currentUser;
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/auth.service.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array_pipe__ = __webpack_require__(745);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomPipesModule = (function () {
    function CustomPipesModule() {
    }
    CustomPipesModule.forRoot = function () {
        return {
            ngModule: CustomPipesModule
        };
    };
    CustomPipesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__array_pipe__["a" /* ArrayFilterPipe */], __WEBPACK_IMPORTED_MODULE_2__array_pipe__["b" /* ArrayOrderByPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__array_pipe__["a" /* ArrayFilterPipe */], __WEBPACK_IMPORTED_MODULE_2__array_pipe__["b" /* ArrayOrderByPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomPipesModule);
    return CustomPipesModule;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/pipe.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JobClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VisitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VacTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MessageTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return provinces; });
var NodeUrl = '/api/';
// export const NodeUrl = 'http://localhost:5500/api/'
var JobClass = [
    { class: 0, name: 'SysAdmin' },
    { class: 1, name: 'Line Manager' },
    // { class: 2, name: 'Sales Manager' },
    { class: 2, name: 'District Manager' },
    { class: 3, name: 'Medical Rep.' },
    { class: 99, name: 'Managers View' }
];
var VisitTypes = [
    { class: 0, name: 'Single' },
    { class: 1, name: 'Coaching Visit-With Manager' }
];
var VacTypes = [
    { class: 0, name: 'Casual' },
    { class: 1, name: 'Usual' },
    { class: 2, name: 'Sick Leave' },
    { class: 3, name: 'On Mission' },
    { class: 4, name: 'In a Meeting' },
    { class: 5, name: 'Other...' },
];
var MessageTypes = [
    { class: 0, name: 'Request for Aid' },
    { class: 1, name: 'Report a Bug' },
    { class: 2, name: 'Note' },
];
var provinces = [
    {
        "name": "الدقهلية",
        "code": "EG-DK"
    },
    {
        "name": "البحر الأحمر",
        "code": "EG-BA"
    },
    {
        "name": "البحيرة",
        "code": "EG-BH"
    },
    {
        "name": "الفيوم",
        "code": "EG-FYM"
    },
    {
        "name": "الغربية",
        "code": "EG-GH"
    },
    {
        "name": "الإسكندرية",
        "code": "EG-ALX"
    },
    {
        "name": "الإسماعيلية",
        "code": "EG-IS"
    },
    {
        "name": "الجيزة",
        "code": "EG-GZ"
    },
    {
        "name": "المنيا",
        "code": "EG-MN"
    },
    {
        "name": "المنوفية",
        "code": "EG-MNF"
    },
    {
        "name": "القليوبية",
        "code": "EG-KB"
    },
    {
        "name": "القاهرة",
        "code": "EG-C"
    },
    {
        "name": "الأقصر",
        "code": "EG-LX"
    },
    {
        "name": "الوادي الجديد",
        "code": "EG-WAD"
    },
    {
        "name": "السويس",
        "code": "EG-SUZ"
    },
    {
        "name": "السادس من أكتوبر",
        "code": "EG-SU"
    },
    {
        "name": "الشرقية",
        "code": "EG-SHR"
    },
    {
        "name": "أسوان",
        "code": "EG-ASN"
    },
    {
        "name": "أسيوط",
        "code": "EG-AST"
    },
    {
        "name": "بني سويف",
        "code": "EG-BNS"
    },
    {
        "name": "بورسعيد",
        "code": "EG-PTS"
    },
    {
        "name": "دمياط",
        "code": "EG-DT"
    },
    {
        "name": "كفر الشيخ",
        "code": "EG-KFS"
    },
    {
        "name": "مطروح",
        "code": "EG-MT"
    },
    {
        "name": "شمال سيناء",
        "code": "EG-SIN"
    },
    {
        "name": "قنا",
        "code": "EG-KN"
    },
    {
        "name": "جنوب سيناء",
        "code": "EG-JS"
    },
    {
        "name": "سوهاج",
        "code": "EG-SHG"
    },
    {
        "name": "حلوان",
        "code": "EG-HU"
    }
];
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/BasicObjects.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__(705);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_userSchedule_schedule__ = __webpack_require__(707);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__dashboard_userSchedule_schedule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_userWorkRate_workRate__ = __webpack_require__(708);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__dashboard_userWorkRate_workRate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_userPlan_plan__ = __webpack_require__(706);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__dashboard_userPlan_plan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_scoreCard_scoreCard__ = __webpack_require__(418);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__dashboard_scoreCard_scoreCard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__destinations_destination_component__ = __webpack_require__(710);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__destinations_destination_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__destinations_LineUsers_lineUsers__ = __webpack_require__(709);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_6__destinations_LineUsers_lineUsers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(420);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_sidebar_sidebar_component__ = __webpack_require__(715);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__home_sidebar_sidebar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_topnav_topnav_component__ = __webpack_require__(716);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__home_topnav_topnav_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__regions_region_component__ = __webpack_require__(718);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__regions_region_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__(719);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__visits_visit_component__ = __webpack_require__(422);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_12__visits_visit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vacations_vac_component__ = __webpack_require__(720);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_13__vacations_vac_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contactUS_contact_component__ = __webpack_require__(704);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_14__contactUS_contact_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plan_plan_component__ = __webpack_require__(717);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_15__plan_plan_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__chngpass_chngpass__ = __webpack_require__(703);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_16__chngpass_chngpass__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__(421);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_17__login_login_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__visits_visit_module__ = __webpack_require__(725);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_18__visits_visit_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__BasicData_basic_module__ = __webpack_require__(684);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_19__BasicData_basic_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__helpers__ = __webpack_require__(419);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_20__helpers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Reports_report_module__ = __webpack_require__(698);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_21__Reports_report_module__["a"]; });




















// export * from './Charts/chart.module';


//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var initialMessages = [];
var MessagesService = (function () {
    // public markThreadAsRead: Subject<any> = new Subject<any>();
    function MessagesService() {
        var _this = this;
        this.messagesList = [];
        // a stream that publishes new messages only once
        this.newMessages = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        // `messages` is a stream that emits an array of the most up to date messages
        this.messages = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["ReplaySubject"](1);
        // `updates` receives _operations_ to be applied to our `messages`
        // it's a way we can perform changes on *all* messages (that are currently
        // stored in `messages`)
        this.updates = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        // action streams
        this.create = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur messages
        this.updates.subscribe(function (ope) {
            _this.messagesList = ope(_this.messagesList);
            console.log(_this.messagesList);
            _this.messages.next(_this.messagesList);
        });
        this.newMessages
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    MessagesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], MessagesService);
    return MessagesService;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/messages.service.js.map

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicData__ = __webpack_require__(674);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__basicData__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__basicData__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__basicData__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__basicData__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__basicData__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__basicData__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__basicData__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BasicObjects__ = __webpack_require__(266);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__BasicObjects__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__BasicObjects__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_1__BasicObjects__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_1__BasicObjects__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_1__BasicObjects__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_1__BasicObjects__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__region__ = __webpack_require__(415);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__region__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__(678);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__user__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__user__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_3__user__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_3__user__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__destinations__ = __webpack_require__(675);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_4__destinations__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visits__ = __webpack_require__(679);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__visits__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__visits__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__visits__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plan__ = __webpack_require__(676);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_6__plan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports__ = __webpack_require__(677);
/* unused harmony namespace reexport */








//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleDate;
/* harmony export (immutable) */ __webpack_exports__["b"] = handleTime;
/* unused harmony export pad */
function handleDate(day) {
    // var day = new Date(date);
    var yyy = day.getFullYear();
    var mm = day.getMonth() + 1; //January is 0
    var dd = day.getDate();
    return yyy + "-" + pad("00", mm, true) + "-" + pad("00", dd, true);
}
function handleTime(time) {
    var tt = new Date(time);
    var hh = tt.getHours();
    var mm = tt.getMinutes();
    return pad("00", hh, true) + ":" + pad("00", mm, true);
}
function pad(pad, str, padLeft) {
    if (typeof str === 'undefined')
        return pad;
    if (padLeft) {
        return (pad + str).slice(-pad.length);
    }
    else {
        return (str + pad).substring(0, pad.length);
    }
}
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/helper.functions.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Region; });
/* unused harmony export UserRegion */
/* unused harmony export Schedule */
/* unused harmony export WorkRate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMSData; });
var Region = (function () {
    function Region() {
    }
    return Region;
}());
var UserRegion = (function () {
    function UserRegion() {
    }
    return UserRegion;
}());
var Schedule = (function () {
    function Schedule() {
    }
    return Schedule;
}());
var WorkRate = (function () {
    function WorkRate() {
    }
    return WorkRate;
}());
var IMSData = (function () {
    function IMSData() {
    }
    return IMSData;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/region.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gifts_gift_component__ = __webpack_require__(686);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__gifts_gift_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drugs_drug_component__ = __webpack_require__(685);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__drugs_drug_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__importance_importance_component__ = __webpack_require__(687);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__importance_importance_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ims_ims_component__ = __webpack_require__(688);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__ims_ims_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medspecs_medspec_component__ = __webpack_require__(689);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__medspecs_medspec_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__promoTools_promo_component__ = __webpack_require__(690);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__promoTools_promo_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__saleslines_lines_component__ = __webpack_require__(691);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__saleslines_lines_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basic_component__ = __webpack_require__(683);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__basic_component__["a"]; });








//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_component__ = __webpack_require__(697);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reportHome_rptHome_component__ = __webpack_require__(699);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__reportHome_rptHome_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visitCompare_visitCompare__ = __webpack_require__(701);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__visitCompare_visitCompare__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visitDaily_visitDaily__ = __webpack_require__(702);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__visitDaily_visitDaily__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__specVisits_specVisits__ = __webpack_require__(700);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__specVisits_specVisits__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__promo_promo__ = __webpack_require__(696);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__promo_promo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drugAnalysis_period_drugPeriod__ = __webpack_require__(695);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__drugAnalysis_period_drugPeriod__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drugAnalysis_comments_drugComment__ = __webpack_require__(693);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__drugAnalysis_comments_drugComment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drugAnalysis_customers_drugCustomer__ = __webpack_require__(694);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__drugAnalysis_customers_drugCustomer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__drugAnalysis_Specs_drugSpecs__ = __webpack_require__(692);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__drugAnalysis_Specs_drugSpecs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_scoreCard_scoreCard__ = __webpack_require__(418);
/* unused harmony namespace reexport */











//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScoreCardComponent = (function () {
    function ScoreCardComponent() {
    }
    ScoreCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], ScoreCardComponent.prototype, "score", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ScoreCardComponent.prototype, "heading", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ScoreCardComponent.prototype, "icon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ScoreCardComponent.prototype, "alertColor", void 0);
    ScoreCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dash-score',
            template: __webpack_require__(993),
            styles: [__webpack_require__(963)]
        }), 
        __metadata('design:paramtypes', [])
    ], ScoreCardComponent);
    return ScoreCardComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/scoreCard.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dateSlider_dateSlider__ = __webpack_require__(711);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dateSlider_dateSlider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__planSlider_planSlider__ = __webpack_require__(713);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__planSlider_planSlider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_module__ = __webpack_require__(712);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__helper_module__["a"]; });



//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messages_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster_angular2_toaster__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster_angular2_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_toaster_angular2_toaster__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(auth, msgServ, toastr) {
        this.auth = auth;
        this.msgServ = msgServ;
        this.toastr = toastr;
        this.currentUser = this.auth.getUser();
        this.toastrConfig = new __WEBPACK_IMPORTED_MODULE_3_angular2_toaster_angular2_toaster__["ToasterConfig"]({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
    }
    // private _opened: boolean = true;
    // private _animate: boolean = true;
    // private _closeOnClick: boolean = false;
    // private _MODES: Array<string> = ['over', 'push', 'dock'];
    // private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
    // private _toggleSidebar() {
    //     this._opened = !this._opened;
    // }
    HomeComponent.prototype.ngOnInit = function () {
        var ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            // solution for IE from @hakonamatata
            var event = document.createEvent('Event');
            event.initEvent('resize', false, true);
            window.dispatchEvent(event);
        }
    };
    HomeComponent.prototype.detectIE = function () {
        var ua = window.navigator.userAgent;
        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(1000),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["a" /* MessagesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["a" /* MessagesService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster_angular2_toaster__["ToasterService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster_angular2_toaster__["ToasterService"]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/home.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LogOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        var newuser = {
            LoginName: this.model.username,
            UserPass: this.model.password
        };
        this.authenticationService.login(newuser)
            .subscribe(function (result) {
            if (result.login === true) {
                _this.router.navigate(['home/dashboard']);
            }
            else {
                _this.error = result.error;
                _this.loading = false;
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__(1003),
            styles: ["\n        h1 {\n            margin-top: 20px;\n            margin-bottom: 10px;\n            text-align: center;\n        }\n        login-page {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            overflow: auto;\n            text-align: center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
var LogOutComponent = (function () {
    function LogOutComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    LogOutComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.router.navigate(['login']);
    };
    LogOutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'logout',
            template: ""
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], LogOutComponent);
    return LogOutComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/login.component.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_validators__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VisitComponent = (function () {
    function VisitComponent(serv, srvGift, srvDrug, srvDest, srvUreg, auth, fb) {
        var _this = this;
        this.serv = serv;
        this.srvGift = srvGift;
        this.srvDrug = srvDrug;
        this.srvDest = srvDest;
        this.srvUreg = srvUreg;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.srchObj = new __WEBPACK_IMPORTED_MODULE_4__Models__["l" /* Visits */]();
        this.users = [];
        this.destinations = [];
        this.ViewDests = [];
        this.regions = [];
        this.VisDrugs = [];
        this.VisGifts = [];
        this.visDrugModel = new __WEBPACK_IMPORTED_MODULE_4__Models__["k" /* VisitDrugs */]();
        this.visGiftModel = new __WEBPACK_IMPORTED_MODULE_4__Models__["j" /* VisitGifts */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.visTypes = __WEBPACK_IMPORTED_MODULE_4__Models__["m" /* VisitTypes */];
        this.managers = [];
        this.inFrm = fb.group({
            'visType': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'accompanyID': [null],
            'visDate': [this.cnvVisitDate, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            // 'visTime': [this.cnvVisitTime, Validators.required],
            'region': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'destination': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'generalComment': [null]
        }, {
            validator: function (group) {
                if (group.controls['visType'].value == "Coaching Visit-With Manager" && !group.controls['accompanyID'].value) {
                    return { mngrRequired: true };
                }
            }
        });
        this.inFrm.controls['visDate'].valueChanges.subscribe(function (val) { return _this.onDateChanged(val); });
        // this.inFrm.controls['visTime'].valueChanges.subscribe(val => this.onTimeChanged(val))
    }
    VisitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getUserVisitsByDate(this.currentUser.userID).subscribe(function (cols) {
            _this.collection = cols;
            var unique = _this.collection.map(function (obj) { return { UserID: obj.UserID, UserName: obj.UserName }; });
            _this.users = unique.filter(function (x, i, a) { return a.findIndex(function (U) { return U.UserID == x.UserID; }) == i; });
            if (_this.currentUser.jobClass == 3) {
                _this.selUser = _this.users[0];
            }
            _this.srvUreg.getUserChainRegions(_this.currentUser.userID).subscribe(function (rgs) {
                _this.regions = rgs;
                _this.srvUreg.getUserManagers(_this.currentUser.userID).subscribe(function (mng) { return _this.managers = mng; });
                _this.TableBack();
            });
        });
    };
    VisitComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_4__Models__["l" /* Visits */]();
        this.model.DestType = 'Clinic (Doctor)';
        this.model.VisitType = 'Single';
        this.visDrugModel = new __WEBPACK_IMPORTED_MODULE_4__Models__["k" /* VisitDrugs */]();
        this.visGiftModel = new __WEBPACK_IMPORTED_MODULE_4__Models__["j" /* VisitGifts */]();
        var today = new Date();
        this.cnvVisitDate = __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__["a" /* handleDate */](today);
        this.cnvVisitTime = __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__["b" /* handleTime */](today);
        this.yesterday = __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__["a" /* handleDate */](new Date(today.setDate(today.getDate() - 1)));
        this.thisday = this.cnvVisitDate;
        this.inFrm.controls['visDate'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["b" /* maxDate */])(new Date(this.cnvVisitDate)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["c" /* minDate */])(new Date(this.yesterday))]));
        this.VisDrugs = [];
        this.VisGifts = [];
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Visit';
        if (new Date() > new Date(this.cnvVisitDate + 'T' + '01:00:00')) {
            this.inFrm.controls['visDate'].disable();
        }
        else {
            this.inFrm.controls['visDate'].enable();
        }
    };
    VisitComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    VisitComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    VisitComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    VisitComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.serv.getVisit(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.cnvVisitDate = _this.model.VisitDate.toString().split('T')[0];
            _this.yesterday = __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__["a" /* handleDate */](new Date(new Date(_this.cnvVisitDate).setDate(new Date(_this.cnvVisitDate).getDate() - 1)));
            _this.thisday = _this.cnvVisitDate;
            _this.inFrm.controls['visDate'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["b" /* maxDate */])(new Date(_this.cnvVisitDate)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["c" /* minDate */])(new Date(_this.yesterday))]));
            if (new Date() > new Date(_this.cnvVisitDate + 'T' + '01:00:00')) {
                _this.inFrm.controls['visDate'].disable();
            }
            else {
                _this.inFrm.controls['visDate'].enable();
            }
            _this.cnvVisitTime = __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__["b" /* handleTime */](_this.model.VisitTime);
            _this.visDrugModel = new __WEBPACK_IMPORTED_MODULE_4__Models__["k" /* VisitDrugs */]();
            _this.visGiftModel = new __WEBPACK_IMPORTED_MODULE_4__Models__["j" /* VisitGifts */]();
            _this.serv.getVisitDrugs(id).subscribe(function (ret1) {
                _this.VisDrugs = ret1;
                _this.serv.getVisitGifts(id).subscribe(function (ret2) {
                    _this.VisGifts = ret2;
                    if (_this.currentUser.jobClass < 1 || _this.currentUser.jobClass == 99) {
                        _this.srvDest.getApprovedRegionDestinations(_this.model.RegionID).subscribe(function (dst) {
                            if (dst.error) {
                                _this.errorMessage = dst.error.message ? dst.error.message : dst.error;
                            }
                            else {
                                _this.destinations = dst;
                                _this.ViewDests = _this.destinations.filter(function (obj) { return obj.DestType == _this.model.DestType; });
                                _this.showTable = false;
                                _this.Formstate = state;
                                _this.headerText = state == 'Details' ? 'Visit ' + state : state + ' Visit';
                            }
                        });
                    }
                    else {
                        _this.srvDest.getPlanApprovedRegionDestinations(_this.model.RegionID, _this.currentUser.userID, _this.cnvVisitDate).subscribe(function (dst) {
                            if (dst.error) {
                                _this.errorMessage = dst.error.message ? dst.error.message : dst.error;
                            }
                            else {
                                _this.destinations = dst[0];
                                _this.ViewDests = _this.destinations.filter(function (obj) { return obj.DestType == _this.model.DestType; });
                                _this.showTable = false;
                                _this.Formstate = state;
                                _this.headerText = state == 'Details' ? 'Visit ' + state : state + ' Visit';
                            }
                        });
                    }
                });
            });
        }, function (err) { return _this.errorMessage = err.message; });
    };
    VisitComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Visits';
        this.errorMessage = null;
        this.stillSaving = false;
        this.inFrm.reset();
    };
    VisitComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.stillSaving)
            return;
        this.stillSaving = true;
        this.model.UserID = this.Formstate == 'Create' ? this.currentUser.userID : this.model.UserID;
        this.model.VisitDate = new Date(this.cnvVisitDate);
        this.model.VisitTime = new Date(this.cnvVisitDate + 'T' + this.cnvVisitTime);
        this.model.VisitTime.setHours(this.model.VisitTime.getHours() - 2);
        // if (this.model.VisitTime.getHours() > new Date().getHours()) {
        // }
        if (this.VisDrugs.length <= 0 && this.Formstate != "Delete") {
            this.errorMessage = "Please Add Some Products";
            return;
        }
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertVisit(this.model, this.VisDrugs, this.VisGifts).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message ? ret.error.message.includes('Violation of UNIQUE KEY') ? "Can't Insert two visits for the same Customer\n                        in the same day" : ret.error.message : ret.error;
                    }
                    else {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateVisit(this.model.VisitID, this.model, this.VisDrugs, this.VisGifts).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message ? ret.error.message.includes('Violation of UNIQUE KEY') ? "Can't Insert two visits for the same Customer\n                        in the same day" : ret.error.message : ret.error;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteVisit(this.model.VisitID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message ? ret.error.message.includes('Violation of UNIQUE KEY') ? "Can't Insert two visits for the same Customer\n                        in the same day" : ret.error.message : ret.error;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    VisitComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    VisitComponent.prototype.onRegChange = function (newobj) {
        var _this = this;
        if (newobj.target.value) {
            var region = newobj.target.value.split(':')[1].trim();
            var visDate = this.model.VisitDate == null ? new Date() : this.model.VisitDate;
            this.srvDest.getPlanApprovedRegionDestinations(region, this.currentUser.userID, __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__["a" /* handleDate */](visDate)).subscribe(function (dst) {
                if (dst.error) {
                    _this.errorMessage = dst.error.message ? dst.error.message : dst.error;
                }
                else {
                    _this.destinations = dst[0];
                    if (_this.destinations.length > 0) {
                        _this.ViewDests = _this.destinations.filter(function (obj) { return obj.DestType == _this.model.DestType; });
                    }
                    else {
                        _this.ViewDests = [];
                        _this.model.DestID = null;
                    }
                }
            });
        }
    };
    VisitComponent.prototype.onDestTypeChange = function (newobj, DestType) {
        var _this = this;
        if (newobj.target.checked === true) {
            this.model.DestType = DestType;
            if (this.destinations.length > 0) {
                this.ViewDests = this.destinations.filter(function (obj) { return obj.DestType == _this.model.DestType; });
            }
            else {
                this.ViewDests = [];
                this.model.DestID = null;
            }
        }
    };
    VisitComponent.prototype.onDestChange = function (newobj) {
        var _this = this;
        if (newobj.target.value) {
            var Dest = newobj.target.value.split(':')[1].trim();
            this.srvDest.checkMaxVisit(Dest, this.currentUser.userID, this.cnvVisitDate).subscribe(function (ret) {
                if (ret.error) {
                    _this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                }
                else {
                    if (ret.length <= 0) {
                        return;
                    }
                    if (ret[0].Allowed) {
                    }
                    else {
                        _this.inFrm.controls['destination'].setErrors({ "maxVisit": true });
                    }
                }
            });
        }
    };
    VisitComponent.prototype.onDateChanged = function (value) {
        // let newtimedate = new Date(value + 'T' + this.cnvVisitTime)
        // if (newtimedate > new Date()) {
        //     this.inFrm.controls['visTime'].setErrors({ "maxTime": true })
        // }
        // else { }
    };
    VisitComponent.prototype.onTimeChanged = function (value) {
        // let newtimedate = new Date(this.cnvVisitDate + 'T' + value)
        // newtimedate.setHours(newtimedate.getHours() - 2)
        // if (newtimedate > new Date()) {
        //     this.inFrm.controls['visTime'].setErrors({ "maxTime": true })
        // }
        // else { }
    };
    VisitComponent.prototype.drugChangeEvent = function (value) {
        this.drgsChanged = value;
    };
    VisitComponent.prototype.DeleteDrug = function (index) {
        this.VisDrugs.splice(index, 1);
        this.VisGifts.filter(function (gft) { return gft.DrugID == index; }).splice(1);
        this.drgsChanged = this.VisDrugs.length;
    };
    VisitComponent.prototype.UserChanged = function ($user) {
        this.selUser = this.users.filter(function (u) { return u.UserName == $user.target.value; })[0];
    };
    VisitComponent.prototype.DeleteGift = function (index) {
        this.VisGifts.splice(index, 1);
        this.drgsChanged = this.VisDrugs.length;
    };
    VisitComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-visit',
            template: __webpack_require__(1011)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["u" /* VisitService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["u" /* VisitService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["q" /* GiftService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["q" /* GiftService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["o" /* DrugService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["o" /* DrugService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["f" /* DestinationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["f" /* DestinationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* UserRegionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* UserRegionService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _g) || Object])
    ], VisitComponent);
    return VisitComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/visit.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/auth.guard.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegionService = (function () {
    function RegionService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'region/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    RegionService.prototype.getRegion = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    RegionService.prototype.getProvinceRegions = function (province) {
        return this.http.get(this.url + 'province/' + province, this.options).map(function (res) { return res.json(); });
    };
    RegionService.prototype.getApprovedProvinceRegions = function (province) {
        return this.http.get(this.url + 'aprvprovince/' + province, this.options).map(function (res) { return res.json(); });
    };
    RegionService.prototype.getUserChainRegions = function (userID) {
        return this.http.get(this.url + 'userChain/' + userID, this.options).map(function (res) { return res.json(); });
    };
    RegionService.prototype.InsertRegion = function (region) {
        return this.http.post(this.url, region, this.options).map(function (res) { return res.json(); });
    };
    RegionService.prototype.UpdateRegion = function (id, region) {
        return this.http.put(this.url + id, region, this.options).map(function (res) { return res.json(); });
    };
    RegionService.prototype.DeleteRegion = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    RegionService.prototype.ApproveRegion = function (id, ApproveUser) {
        if (!this.headers.has("Content-type")) {
            this.options.headers.append("Content-type", "application/json");
        }
        return this.http.put(this.url + 'Approve/' + id, JSON.stringify({ id: id, appuser: ApproveUser }), this.options).map(function (res) { return res.json(); });
    };
    RegionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], RegionService);
    return RegionService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/region.service.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard__ = __webpack_require__(423);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__ = __webpack_require__(746);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drug_service__ = __webpack_require__(750);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__drug_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gift_service__ = __webpack_require__(751);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_4__gift_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__importance_service__ = __webpack_require__(752);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_5__importance_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__line_service__ = __webpack_require__(754);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_6__line_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__medspec_service__ = __webpack_require__(755);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_7__medspec_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__region_service__ = __webpack_require__(424);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__region_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_service__ = __webpack_require__(759);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__userRegion_service__ = __webpack_require__(760);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__userRegion_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__destination_service__ = __webpack_require__(749);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_11__destination_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__visit_service__ = __webpack_require__(762);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_12__visit_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_service__ = __webpack_require__(748);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_13__dashboard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__promo_service__ = __webpack_require__(757);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_14__promo_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plan_service__ = __webpack_require__(756);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_15__plan_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__messages_service__ = __webpack_require__(268);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_16__messages_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ims_service__ = __webpack_require__(753);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_17__ims_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reports_service__ = __webpack_require__(758);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_18__reports_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vacation_service__ = __webpack_require__(761);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_19__vacation_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contactUs_service__ = __webpack_require__(747);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_20__contactUs_service__["a"]; });





















//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%; }\n\nbody {\n  background: #f6f6f6;\n  color: #545555;\n  font: 400 1em/1.25 \"Source Sans Pro\", \"Helvetica\", \"Arial\", sans-serif; }\n\n::-moz-selection {\n  background-color: #0273d4;\n  color: #fff; }\n\n::selection {\n  background-color: #0273d4;\n  color: #fff; }\n\na {\n  color: #0273d4;\n  text-decoration: none; }\n  a:hover {\n    border-bottom: 1px dotted #0273d4; }\n\np {\n  margin-bottom: 1em; }\n\nh1 {\n  border-bottom: 1px dotted #0273d4;\n  display: block;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.loading {\n  padding: 1em; }\n\n.demo-header {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #0273d4;\n  box-shadow: 0 0.1em 1.5em rgba(84, 85, 85, 0.5);\n  color: #fff;\n  display: block;\n  padding: 1em;\n  margin-bottom: 5px; }\n\n.demo-header__toggle {\n  background: transparent;\n  border: 0.15rem solid #fff;\n  border-left: 0;\n  border-right: 0;\n  cursor: pointer;\n  font-size: 0;\n  height: 1.5rem;\n  margin-right: 1rem;\n  position: relative;\n  width: 2rem; }\n  .demo-header__toggle::after {\n    background: #fff;\n    content: '';\n    height: 0.15rem;\n    left: 0;\n    margin-top: -0.075rem;\n    position: absolute;\n    top: 50%;\n    width: 100%; }\n\n.demo-sidebar, .topnav {\n  background-color: #0273d4; }\n\n.demo-sidebar {\n  top: 63px;\n  left: 225px;\n  bottom: 0;\n  width: 225px;\n  height: 100%;\n  padding-bottom: 40px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out; }\n\n.demo-sidebar .list-group a.list-group-item {\n  background: #0273d4;\n  border: 0;\n  border-radius: 0;\n  color: #fff;\n  text-decoration: none; }\n\n.demo-sidebar .list-group a.router-link-active, .demo-sidebar .list-group a:hover {\n  background: #fff;\n  color: #0273d4; }\n\n.demo-sidebar {\n  padding: 2em 1em; }\n  .demo-sidebar.ng-sidebar--over {\n    box-shadow: 0 0 2.5em rgba(85, 85, 85, 0.5); }\n\n.demo-contents {\n  padding: 0 2em; }\n\n.demo-control {\n  background-color: #f6f6f6;\n  border: 1px solid #545555;\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  padding: 0.5em 2em;\n  -webkit-transition: background-color 0.15s;\n  transition: background-color 0.15s; }\n  .demo-control:hover {\n    background-color: #545555;\n    color: #fff; }\n\n.navbar-dark .navbar-brand, .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n  color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n\n.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75); }\n\n.card-inverse .card-blockquote, .card-inverse .card-footer, .card-inverse .card-header, .card-inverse .card-title, .navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .active > .nav-link:focus, .navbar-dark .navbar-nav .active > .nav-link:hover, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.active:focus, .navbar-dark .navbar-nav .nav-link.active:hover, .navbar-dark .navbar-nav .nav-link.open, .navbar-dark .navbar-nav .nav-link.open:focus, .navbar-dark .navbar-nav .nav-link.open:hover, .navbar-dark .navbar-nav .open > .nav-link, .navbar-dark .navbar-nav .open > .nav-link:focus, .navbar-dark .navbar-nav .open > .nav-link:hover {\n  color: #fff; }\n\n.navbar-dark .navbar-divider {\n  background-color: rgba(255, 255, 255, 0.075); }\n\n.topnav {\n  border-radius: 0;\n  padding: 6px; }\n\n.topnav .text-center {\n  text-align: center;\n  padding-left: 0; }\n\n.topnav a {\n  background: #0273d4;\n  color: #fff; }\n\n.topnav .top-right-nav .buy-now a {\n  color: #999; }\n\n.topnav .top-right-nav .dropdown-menu {\n  top: 40px;\n  right: -5px;\n  left: auto; }\n\n.topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0; }\n\n.topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n  margin: 0; }\n\n.topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n  font-size: 13px;\n  margin-bottom: 0; }\n\n.topnav .top-right-nav .dropdown-menu hr {\n  margin-top: 1px;\n  margin-bottom: 4px; }\n"

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 554;


/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(681);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/main.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Gifts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MedSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VisitImportance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Drugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PromoTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ContactUs; });
var SalesLine = (function () {
    function SalesLine() {
    }
    return SalesLine;
}());
var Gifts = (function () {
    function Gifts() {
    }
    return Gifts;
}());
var MedSpec = (function () {
    function MedSpec() {
    }
    return MedSpec;
}());
var VisitImportance = (function () {
    function VisitImportance() {
    }
    return VisitImportance;
}());
var Drugs = (function () {
    function Drugs() {
    }
    return Drugs;
}());
var PromoTools = (function () {
    function PromoTools() {
    }
    return PromoTools;
}());
var ContactUs = (function () {
    function ContactUs() {
    }
    return ContactUs;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/basicData.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Destination; });
var Destination = (function () {
    function Destination() {
    }
    return Destination;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/destinations.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthPlan; });
/* unused harmony export PlanSpecs */
/* unused harmony export PlanDrugs */
/* unused harmony export PlanImps */
var MonthPlan = (function () {
    function MonthPlan() {
    }
    return MonthPlan;
}());
var PlanSpecs = (function () {
    function PlanSpecs() {
    }
    return PlanSpecs;
}());
var PlanDrugs = (function () {
    function PlanDrugs() {
    }
    return PlanDrugs;
}());
var PlanImps = (function () {
    function PlanImps() {
    }
    return PlanImps;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/plan.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rptSpecVisits */
/* unused harmony export rptdrugAnalysis */
var rptSpecVisits = (function () {
    function rptSpecVisits() {
    }
    return rptSpecVisits;
}());
var rptdrugAnalysis = (function () {
    function rptdrugAnalysis() {
    }
    return rptdrugAnalysis;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/reports.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUser; });
/* unused harmony export DestinationUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ReplaceUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Vacation; });
var User = (function () {
    function User() {
    }
    return User;
}());
var CurrentUser = (function () {
    function CurrentUser() {
    }
    return CurrentUser;
}());
var DestinationUser = (function () {
    function DestinationUser() {
    }
    return DestinationUser;
}());
var ReplaceUser = (function () {
    function ReplaceUser() {
    }
    return ReplaceUser;
}());
var Vacation = (function () {
    function Vacation() {
    }
    return Vacation;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/user.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Visits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VisitDrugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitGifts; });
var Visits = (function () {
    function Visits() {
    }
    return Visits;
}());
var VisitDrugs = (function () {
    function VisitDrugs() {
    }
    return VisitDrugs;
}());
var VisitGifts = (function () {
    function VisitGifts() {
    }
    return VisitGifts;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/visits.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: [__webpack_require__(961)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/app.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_sidebar__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_toaster_angular2_toaster__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_toaster_angular2_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_toaster_angular2_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_pipe_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widgets__ = __webpack_require__(734);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var widgets = [
    __WEBPACK_IMPORTED_MODULE_16__components_widgets__["a" /* BreadcrumbComponent */], __WEBPACK_IMPORTED_MODULE_16__components_widgets__["b" /* AppHeaderComponent */], __WEBPACK_IMPORTED_MODULE_16__components_widgets__["c" /* AppFooterComponent */], __WEBPACK_IMPORTED_MODULE_16__components_widgets__["d" /* MenuAsideComponent */],
    __WEBPACK_IMPORTED_MODULE_16__components_widgets__["e" /* ControlSidebarComponent */], __WEBPACK_IMPORTED_MODULE_16__components_widgets__["f" /* MessagesBoxComponent */], __WEBPACK_IMPORTED_MODULE_16__components_widgets__["g" /* NotificationBoxComponent */],
    __WEBPACK_IMPORTED_MODULE_16__components_widgets__["h" /* TasksBoxComponent */], __WEBPACK_IMPORTED_MODULE_16__components_widgets__["i" /* UserBoxComponent */]
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6_ng_sidebar__["SidebarModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7_angular2_toaster_angular2_toaster__["ToasterModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* Approuting */], __WEBPACK_IMPORTED_MODULE_14__pipes_pipe_module__["a" /* CustomPipesModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["AlertModule"].forRoot(), __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["DatepickerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__components__["a" /* VisitModule */], __WEBPACK_IMPORTED_MODULE_11__components__["b" /* BasicDataModule */], __WEBPACK_IMPORTED_MODULE_11__components__["c" /* HelperModule */], __WEBPACK_IMPORTED_MODULE_9_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_11__components__["d" /* ReportsModule */] /**/
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ].concat(widgets, [
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["b" /* LogOutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["e" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["f" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["g" /* RegionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["h" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["i" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["j" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["k" /* DestinationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["l" /* UserScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["m" /* UserWorkRateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["n" /* UserPlanComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["o" /* ScoreCardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["p" /* PlanComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["q" /* LineUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["r" /* ChngPassComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["s" /* VacationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components__["t" /* ContactUsComponent */]
            ]),
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__services__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_13__services__["c" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__services__["d" /* RegionService */], __WEBPACK_IMPORTED_MODULE_13__services__["e" /* UserRegionService */],
                __WEBPACK_IMPORTED_MODULE_13__services__["f" /* DestinationService */], __WEBPACK_IMPORTED_MODULE_13__services__["g" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_13__services__["h" /* PlanService */],
                __WEBPACK_IMPORTED_MODULE_13__services__["i" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_13__services__["j" /* MessagesService */], __WEBPACK_IMPORTED_MODULE_13__services__["k" /* IMSService */],
                __WEBPACK_IMPORTED_MODULE_13__services__["l" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_13__services__["m" /* VacationService */], __WEBPACK_IMPORTED_MODULE_13__services__["n" /* ContactUsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/app.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_routing__ = __webpack_require__(714);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Approuting; });



var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components__["u" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_1__components__["v" /* LogOutComponent */] }
].concat(__WEBPACK_IMPORTED_MODULE_2__components_home_home_routing__["a" /* homeRoutes */], [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
]);
var Approuting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/app.routing.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicDataComponent = (function () {
    function BasicDataComponent() {
    }
    BasicDataComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'basicdata',
            styles: [],
            template: "<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], BasicDataComponent);
    return BasicDataComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/basic.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_pipe_module__ = __webpack_require__(185);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDataModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { basicRouting }       from './basic.routing';
var BasicDataModule = (function () {
    function BasicDataModule() {
    }
    BasicDataModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_8__pipes_pipe_module__["a" /* CustomPipesModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__["Ng2PaginationModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6____["a" /* BasicDataComponent */], __WEBPACK_IMPORTED_MODULE_6____["b" /* SalesLineComponent */], __WEBPACK_IMPORTED_MODULE_6____["c" /* DrugComponent */],
                __WEBPACK_IMPORTED_MODULE_6____["d" /* GiftComponent */], __WEBPACK_IMPORTED_MODULE_6____["e" /* ImportanceComponent */], __WEBPACK_IMPORTED_MODULE_6____["f" /* MedSpecComponent */], __WEBPACK_IMPORTED_MODULE_6____["g" /* PromoToolsComponent */], __WEBPACK_IMPORTED_MODULE_6____["h" /* ImsDataComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services__["o" /* DrugService */], __WEBPACK_IMPORTED_MODULE_7__services__["q" /* GiftService */], __WEBPACK_IMPORTED_MODULE_7__services__["s" /* ImportanceService */], __WEBPACK_IMPORTED_MODULE_7__services__["t" /* LineService */], __WEBPACK_IMPORTED_MODULE_7__services__["p" /* MedSpecService */], __WEBPACK_IMPORTED_MODULE_7__services__["r" /* PromoToolsService */], __WEBPACK_IMPORTED_MODULE_7__services__["k" /* IMSService */]],
        }), 
        __metadata('design:paramtypes', [])
    ], BasicDataModule);
    return BasicDataModule;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/basic.module.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrugComponent = (function () {
    function DrugComponent(serv, auth, srvlne) {
        this.serv = serv;
        this.auth = auth;
        this.srvlne = srvlne;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.searchDrug = new __WEBPACK_IMPORTED_MODULE_2__Models__["h" /* Drugs */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.lines = [];
    }
    DrugComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getDrug().subscribe(function (cols) {
            _this.collection = cols;
            _this.srvlne.getLine().subscribe(function (ln) {
                _this.lines = ln;
                _this.TableBack();
            });
        });
    };
    DrugComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__Models__["h" /* Drugs */]();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Product';
    };
    DrugComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    DrugComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    DrugComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    DrugComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.serv.getDrug(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'Product ' + state : state + ' Product';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    DrugComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Products';
        this.errorMessage = null;
    };
    DrugComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        var newObject = this.model;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertDrug(newObject).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateDrug(newObject.DrugID, newObject).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteDrug(newObject.DrugID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    DrugComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    DrugComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drug',
            template: __webpack_require__(974)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["t" /* LineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["t" /* LineService */]) === 'function' && _c) || Object])
    ], DrugComponent);
    return DrugComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/drug.component.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GiftComponent = (function () {
    function GiftComponent(serv, auth) {
        this.serv = serv;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.searchGift = new __WEBPACK_IMPORTED_MODULE_2__Models__["i" /* Gifts */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
    }
    GiftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getGift().subscribe(function (cols) { return _this.collection = cols; });
        this.TableBack();
    };
    GiftComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__Models__["i" /* Gifts */]();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Tool';
    };
    GiftComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    GiftComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    GiftComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    GiftComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.serv.getGift(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'Product ' + state : state + ' Product';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    GiftComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Promotional Tools';
        this.errorMessage = null;
    };
    GiftComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        var newObject = this.model;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertGift(newObject).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateGift(newObject.GiftID, newObject).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteGift(newObject.GiftID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    GiftComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    GiftComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gift',
            template: __webpack_require__(975)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["q" /* GiftService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["q" /* GiftService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], GiftComponent);
    return GiftComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/gift.component.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportanceComponent = (function () {
    function ImportanceComponent(serv, auth) {
        this.serv = serv;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.searchImp = new __WEBPACK_IMPORTED_MODULE_1__Models__["g" /* VisitImportance */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
    }
    ImportanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getImp().subscribe(function (cols) { return _this.collection = cols; });
        this.TableBack();
    };
    ImportanceComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__Models__["g" /* VisitImportance */]();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Visit Cycle';
    };
    ImportanceComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    ImportanceComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    ImportanceComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    ImportanceComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.serv.getImp(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'Visit Cycle ' + state : state + ' Visit Cycle';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    ImportanceComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Visit Cycle';
        this.errorMessage = null;
    };
    ImportanceComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        var newObject = this.model;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertImp(newObject).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateImp(newObject.ImpID, newObject).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteImp(newObject.ImpID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    ImportanceComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    ImportanceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-importance',
            template: __webpack_require__(976)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["s" /* ImportanceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["s" /* ImportanceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], ImportanceComponent);
    return ImportanceComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/importance.component.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImsDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImsDataComponent = (function () {
    function ImsDataComponent(serv, auth) {
        this.serv = serv;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.srchObj = new __WEBPACK_IMPORTED_MODULE_2__Models__["f" /* IMSData */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
    }
    ImsDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getIMS().subscribe(function (cols) { _this.collection = cols; }, function (err) { console.log(err); _this.errorMessage = err.error.message; });
        this.TableBack();
    };
    ImsDataComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__Models__["f" /* IMSData */]();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Sales IMS';
    };
    ImsDataComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    ImsDataComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    ImsDataComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    ImsDataComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.serv.getIMS(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'IMS ' + state : state + ' IMS';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    ImsDataComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'IMS Regions';
        this.errorMessage = null;
    };
    ImsDataComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        var newIMS = this.model;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertIMS(newIMS).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateIMS(newIMS.IMSID, newIMS).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteIMS(newIMS.IMSID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    ImsDataComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    ImsDataComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ims',
            template: __webpack_require__(977)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], ImsDataComponent);
    return ImsDataComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/ims.component.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedSpecComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedSpecComponent = (function () {
    function MedSpecComponent(serv, auth) {
        this.serv = serv;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.searchSpec = new __WEBPACK_IMPORTED_MODULE_2__Models__["e" /* MedSpec */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
    }
    MedSpecComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getSpec().subscribe(function (cols) { return _this.collection = cols; });
        this.TableBack();
    };
    MedSpecComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__Models__["e" /* MedSpec */]();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Account';
    };
    MedSpecComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    MedSpecComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    MedSpecComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    MedSpecComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.serv.getSpec(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'Account ' + state : state + ' Account';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    MedSpecComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Accounts';
        this.errorMessage = null;
    };
    MedSpecComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        var newObject = this.model;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertSpec(newObject).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateSpec(newObject.SpecID, newObject).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteSpec(newObject.SpecID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    MedSpecComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    MedSpecComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spec',
            template: __webpack_require__(978),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services__["p" /* MedSpecService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["p" /* MedSpecService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["p" /* MedSpecService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], MedSpecComponent);
    return MedSpecComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/medspec.component.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_validators__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromoToolsComponent = (function () {
    function PromoToolsComponent(srvPromo, srvDrug, srvGift, auth, fb) {
        this.srvPromo = srvPromo;
        this.srvDrug = srvDrug;
        this.srvGift = srvGift;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.giftList = [];
        this.drugList = [];
        this.srchObj = new __WEBPACK_IMPORTED_MODULE_3__Models__["d" /* PromoTools */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.inFrm = fb.group({
            'ToolName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'GiftName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'DrugName': [null]
        });
    }
    PromoToolsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvPromo.getPromoTools().subscribe(function (cols) {
            _this.collection = cols;
            _this.srvDrug.getDrug().subscribe(function (drg) {
                _this.drugList = drg;
                _this.srvGift.getGift().subscribe(function (gft) {
                    _this.giftList = gft;
                    _this.TableBack();
                });
            });
        });
    };
    PromoToolsComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_3__Models__["d" /* PromoTools */]();
        this.inFrm.controls['ToolName'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pipes_validators__["a" /* alreadyExist */])(this.collection, 'ToolName', '')]));
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Promo Tool';
    };
    PromoToolsComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    PromoToolsComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    PromoToolsComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    PromoToolsComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.srvPromo.getPromoTools(id).subscribe(function (ret) {
            _this.model = ret[0];
            switch (state) {
                case 'Edit':
                    _this.inFrm.controls['ToolName'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pipes_validators__["a" /* alreadyExist */])(_this.collection, 'ToolName', _this.inFrm.controls['ToolName'].value)]));
                    break;
                case 'Delete':
                    _this.inFrm.controls['ToolName'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]));
                    break;
                default:
                    break;
            }
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'Promo Tool ' + state : state + ' Promo Tool';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    PromoToolsComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.inFrm.reset();
        this.headerText = 'Promotional Tools';
        this.errorMessage = null;
    };
    PromoToolsComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        switch (this.Formstate) {
            case 'Create':
                this.srvPromo.InsertPromoTools(this.model).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.srvPromo.UpdatePromoTools(this.model.ToolID, this.model).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.srvPromo.DeletePromoTools(this.model.ToolID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    PromoToolsComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    PromoToolsComponent.prototype.ConcatToolName = function () {
        this.model.ToolName = (!this.model.GiftName ? "" : this.model.GiftName) + " " + (!this.model.DrugName ? "" : this.model.DrugName);
        this.inFrm.controls['ToolName'].markAsTouched();
        // this.inFrm.controls['ToolName'].value = this.model.ToolName
        // if (this.collection.findIndex(p => p.ToolName == this.model.ToolName) >= 0) {
        //     this.inFrm.controls['ToolName'].setErrors({ "alreadyexist": true });
        // } else { }
    };
    PromoToolsComponent.prototype.onGiftChange = function (obj) {
        if (obj.target.value) {
            var giftID = obj.target.value.split(':')[1].trim();
            var giftName = this.giftList.filter(function (gft) { return gft.GiftID == giftID; })[0].GiftName;
            this.model.GiftName = giftName;
            this.ConcatToolName();
        }
    };
    PromoToolsComponent.prototype.onDrugChange = function (obj) {
        if (obj.target.value) {
            var drugID = obj.target.value.split(':')[1].trim();
            var drugName = this.drugList.filter(function (gft) { return gft.DrugID == drugID; })[0].DrugName;
            this.model.DrugName = drugName;
            this.ConcatToolName();
        }
    };
    PromoToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-promotools',
            template: __webpack_require__(979)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["r" /* PromoToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["r" /* PromoToolsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["o" /* DrugService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["o" /* DrugService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["q" /* GiftService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["q" /* GiftService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _e) || Object])
    ], PromoToolsComponent);
    return PromoToolsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/promo.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesLineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesLineComponent = (function () {
    function SalesLineComponent(serv, _userServ, auth) {
        this.serv = serv;
        this._userServ = _userServ;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.searchLine = new __WEBPACK_IMPORTED_MODULE_2__Models__["c" /* SalesLine */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
    }
    SalesLineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getLine().subscribe(function (cols) { if (cols.error) {
            _this.errorMessage = cols.error.message;
        }
        else {
            _this.collection = cols;
        } }, function (err) { console.log(err); _this.errorMessage = err.error.message; });
        this._userServ.getuser().subscribe(function (cols) { return _this.users = cols; }, function (err) { console.log(err); _this.errorMessage = err.error.message; });
        this.TableBack();
    };
    SalesLineComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__Models__["c" /* SalesLine */]();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Sales Line';
    };
    SalesLineComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    SalesLineComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    SalesLineComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    SalesLineComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.serv.getLine(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'Sales Line ' + state : state + ' Sales Line';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    SalesLineComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Sales Lines';
        this.errorMessage = null;
    };
    SalesLineComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        var newLine = this.model;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertLine(newLine).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateLine(newLine.SalesLineID, newLine).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteLine(newLine.SalesLineID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    SalesLineComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    SalesLineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'salesline',
            template: __webpack_require__(980)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["t" /* LineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["t" /* LineService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], SalesLineComponent);
    return SalesLineComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/lines.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugSpecsReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugSpecsReportComponent = (function () {
    function DrugSpecsReportComponent(srv, srvDrg, srvSpec, auth, location) {
        this.srv = srv;
        this.srvDrg = srvDrg;
        this.srvSpec = srvSpec;
        this.auth = auth;
        this.location = location;
        this.currentUser = this.auth.getUser();
        this.drugList = [];
        this.collection = [];
        this.specList = [];
        this.today = new Date();
        this.fromDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.toDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.drugID = null;
        this.specID = null;
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.reportHeader = "Product Analysis\n    (Customers Speciality In Period)";
    }
    DrugSpecsReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvDrg.getDrug().subscribe(function (drg) {
            _this.drugList = drg;
            _this.srvSpec.getSpec().subscribe(function (rgn) {
                _this.specList = rgn;
            });
        });
    };
    DrugSpecsReportComponent.prototype.ViewReport = function () {
        var _this = this;
        this.srv.getdrugAnalysis(__WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.fromDate)), __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.toDate)), this.drugID, 'Specs', this.specID == null ? null : this.specID.toString())
            .subscribe(function (ret) {
            _this.collection = ret;
        });
    };
    DrugSpecsReportComponent.prototype.goBack = function () {
        this.location.back();
    };
    DrugSpecsReportComponent.prototype.printReport = function () {
        window.print();
    };
    DrugSpecsReportComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    DrugSpecsReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rpt-drugSpecs',
            template: __webpack_require__(981),
            styles: [__webpack_require__(142)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["p" /* MedSpecService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["p" /* MedSpecService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _e) || Object])
    ], DrugSpecsReportComponent);
    return DrugSpecsReportComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/drugSpecs.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugCommentReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugCommentReportComponent = (function () {
    function DrugCommentReportComponent(srv, srvDrg, srvIms, auth, location) {
        this.srv = srv;
        this.srvDrg = srvDrg;
        this.srvIms = srvIms;
        this.auth = auth;
        this.location = location;
        this.currentUser = this.auth.getUser();
        this.drugList = [];
        this.collection = [];
        this.imsList = [];
        this.today = new Date();
        this.fromDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.toDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.drugID = null;
        this.imsID = null;
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.reportHeader = "Product Analysis (Comments In Period)";
    }
    DrugCommentReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvDrg.getDrug().subscribe(function (drg) {
            _this.drugList = drg;
            _this.srvIms.getIMS().subscribe(function (ims) { return _this.imsList = ims; });
        });
    };
    DrugCommentReportComponent.prototype.ViewReport = function () {
        var _this = this;
        this.srv.getdrugAnalysis(__WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.fromDate)), __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.toDate)), this.drugID, 'Comments', this.imsID == null ? null : this.imsID.toString())
            .subscribe(function (ret) {
            _this.collection = ret;
        });
    };
    DrugCommentReportComponent.prototype.goBack = function () {
        this.location.back();
    };
    DrugCommentReportComponent.prototype.printReport = function () {
        window.print();
    };
    DrugCommentReportComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    DrugCommentReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rpt-drugComment',
            template: __webpack_require__(982),
            styles: [__webpack_require__(142)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _e) || Object])
    ], DrugCommentReportComponent);
    return DrugCommentReportComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/drugComment.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugCustomerReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugCustomerReportComponent = (function () {
    function DrugCustomerReportComponent(srv, srvDrg, srvDest, srvRgn, auth, location) {
        this.srv = srv;
        this.srvDrg = srvDrg;
        this.srvDest = srvDest;
        this.srvRgn = srvRgn;
        this.auth = auth;
        this.location = location;
        this.currentUser = this.auth.getUser();
        this.drugList = [];
        this.collection = [];
        this.destList = [];
        this.regionList = [];
        this.today = new Date();
        this.fromDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.toDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.drugID = null;
        this.destID = null;
        this.regionID = null;
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.reportHeader = "Product Analysis (Customers In Period)";
    }
    DrugCustomerReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvDrg.getDrug().subscribe(function (drg) {
            _this.drugList = drg;
            _this.srvRgn.getRegion().subscribe(function (rgn) {
                _this.regionList = rgn;
            });
        });
    };
    DrugCustomerReportComponent.prototype.ViewReport = function () {
        var _this = this;
        this.srv.getdrugAnalysis(__WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.fromDate)), __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.toDate)), this.drugID, 'Dest', this.destID == null ? null : this.destID.toString())
            .subscribe(function (ret) {
            _this.collection = ret;
        });
    };
    DrugCustomerReportComponent.prototype.goBack = function () {
        this.location.back();
    };
    DrugCustomerReportComponent.prototype.printReport = function () {
        window.print();
    };
    DrugCustomerReportComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    DrugCustomerReportComponent.prototype.onRegChange = function (newobj) {
        var _this = this;
        if (newobj.target.value) {
            var region = newobj.target.value.split(':')[1].trim();
            this.srvDest.getApprovedRegionDestinations(region).subscribe(function (dst) {
                if (dst.error) {
                    _this.errorMessage = dst.error.message ? dst.error.message : dst.error;
                }
                else {
                    _this.destList = dst;
                }
            });
        }
    };
    DrugCustomerReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rpt-drugCustomer',
            template: __webpack_require__(983),
            styles: [__webpack_require__(142)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["f" /* DestinationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["f" /* DestinationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services__["d" /* RegionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["d" /* RegionService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _f) || Object])
    ], DrugCustomerReportComponent);
    return DrugCustomerReportComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/drugCustomer.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugPeriodReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugPeriodReportComponent = (function () {
    function DrugPeriodReportComponent(srv, srvDrg, auth, location) {
        this.srv = srv;
        this.srvDrg = srvDrg;
        this.auth = auth;
        this.location = location;
        this.currentUser = this.auth.getUser();
        this.drugList = [];
        this.collection = [];
        this.today = new Date();
        this.fromDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.toDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.drugID = null;
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.reportHeader = "Product Analysis (Specifications)";
    }
    DrugPeriodReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvDrg.getDrug().subscribe(function (drg) {
            _this.drugList = drg;
        });
    };
    DrugPeriodReportComponent.prototype.ViewReport = function () {
        var _this = this;
        this.srv.getdrugAnalysis(__WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.fromDate)), __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.toDate)), this.drugID, 'all', 'all').subscribe(function (ret) {
            _this.collection = ret;
        });
    };
    DrugPeriodReportComponent.prototype.goBack = function () {
        this.location.back();
    };
    DrugPeriodReportComponent.prototype.printReport = function () {
        window.print();
    };
    DrugPeriodReportComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    DrugPeriodReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rpt-drugPeriod',
            template: __webpack_require__(984),
            styles: [__webpack_require__(142)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["o" /* DrugService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _d) || Object])
    ], DrugPeriodReportComponent);
    return DrugPeriodReportComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/drugPeriod.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare let d3, nv: any;
var PromoReportComponent = (function () {
    function PromoReportComponent(srv, srvGft, srvProm, auth, srvIms, location) {
        this.srv = srv;
        this.srvGft = srvGft;
        this.srvProm = srvProm;
        this.auth = auth;
        this.srvIms = srvIms;
        this.location = location;
        this.currentUser = this.auth.getUser();
        this.gftList = [];
        this.imsList = [];
        this.today = new Date();
        this.fromDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.toDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.imsID = null;
        this.original = [];
    }
    PromoReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvGft.getGift().subscribe(function (gft) {
            _this.gftList = gft;
            _this.srvIms.getIMS().subscribe(function (ims) { return _this.imsList = ims; });
        });
    };
    PromoReportComponent.prototype.ViewReport = function () {
        var _this = this;
        this.srv.getPromo(__WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.fromDate)), __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.toDate)), this.imsID).subscribe(function (ret) {
            _this.original = ret;
            _this.unique = ret.map(function (obj) { return obj.GiftName; });
            _this.unique = _this.unique.filter(function (x, i, a) { return a.indexOf(x) == i; });
            _this.data = _this.unique.map(function (gft) {
                return {
                    name: gft, children: ret
                        .filter(function (r) { return r.GiftName == gft; })
                        .map(function (f) {
                        return { name: f.ToolName, size: f.Qty == null ? 0 : f.Qty };
                    })
                };
            });
        });
    };
    PromoReportComponent.prototype.goBack = function () {
        this.location.back();
    };
    PromoReportComponent.prototype.printReport = function () {
        window.print();
    };
    PromoReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rpt-promo',
            template: __webpack_require__(985),
            styles: [__webpack_require__(142), __webpack_require__(962)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["q" /* GiftService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["q" /* GiftService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["r" /* PromoToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["r" /* PromoToolsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _f) || Object])
    ], PromoReportComponent);
    return PromoReportComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/promo.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reports',
            template: "\n    <router-outlet></router-outlet>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], ReportsComponent);
    return ReportsComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/report.component.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7____ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_pipe_module__ = __webpack_require__(185);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { reportRouting } from './report.routing';
var ReportsModule = (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_9__pipes_pipe_module__["a" /* CustomPipesModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__["Ng2PaginationModule"], __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7____["a" /* ReportsComponent */], __WEBPACK_IMPORTED_MODULE_7____["b" /* ReportHomeComponent */], __WEBPACK_IMPORTED_MODULE_7____["c" /* VisCompareReportComponent */],
                __WEBPACK_IMPORTED_MODULE_7____["d" /* SpecVisitsComponent */], __WEBPACK_IMPORTED_MODULE_7____["e" /* PromoReportComponent */], __WEBPACK_IMPORTED_MODULE_7____["f" /* VisDailyReportComponent */],
                __WEBPACK_IMPORTED_MODULE_7____["g" /* DrugCommentReportComponent */], __WEBPACK_IMPORTED_MODULE_7____["h" /* DrugPeriodReportComponent */],
                __WEBPACK_IMPORTED_MODULE_7____["i" /* DrugCustomerReportComponent */], __WEBPACK_IMPORTED_MODULE_7____["j" /* DrugSpecsReportComponent */] /**/],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services__["l" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_8__services__["b" /* AuthenticationService */]],
        }), 
        __metadata('design:paramtypes', [])
    ], ReportsModule);
    return ReportsModule;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/report.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportHomeComponent = (function () {
    function ReportHomeComponent() {
        this.reports = [
            {
                header: "Visit Analysis",
                heading: true
            },
            {
                header: "User Daily Visits",
                link: "/home/reports/visDaily"
            },
            {
                header: "User Visits Comparison",
                link: "/home/reports/visComp"
            },
            {
                header: "Specification Visits",
                link: "/home/reports/spec"
            },
            {
                header: "Promotional Tools",
                link: "/home/reports/promo"
            },
            {
                header: "IMS Visits",
                link: "/home/reports/visIMS"
            },
            {
                header: "Products Analysis",
                heading: true
            },
            {
                header: "Product Analysis In Period",
                link: "/home/reports/drgperiod"
            },
            {
                header: "Comments Analysis",
                link: "/home/reports/drgcomment"
            },
            {
                header: "Customer Analysis",
                link: "/home/reports/drgcust"
            },
            {
                header: "Customers Specification Analysis",
                link: "/home/reports/drgspec"
            },
            {
                header: "Promotional Tools Analysis",
                link: "/home/reports/promo"
            }
        ];
    }
    ReportHomeComponent.prototype.ngOnInit = function () { };
    ReportHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rpt-home',
            template: __webpack_require__(986)
        }), 
        __metadata('design:paramtypes', [])
    ], ReportHomeComponent);
    return ReportHomeComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/rptHome.component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecVisitsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpecVisitsComponent = (function () {
    function SpecVisitsComponent(srv, srvSpec, auth, srvIms, location) {
        this.srv = srv;
        this.srvSpec = srvSpec;
        this.auth = auth;
        this.srvIms = srvIms;
        this.location = location;
        this.currentUser = this.auth.getUser();
        this.specList = [];
        this.imsList = [];
        this.today = new Date();
        this.fromDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.toDate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.today);
        this.imsID = null;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartType = 'pie';
        this.colorsEmpty = [];
    }
    SpecVisitsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvSpec.getSpec().subscribe(function (spc) {
            _this.specList = spc;
            _this.srvIms.getIMS().subscribe(function (ims) { return _this.imsList = ims; });
        });
    };
    SpecVisitsComponent.prototype.ViewReport = function () {
        var _this = this;
        this.srv.getSpecVisits(this.selectedSpec, __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.fromDate)), __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](new Date(this.toDate)), this.imsID).subscribe(function (ret) {
            if (ret.length > 0) {
                _this.pieChartLabels = ret.map(function (dat) { return dat.SpecName == null ? 'N/A' : dat.SpecName; });
                _this.pieChartData = ret.map(function (dat) { return dat.VisCount == null ? 0 : dat.VisCount; });
            }
            else {
                _this.pieChartLabels = ['N/A'];
                _this.pieChartData = [0];
            }
            _this.forceChartRefresh();
        });
    };
    SpecVisitsComponent.prototype.goBack = function () {
        this.location.back();
    };
    SpecVisitsComponent.prototype.printReport = function () {
        window.print();
    };
    SpecVisitsComponent.prototype.forceChartRefresh = function () {
        var _this = this;
        setTimeout(function () {
            _this._chart.refresh();
        }, 10);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__["BaseChartDirective"]), 
        __metadata('design:type', Object)
    ], SpecVisitsComponent.prototype, "_chart", void 0);
    SpecVisitsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rpt-spec',
            template: __webpack_require__(987)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["p" /* MedSpecService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["p" /* MedSpecService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _e) || Object])
    ], SpecVisitsComponent);
    return SpecVisitsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/specVisits.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisCompareReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VisCompareReportComponent = (function () {
    /* Constructor, needed to get @Injectables */
    function VisCompareReportComponent(srv, srvUser, auth, location) {
        this.srv = srv;
        this.srvUser = srvUser;
        this.auth = auth;
        this.location = location;
        this.currentUser = this.auth.getUser();
        this.userList = [];
        this.selectedDate = new Date();
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartType = 'pie';
        this.colorsEmpty = [];
    }
    VisCompareReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedUser = this.currentUser.userID;
        this.srvUser.getUserChain(this.currentUser.userID).subscribe(function (usrs) { return _this.userList = usrs; });
    };
    VisCompareReportComponent.prototype.newSchedule = function (datevalue) {
        var _this = this;
        this.selectedDate = datevalue ? new Date() : datevalue;
        this.srv.getUserVisitCompare(this.selectedUser ? this.currentUser.userID : this.selectedUser, __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](datevalue)).subscribe(function (rat) {
            _this.pieChartLabels = rat.map(function (data) { return data.VisType; });
            _this.pieChartData = rat.map(function (data) { return data.VisCount == null ? 0 : data.VisCount; });
            _this.forceChartRefresh();
            // [{
            //     values: this.userRate,      //values - represents the array of {x,y} data points
            //     key: 'Visits Count', //key  - the name of the series.
            //     color: '#ff7f0e'  //color - optional: choose your own line color.
            // }]
        });
    };
    VisCompareReportComponent.prototype.newUser = function () {
        var _this = this;
        this.srv.getUserVisitCompare(this.selectedUser, __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](this.selectedDate)).subscribe(function (rat) {
            _this.pieChartLabels = rat.map(function (data) { return data.VisType; });
            _this.pieChartData = rat.map(function (data) { return data.VisCount == null ? 0 : data.VisCount; });
            _this.forceChartRefresh();
        });
    };
    VisCompareReportComponent.prototype.goBack = function () {
        this.location.back();
    };
    VisCompareReportComponent.prototype.printReport = function () {
        window.print();
    };
    VisCompareReportComponent.prototype.forceChartRefresh = function () {
        var _this = this;
        setTimeout(function () {
            _this._chart.refresh();
        }, 10);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__["BaseChartDirective"]), 
        __metadata('design:type', Object)
    ], VisCompareReportComponent.prototype, "_chart", void 0);
    VisCompareReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rpt-visComp',
            template: __webpack_require__(988)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _d) || Object])
    ], VisCompareReportComponent);
    return VisCompareReportComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/visitCompare.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisDailyReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisDailyReportComponent = (function () {
    /* Constructor, needed to get @Injectables */
    function VisDailyReportComponent(srv, srvUser, auth, location) {
        this.srv = srv;
        this.srvUser = srvUser;
        this.auth = auth;
        this.location = location;
        this.currentUser = this.auth.getUser();
        this.userList = [];
        this.selectedDate = new Date();
        this.userRate = [];
    }
    VisDailyReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedUser = this.currentUser.userID;
        this.srvUser.getUserChain(this.currentUser.userID).subscribe(function (usrs) { return _this.userList = usrs; });
    };
    VisDailyReportComponent.prototype.newSchedule = function (datevalue) {
        var _this = this;
        this.selectedDate = datevalue ? new Date() : datevalue;
        this.srv.getUserVisitRate(this.selectedUser ? this.currentUser.userID : this.selectedUser, this.selectedDate.getMonth() + 1).subscribe(function (rat) {
            _this.userRate = rat[0];
        });
    };
    VisDailyReportComponent.prototype.newUser = function () {
        var _this = this;
        this.srv.getUserVisitRate(this.selectedUser, this.selectedDate.getMonth() + 1).subscribe(function (rat) {
            _this.userRate = rat[0];
        });
    };
    VisDailyReportComponent.prototype.goBack = function () {
        this.location.back();
    };
    VisDailyReportComponent.prototype.printReport = function () {
        window.print();
    };
    VisDailyReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rpt-visDaily',
            template: __webpack_require__(989)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["l" /* ReportsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _d) || Object])
    ], VisDailyReportComponent);
    return VisDailyReportComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/visitDaily.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_validators__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChngPassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChngPassComponent = (function () {
    function ChngPassComponent(srvuser, auth, router, fb) {
        this.srvuser = srvuser;
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.currentUser = this.auth.getUser();
        this.model = new __WEBPACK_IMPORTED_MODULE_3__Models__["n" /* User */]();
        this.inputForm = fb.group({
            'OldPass': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200)])],
            'UserPass': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200)])],
            'ConfPass': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200)])],
        });
    }
    ChngPassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvuser.getuser(this.currentUser.userID).subscribe(function (usr) {
            _this.model = usr[0];
            _this.inputForm.setValidators([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__pipes_validators__["d" /* matchingPasswords */])('UserPass', 'ConfPass'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__pipes_validators__["e" /* matchFieldValue */])('OldPass', _this.model.UserPass)]);
            _this.model.UserPass = '';
        });
    };
    ChngPassComponent.prototype.SavePassword = function (event) {
        var _this = this;
        event.preventDefault();
        this.model.UserPass = this.inputForm.controls['UserPass'].value;
        this.srvuser.changePass(this.model).subscribe(function (ret) {
            if (ret.error) {
                _this.errorMessage = ret.error.message;
            }
            else if (ret.affected > 0) {
                _this.router.navigate(['login']);
            }
        });
    };
    ChngPassComponent.prototype.Back = function () {
        this.router.navigate(['home/dashboard']);
    };
    ChngPassComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-changePass',
            template: __webpack_require__(990)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services__["c" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services__["c" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services__["b" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _d) || Object])
    ], ChngPassComponent);
    return ChngPassComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/chngpass.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUsComponent = (function () {
    function ContactUsComponent(srvCont, auth, fb) {
        this.srvCont = srvCont;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.msgTypeList = __WEBPACK_IMPORTED_MODULE_3__Models__["p" /* MessageTypes */];
        this.srchObj = new __WEBPACK_IMPORTED_MODULE_3__Models__["q" /* ContactUs */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.inFrm = fb.group({
            'Title': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'Type': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'Description': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUser.jobClass < 1) {
            this.srvCont.getContactUs().subscribe(function (cols) {
                _this.collection = cols;
                _this.TableBack();
            });
        }
        else {
            this.srvCont.getUserContactUs(this.currentUser.userID).subscribe(function (cols) {
                _this.collection = cols;
                _this.TableBack();
            });
        }
    };
    ContactUsComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_3__Models__["q" /* ContactUs */]();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Message';
    };
    ContactUsComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    ContactUsComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    ContactUsComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    ContactUsComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.srvCont.getContactUs(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'Message ' + state : state + ' Message';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    ContactUsComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.inFrm.reset();
        this.headerText = 'Contact Us';
        this.errorMessage = null;
    };
    ContactUsComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        this.model.UserID = this.currentUser.userID;
        switch (this.Formstate) {
            case 'Create':
                this.srvCont.InsertContactUs(this.model).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.srvCont.UpdateContactUs(this.model.ID, this.model).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.srvCont.DeleteContactUs(this.model.ID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    ContactUsComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    ContactUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cntct',
            template: __webpack_require__(991)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["n" /* ContactUsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["n" /* ContactUsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _c) || Object])
    ], ContactUsComponent);
    return ContactUsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/contact.component.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(srvUser, srvDash, auth) {
        this.srvUser = srvUser;
        this.srvDash = srvDash;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.users = [];
        this.headings = ["This Month Planned Visits", "This Month Committed Visits",
            "Today's Committed Visits", "This Month Promo Tools"];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvUser.getUserChain(this.currentUser.userID).subscribe(function (cols) {
            _this.collection = cols;
            // var unique = this.collection.map(function (obj) { return obj.UserID; });
            _this.users = _this.collection.filter(function (x, i, a) { return a.indexOf(x) == i; });
            _this.srvDash.getUserChainCounts(_this.currentUser.userID).subscribe(function (ret) {
                _this.planned = ret.planned[0].visCount;
                _this.committed = ret.committed[0].visCount;
                _this.today = ret.today[0].visCount;
                _this.promo = ret.promo[0].promoCount;
            });
        });
    };
    DashboardComponent.prototype.UserChanged = function ($user) {
        this.seluser = null;
        this.seluser = this.collection.filter(function (u) { return u.UserName == $user.target.value; })[0];
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(992)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["g" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["g" /* DashboardService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/dashboard.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPlanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPlanComponent = (function () {
    function UserPlanComponent(srvPlan) {
        this.srvPlan = srvPlan;
        this.appliedClass = true;
        this.plnSpecs = [];
        this.plnDrugs = [];
        this.plnImps = [];
    }
    UserPlanComponent.prototype.ngOnInit = function () {
    };
    UserPlanComponent.prototype.newPlan = function (planID) {
        var _this = this;
        this.srvPlan.getPlanDetails(planID).subscribe(function (det) {
            _this.plnSpecs = det.specs.filter(function (d) { return d.Checked == true; });
            _this.plnDrugs = det.drgs.filter(function (d) { return d.Checked == true; });
            _this.plnImps = det.imps.filter(function (d) { return d.Checked == true; });
        });
    };
    UserPlanComponent.prototype.changeArrowClass = function () {
        this.appliedClass = !this.appliedClass;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */]) === 'function' && _a) || Object)
    ], UserPlanComponent.prototype, "currentUser", void 0);
    UserPlanComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dash-plan',
            template: __webpack_require__(994)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["h" /* PlanService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["h" /* PlanService */]) === 'function' && _b) || Object])
    ], UserPlanComponent);
    return UserPlanComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/plan.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserScheduleComponent = (function () {
    function UserScheduleComponent(srvSchd) {
        this.srvSchd = srvSchd;
        this.userSched = [];
        this.appliedClass = true;
    }
    UserScheduleComponent.prototype.ngOnInit = function () {
        // this.srvSchd.getUserSchedule(this.currentUser.userID).subscribe(scd => this.userSched = scd);
        // this.newSchedule(new Date())
        if (this.chain) {
            this.dispUser = {
                userID: this.user.UserID,
                UserName: this.user.UserName
            };
        }
        else {
            this.dispUser = {
                userID: this.currentUser.userID,
                UserName: this.currentUser.UserName
            };
        }
    };
    UserScheduleComponent.prototype.ngOnChanges = function () {
        this.viewBulk();
    };
    UserScheduleComponent.prototype.newSchedule = function (datevalue) {
        this.strdate = __WEBPACK_IMPORTED_MODULE_3__helpers_helper_functions__["a" /* handleDate */](datevalue);
        this.viewBulk();
    };
    UserScheduleComponent.prototype.viewBulk = function () {
        var _this = this;
        this.ngOnInit();
        this.srvSchd.getUserScheduleDate(this.dispUser.userID, this.strdate).subscribe(function (scd) { return _this.userSched = scd[0]; });
    };
    UserScheduleComponent.prototype.changeArrowClass = function () {
        this.appliedClass = !this.appliedClass;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */]) === 'function' && _a) || Object)
    ], UserScheduleComponent.prototype, "currentUser", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Models__["n" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Models__["n" /* User */]) === 'function' && _b) || Object)
    ], UserScheduleComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], UserScheduleComponent.prototype, "chain", void 0);
    UserScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dash-schedule',
            template: __webpack_require__(995)
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["g" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["g" /* DashboardService */]) === 'function' && _c) || Object])
    ], UserScheduleComponent);
    return UserScheduleComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/schedule.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserWorkRateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { nvD3 } from 'ng2-nvd3'
// declare let d3, nv: any;
// import * as Moment from 'moment';
var UserWorkRateComponent = (function () {
    /* Constructor, needed to get @Injectables */
    function UserWorkRateComponent(srvDash) {
        this.srvDash = srvDash;
        this.userRate = [];
        this.selectedMonth = new Date().getMonth() + 1;
        this.appliedClass = true;
        this.chartData = [{ data: [], label: '' }];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        // public chartData = [
        //             { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' } //,
        //             // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        //             // { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        //         ];
        // public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    UserWorkRateComponent.prototype.ngOnInit = function () {
        if (this.chain) {
            this.dispUser = {
                userID: this.user.UserID,
                UserName: this.user.UserName
            };
        }
        else {
            this.dispUser = {
                userID: this.currentUser.userID,
                UserName: this.currentUser.UserName
            };
        }
    };
    UserWorkRateComponent.prototype.ngOnChanges = function () {
        this.viewBulk();
    };
    UserWorkRateComponent.prototype.newSchedule = function (datevalue) {
        this.selectedMonth = datevalue.getMonth() + 1;
        this.viewBulk();
    };
    UserWorkRateComponent.prototype.viewBulk = function () {
        var _this = this;
        this.ngOnInit();
        this.srvDash.getUserVisitRate(this.dispUser.userID, this.selectedMonth).subscribe(function (rat) {
            // this.userRate = rat[0].map(data => {
            //     return { x: new Date(data.DayDate), y: data.visCount == null ? 0 : data.visCount }
            // })
            _this.chartData = [{
                    data: rat[0].map(function (da) { return da.visCount == null ? 0 : da.visCount; }),
                    label: 'Visit Count'
                }];
            _this.lineChartLabels = rat[0].map(function (data) { return data.DayDate.split('T')[0]; });
            // this.chartData = [
            //             { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            //             { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            //             { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
            //         ]
            // this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
            _this.forceChartRefresh();
        });
    };
    UserWorkRateComponent.prototype.changeArrowClass = function () {
        this.appliedClass = !this.appliedClass;
    };
    UserWorkRateComponent.prototype.forceChartRefresh = function () {
        var _this = this;
        setTimeout(function () {
            _this._chart.refresh();
        }, 10);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */]) === 'function' && _a) || Object)
    ], UserWorkRateComponent.prototype, "currentUser", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Models__["n" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Models__["n" /* User */]) === 'function' && _b) || Object)
    ], UserWorkRateComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], UserWorkRateComponent.prototype, "chain", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__["BaseChartDirective"]), 
        __metadata('design:type', Object)
    ], UserWorkRateComponent.prototype, "_chart", void 0);
    UserWorkRateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dash-workRate',
            template: __webpack_require__(996)
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["g" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["g" /* DashboardService */]) === 'function' && _c) || Object])
    ], UserWorkRateComponent);
    return UserWorkRateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/workRate.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineUsersComponent = (function () {
    function LineUsersComponent() {
        this.userSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispUsers = [];
    }
    LineUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dispUsers = this.UserList.filter(function (u) { return u.LineName == _this.line; });
        var SelectedUsers = this.dispUsers.filter(function (u) { return u.selected == true; });
        if (SelectedUsers.length > 0) {
            this.SelectedUser = SelectedUsers[0].UserID;
        }
    };
    LineUsersComponent.prototype.SelectChanged = function () {
        this.userSelected.emit({ userID: this.SelectedUser, LineID: this.line });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], LineUsersComponent.prototype, "UserList", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], LineUsersComponent.prototype, "line", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], LineUsersComponent.prototype, "userSelected", void 0);
    LineUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dest-lineusers',
            template: "\n    <div class=\"row form-group\">\n        <label for=\"SelectUser\" class=\"control-label col-md-4 col-sm-4\">{{line}} Sales Line</label>\n         <div class=\"col-md-8 col-sm-8\">\n            <select class=\"form-control\" name=\"SelectUser\" [(ngModel)]=\"SelectedUser\" (change)=\"SelectChanged()\" #usr=\"ngModel\">\n                <option value=\"\">Select a Medical Rep.</option>\n                <option *ngFor=\"let i of dispUsers\" [ngValue]=\"i.UserID\">{{i.UserName}}</option>\n            </select>\n            <div class='error' *ngIf=\"usr.touched && !usr.valid\">\n                <div class=\"alert alert-danger\" *ngIf=\"usr.errors.required\">A Rep. is required.</div>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LineUsersComponent);
    return LineUsersComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/lineUsers.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestinationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DestinationComponent = (function () {
    function DestinationComponent(serv, srvReg, srvIms, srvMed, srvImp, auth) {
        this.serv = serv;
        this.srvReg = srvReg;
        this.srvIms = srvIms;
        this.srvMed = srvMed;
        this.srvImp = srvImp;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.filteredDest = [];
        this.srchObj = new __WEBPACK_IMPORTED_MODULE_2__Models__["v" /* Destination */]();
        this.model = new __WEBPACK_IMPORTED_MODULE_2__Models__["v" /* Destination */]();
        this.ProvinceList = __WEBPACK_IMPORTED_MODULE_2__Models__["w" /* provinces */];
        this.RegionList = [];
        this.MedSpecList = [];
        this.VisImpList = [];
        this.UserList = [];
        this.lines = [];
        this.DestUsers = [];
        this.IMSList = [];
        this.allIMSList = [];
        this.orderbyString = "-Assigned;-PlanExist;";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.curMonth = new Date().getMonth();
        this.ClassColumn = 'Approved';
    }
    DestinationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvMed.getSpec().subscribe(function (spec) {
            _this.MedSpecList = spec;
            _this.srvImp.getImp().subscribe(function (imp) {
                _this.VisImpList = imp;
                _this.srvIms.getUserIMS(_this.currentUser.userID).subscribe(function (ims) {
                    _this.IMSList = ims;
                    _this.srvIms.getIMS().subscribe(function (i) {
                        _this.allIMSList = i;
                        if (_this.currentUser.jobClass < 1 || _this.currentUser.jobClass == 99) {
                            _this.serv.getDestination().subscribe(function (cols) {
                                _this.collection = cols;
                                _this.filteredDest = _this.collection;
                                _this.TableBack();
                            });
                        }
                        else {
                            _this.serv.getUserChainDestination(_this.currentUser.userID).subscribe(function (cols) {
                                _this.collection = cols;
                                _this.TableBack();
                            });
                        }
                        _this.srchObj.DestType = 'Clinic (Doctor)';
                    });
                });
            });
        }, function (err) { return _this.errorMessage = err.message; });
    };
    DestinationComponent.prototype.CreateNew = function () {
        var _this = this;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__Models__["v" /* Destination */]();
        this.model.DestType = this.srchObj.DestType;
        this.serv.getAllDestUsers().subscribe(function (usr) {
            _this.UserList = usr;
            var unique = _this.UserList.map(function (obj) { return obj.LineName; });
            _this.lines = unique.filter(function (x, i, a) { return a.indexOf(x) == i; });
            _this.DestUsers = _this.UserList.filter(function (u) { return u.selected == true; }).map(function (ud) { return { DestID: _this.model.DestID, UserID: ud.UserID, LineID: ud.LineName }; });
        });
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Customer';
    };
    DestinationComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    DestinationComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    DestinationComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    DestinationComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.serv.getDestination(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.srvReg.getProvinceRegions(_this.model.ProvinceID.replace("'", "''")).subscribe(function (reg) {
                _this.RegionList = reg;
                _this.serv.getDestUsers(id).subscribe(function (usr) {
                    _this.UserList = usr[0];
                    var unique = _this.UserList.map(function (obj) { return obj.LineName; });
                    _this.lines = unique.filter(function (x, i, a) { return a.indexOf(x) == i; });
                    _this.DestUsers = _this.UserList.filter(function (u) { return u.selected == true; }).map(function (ud) { return { DestID: _this.model.DestID, UserID: ud.UserID, LineID: ud.LineName }; });
                    _this.showTable = false;
                    _this.Formstate = state;
                    _this.headerText = state == 'Details' ? 'Customer ' + state : state + ' Customer';
                });
            });
        }, function (err) { return _this.errorMessage = err.message; });
    };
    DestinationComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Customers';
        this.errorMessage = null;
    };
    DestinationComponent.prototype.TabClicked = function (option) {
        this.srchObj.DestType = option;
        this.model.DestType = option;
        this.IMSSelected();
    };
    DestinationComponent.prototype.onProvinceChanged = function (newobj) {
        var _this = this;
        if (newobj.target.value) {
            var province = newobj.target.value.split(':')[1].trim().replace("'", "''");
            this.srvReg.getApprovedProvinceRegions(province).subscribe(function (reg) { return _this.RegionList = reg; });
        }
    };
    DestinationComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.DestUsers.length <= 0) {
            this.errorMessage = "Please, Select a Medical Rep. for each Sales Line";
            return;
        }
        var newDestination = this.model;
        newDestination.CreateUser = this.currentUser.userID;
        newDestination.SpecName = this.MedSpecList.filter(function (sp) { return sp.SpecID == _this.model.MedSpecID; })[0].SpecName;
        newDestination.RegionName = this.RegionList.filter(function (sp) { return sp.RegionID == _this.model.RegionID; })[0].RegionName;
        newDestination.RegionProvince = newDestination.RegionName + ' - ' + newDestination.ProvinceID;
        newDestination.IMS = this.allIMSList.filter(function (sp) { return sp.IMSID == _this.model.IMSID; })[0].IMS;
        newDestination.ImpName = this.VisImpList.filter(function (sp) { return sp.ImpID == _this.model.VisitImpID; })[0].ImpName;
        newDestination.VisitsNo = this.VisImpList.filter(function (sp) { return sp.ImpID == _this.model.VisitImpID; })[0].VisitsNo;
        var dest = this.lines.map(function (l) {
            var d = _this.DestUsers.filter(function (du) { return du.LineID == l; });
            if (d.length > 0) {
                return d[0];
            }
            else {
                return null;
            }
        }).filter(function (du) { return du != null; });
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertDestination(newDestination, dest).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        // this.ngOnInit();
                        newDestination.DestID = ret.set.DestID;
                        _this.collection.push(newDestination);
                        _this.IMSSelected();
                        _this.TableBack();
                    }
                }, function (err) { return _this.errorMessage = err.message; });
                break;
            case 'Edit':
                this.serv.UpdateDestination(newDestination.DestID, newDestination, dest).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        // this.ngOnInit();
                        var indx = _this.collection.findIndex(function (dst) { return dst.DestID == newDestination.DestID; });
                        _this.collection.fill(newDestination, indx, indx + 1);
                        _this.IMSSelected();
                        _this.TableBack();
                    }
                }, function (err) { return _this.errorMessage = err.message; });
                break;
            case 'Delete':
                this.serv.DeleteDestination(newDestination.DestID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        // this.ngOnInit();
                        var indx = _this.collection.findIndex(function (dst) { return dst.DestID == newDestination.DestID; });
                        _this.collection.splice(indx, 1);
                        _this.IMSSelected();
                        _this.TableBack();
                    }
                }, function (err) { return _this.errorMessage = err.message; });
                break;
            default:
                break;
        }
    };
    DestinationComponent.prototype.ApproveDestination = function (id) {
        var _this = this;
        this.serv.ApproveDestination(id, this.currentUser.userID).subscribe(function (ret) {
            if (ret.error) {
                _this.errorMessage = ret.error.message;
            }
            else if (ret.affected > 0) {
                var tabs = document.getElementsByClassName("tabs");
                for (var i = 0; i < tabs.length; i++) {
                    tabs[i].className = "tabs";
                }
                document.getElementById("tab2").className = "active";
                _this.ngOnInit();
            }
        }, function (err) { return _this.errorMessage = err.message; });
    };
    DestinationComponent.prototype.SortTable = function (column) {
        var sortCol = column == 'ClassColumn' ? this.ClassColumn : column;
        if (this.orderbyString.indexOf(sortCol) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + sortCol;
        }
        else if (this.orderbyString.indexOf('-' + sortCol) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + sortCol;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    DestinationComponent.prototype.userSelected = function (obj) {
        var index = this.DestUsers.findIndex(function (d) { return d.LineID == obj.LineID; });
        if (!obj.userID) {
            this.DestUsers.splice(index, index + 1);
            return;
        }
        var destuser = { DestID: this.model.DestID, UserID: obj.userID, LineID: obj.LineID };
        if (index >= 0) {
            this.DestUsers.fill(destuser, index, index + 1);
        }
        else {
            this.DestUsers.push(destuser);
        }
    };
    DestinationComponent.prototype.IMSSelected = function () {
        var _this = this;
        if (this.selIMS) {
            this.filteredDest = this.collection.filter(function (d) { return d.IMSID == _this.selIMS; });
        }
        else {
            this.filteredDest = this.collection;
        }
    };
    DestinationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dest',
            template: __webpack_require__(997)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["f" /* DestinationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["f" /* DestinationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["d" /* RegionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["d" /* RegionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["k" /* IMSService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services__["p" /* MedSpecService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["p" /* MedSpecService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services__["s" /* ImportanceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["s" /* ImportanceService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AuthenticationService */]) === 'function' && _f) || Object])
    ], DestinationComponent);
    return DestinationComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/destination.component.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateSliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateSliderComponent = (function () {
    function DateSliderComponent() {
        this.dateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.months = [
            { val: '01', name: 'Jan' },
            { val: '02', name: 'Feb' },
            { val: '03', name: 'Mar' },
            { val: '04', name: 'Apr' },
            { val: '05', name: 'May' },
            { val: '06', name: 'Jun' },
            { val: '07', name: 'Jul' },
            { val: '08', name: 'Aug' },
            { val: '09', name: 'Sep' },
            { val: '10', name: 'Oct' },
            { val: '11', name: 'Nov' },
            { val: '12', name: 'Dec' }
        ];
    }
    DateSliderComponent.prototype.ngOnInit = function () {
        this.curDate = new Date();
        this.changeView();
    };
    DateSliderComponent.prototype.getMonthName = function () {
        var month = this.curDate.getMonth();
        return this.months[month].name;
    };
    DateSliderComponent.prototype.previousMonth = function () {
        this.curDate = new Date(this.curDate.setMonth(this.curDate.getMonth() - 1));
        this.changeView();
    };
    DateSliderComponent.prototype.nextMonth = function () {
        this.curDate = new Date(this.curDate.setMonth(this.curDate.getMonth() + 1));
        this.changeView();
    };
    DateSliderComponent.prototype.changeView = function () {
        this.MonthName = this.getMonthName();
        this.Year = this.curDate.getFullYear();
        this.dateChanged.emit(this.curDate);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DateSliderComponent.prototype, "dateChanged", void 0);
    DateSliderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'date-slider',
            template: __webpack_require__(998),
            styles: [" h2 { display: inline; }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], DateSliderComponent);
    return DateSliderComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/dateSlider.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(419);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelperModule = (function () {
    function HelperModule() {
    }
    HelperModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2____["b" /* DateSliderComponent */], __WEBPACK_IMPORTED_MODULE_2____["c" /* PlanSliderComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2____["b" /* DateSliderComponent */], __WEBPACK_IMPORTED_MODULE_2____["c" /* PlanSliderComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services__["h" /* PlanService */]],
        }), 
        __metadata('design:paramtypes', [])
    ], HelperModule);
    return HelperModule;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/helper.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_functions__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanSliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanSliderComponent = (function () {
    function PlanSliderComponent(srvPlan) {
        this.srvPlan = srvPlan;
        this.planChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userPlan = [];
        this.selectedPlan = 0;
    }
    PlanSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvPlan.getUserPlan(this.currentUser.userID).subscribe(function (pln) {
            _this.userPlan = pln;
            if (!_this.userPlan)
                return;
            _this.selectedPlan = _this.userPlan.findIndex(function (p) { return new Date() >= new Date(p.FromDate) && new Date() <= new Date(p.ToDate); });
            _this.changeView();
        });
    };
    PlanSliderComponent.prototype.previousPlan = function () {
        this.selectedPlan--;
        this.changeView();
    };
    PlanSliderComponent.prototype.nextPlan = function () {
        this.selectedPlan++;
        this.changeView();
    };
    PlanSliderComponent.prototype.changeView = function () {
        this.FromDate = __WEBPACK_IMPORTED_MODULE_3__helper_functions__["a" /* handleDate */](new Date(this.userPlan[this.selectedPlan].FromDate));
        this.ToDate = __WEBPACK_IMPORTED_MODULE_3__helper_functions__["a" /* handleDate */](new Date(this.userPlan[this.selectedPlan].ToDate));
        this.planChanged.emit(this.userPlan[this.selectedPlan].PlanID);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */]) === 'function' && _a) || Object)
    ], PlanSliderComponent.prototype, "currentUser", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], PlanSliderComponent.prototype, "planChanged", void 0);
    PlanSliderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'plan-slider',
            template: __webpack_require__(999),
            styles: [" h2 { display: inline; }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["h" /* PlanService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["h" /* PlanService */]) === 'function' && _b) || Object])
    ], PlanSliderComponent);
    return PlanSliderComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/planSlider.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_guard__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BasicData__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Reports__ = __webpack_require__(417);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeRoutes; });





var homeRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2____["h" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2____["f" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'vac', component: __WEBPACK_IMPORTED_MODULE_2____["s" /* VacationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'regions', component: __WEBPACK_IMPORTED_MODULE_2____["g" /* RegionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'dest', component: __WEBPACK_IMPORTED_MODULE_2____["k" /* DestinationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'visit', component: __WEBPACK_IMPORTED_MODULE_2____["w" /* VisitComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'pass', component: __WEBPACK_IMPORTED_MODULE_2____["r" /* ChngPassComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'cntct', component: __WEBPACK_IMPORTED_MODULE_2____["t" /* ContactUsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
            // { path: 'basic', loadChildren: () => System.import('../BasicData/basic.module')}   
            {
                path: 'basic',
                component: __WEBPACK_IMPORTED_MODULE_3__BasicData__["a" /* BasicDataComponent */],
                children: [
                    { path: 'lines', component: __WEBPACK_IMPORTED_MODULE_3__BasicData__["b" /* SalesLineComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'gifts', component: __WEBPACK_IMPORTED_MODULE_3__BasicData__["d" /* GiftComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'promo', component: __WEBPACK_IMPORTED_MODULE_3__BasicData__["g" /* PromoToolsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'specs', component: __WEBPACK_IMPORTED_MODULE_3__BasicData__["f" /* MedSpecComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'vimp', component: __WEBPACK_IMPORTED_MODULE_3__BasicData__["e" /* ImportanceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'drugs', component: __WEBPACK_IMPORTED_MODULE_3__BasicData__["c" /* DrugComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'ims', component: __WEBPACK_IMPORTED_MODULE_3__BasicData__["h" /* ImsDataComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] }
                ]
            },
            {
                path: 'reports', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["a" /* ReportsComponent */],
                children: [
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["b" /* ReportHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'visComp', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["c" /* VisCompareReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'visDaily', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["f" /* VisDailyReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'spec', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["d" /* SpecVisitsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'promo', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["e" /* PromoReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'drgperiod', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["h" /* DrugPeriodReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'drgcomment', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["g" /* DrugCommentReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'drgcust', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["i" /* DrugCustomerReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'drgspec', component: __WEBPACK_IMPORTED_MODULE_4__Reports__["j" /* DrugSpecsReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] },
                ]
            },
            { path: 'plan', component: __WEBPACK_IMPORTED_MODULE_2____["p" /* PlanComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard__["a" /* AuthGuard */]] }
        ]
    }
];
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/home.routing.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(auth) {
        this.auth = auth;
        this.isActive = false;
        this.showMenu = '';
        this.currentUser = this.auth.getUser();
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sidebar',
            template: __webpack_require__(1001),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/sidebar.component.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopNavComponent = (function () {
    function TopNavComponent() {
        this.ToggleSidebar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TopNavComponent.prototype.closesidebar = function () {
        this.ToggleSidebar.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TopNavComponent.prototype, "currentUser", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TopNavComponent.prototype, "ToggleSidebar", void 0);
    TopNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'top-nav',
            template: __webpack_require__(1002),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [])
    ], TopNavComponent);
    return TopNavComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/topnav.component.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_validators__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_helper_functions__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlanComponent = (function () {
    function PlanComponent(srvPlan, srvImp, srvDrug, srvSpec, srvLine, auth, fb) {
        var _this = this;
        this.srvPlan = srvPlan;
        this.srvImp = srvImp;
        this.srvDrug = srvDrug;
        this.srvSpec = srvSpec;
        this.srvLine = srvLine;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.srchObj = new __WEBPACK_IMPORTED_MODULE_5__Models__["o" /* MonthPlan */]();
        this.lines = [];
        this.plnSpecs = [];
        this.plnDrugs = [];
        this.plnImps = [];
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.inFrm = fb.group({
            'fromDate': [this.cnvFromDate, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'toDate': [this.cnvToDate, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'line': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'plnName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.inFrm.controls['line'].valueChanges.subscribe(function (val) { return _this.lineChange(val); });
        this.inFrm.controls['fromDate'].valueChanges.subscribe(function (val) { return _this.FromDateChange(val); });
    }
    PlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvPlan.getPlan().subscribe(function (cols) {
            _this.collection = cols;
            _this.srvLine.getLine().subscribe(function (ln) {
                _this.lines = ln;
                _this.srvPlan.getDetails().subscribe(function (det) {
                    _this.plnSpecs = det.specs;
                    _this.drugs = det.drgs;
                    // this.plnDrugs = det.drgs
                    _this.plnImps = det.imps;
                    _this.TableBack();
                });
            });
        }, function (err) { return _this.errorMessage = err.message; });
    };
    PlanComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_5__Models__["o" /* MonthPlan */]();
        var today = new Date();
        this.cnvFromDate = __WEBPACK_IMPORTED_MODULE_4__helpers_helper_functions__["a" /* handleDate */](today);
        this.cnvToDate = __WEBPACK_IMPORTED_MODULE_4__helpers_helper_functions__["a" /* handleDate */](today);
        this.updateValidators('all');
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Plan';
        this.ToggleAllSpecs(true);
        this.drugs.forEach(function (drg) { return drg.Checked = true; });
        // this.ToggleAllDrugs(true);
        this.ToggleAllImps(true);
    };
    PlanComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    PlanComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    PlanComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    PlanComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.srvPlan.getPlan(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.cnvFromDate = _this.model.FromDate.toString().split('T')[0];
            _this.cnvToDate = _this.model.ToDate.toString().split('T')[0];
            _this.updateValidators('all');
            _this.FromDateChange(_this.inFrm.controls['fromDate'].value);
            _this.srvPlan.getPlanDetails(id).subscribe(function (det) {
                _this.plnSpecs = det.specs;
                _this.drugs = det.drgs;
                _this.lineChange(_this.model.SalesLineID);
                _this.plnImps = det.imps;
                _this.showTable = false;
                _this.Formstate = state;
                _this.headerText = state == 'Details' ? 'Plan ' + state : state + ' Plan';
            }, function (err) { return _this.errorMessage = err.message; });
        }, function (err) { return _this.errorMessage = err.message; });
    };
    PlanComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Plan';
        this.errorMessage = null;
        this.inFrm.reset();
    };
    PlanComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        this.model.FromDate = new Date(this.cnvFromDate);
        this.model.ToDate = new Date(this.cnvToDate);
        var selDrugs = this.plnDrugs.filter(function (c) { return c.Checked == true; });
        var selSpec = this.plnSpecs.filter(function (c) { return c.Checked == true; });
        var selImp = this.plnImps.filter(function (c) { return c.Checked == true; });
        if (selDrugs.length <= 0 && this.Formstate != "Delete") {
            this.errorMessage = "Please Select Any of the Products";
            return;
        }
        if (selSpec.length <= 0 && this.Formstate != "Delete") {
            this.errorMessage = "Please Select Any of the Specifications";
            return;
        }
        if (selImp.length <= 0 && this.Formstate != "Delete") {
            this.errorMessage = "Please Select Any of the Cycles";
            return;
        }
        switch (this.Formstate) {
            case 'Create':
                this.srvPlan.InsertPlan(this.model, selDrugs, selSpec, selImp).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    }
                    else {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.srvPlan.UpdatePlan(this.model.PlanID, this.model, selDrugs, selSpec, selImp).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.srvPlan.DeletePlan(this.model.PlanID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    PlanComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    PlanComponent.prototype.FromDateChange = function (value) {
        if (!value)
            return;
        this.updateValidators('to');
        this.constructPlanName();
    };
    PlanComponent.prototype.updateValidators = function (all) {
        switch (all) {
            case 'all':
                this.inFrm.controls['fromDate'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["f" /* planDateInRange */])(this.collection, this.model.PlanID, this.model.SalesLineID)]));
                this.inFrm.controls['fromDate'].markAsTouched();
                this.inFrm.controls['fromDate'].updateValueAndValidity();
                this.inFrm.controls['toDate'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["f" /* planDateInRange */])(this.collection, this.model.PlanID, this.model.SalesLineID),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["c" /* minDate */])(this.inFrm.controls['fromDate'].value)]));
                this.inFrm.controls['toDate'].markAsTouched();
                this.inFrm.controls['toDate'].updateValueAndValidity();
                break;
            case 'to':
                this.inFrm.controls['toDate'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["f" /* planDateInRange */])(this.collection, this.model.PlanID, this.model.SalesLineID),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["c" /* minDate */])(this.inFrm.controls['fromDate'].value)]));
                this.inFrm.controls['toDate'].markAsTouched();
                this.inFrm.controls['toDate'].updateValueAndValidity();
                break;
            default:
                break;
        }
    };
    PlanComponent.prototype.lineChange = function (value) {
        if (!value)
            return;
        this.plnDrugs = this.drugs.filter(function (drg) { return drg.SalesLineID == value; });
        this.constructPlanName();
        this.updateValidators('all');
        // this.plnDrugs.forEach(drg => { if (drg.SalesLineID == value) { drg.Checked = true } else { drg.Checked = false } })
    };
    PlanComponent.prototype.constructPlanName = function () {
        var _this = this;
        this.model.PlanName = "";
        if (this.model.SalesLineID) {
            this.model.PlanName = this.lines.filter(function (ln) { return ln.SalesLineID == _this.model.SalesLineID; })[0].LineName;
        }
        if (this.cnvFromDate) {
            this.model.PlanName += ", ";
            this.model.PlanName += this.cnvFromDate;
        }
    };
    PlanComponent.prototype.ToggleAllSpecs = function (value) {
        this.plnSpecs.forEach(function (drg) { return drg.Checked = value; });
    };
    PlanComponent.prototype.ToggleAllDrugs = function (value) {
        this.plnDrugs.forEach(function (drg) { return drg.Checked = value; });
    };
    PlanComponent.prototype.ToggleAllImps = function (value) {
        this.plnImps.forEach(function (drg) { return drg.Checked = value; });
    };
    PlanComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-plan',
            template: __webpack_require__(1004)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["h" /* PlanService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["h" /* PlanService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["s" /* ImportanceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["s" /* ImportanceService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["o" /* DrugService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["o" /* DrugService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["p" /* MedSpecService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["p" /* MedSpecService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["t" /* LineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["t" /* LineService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _g) || Object])
    ], PlanComponent);
    return PlanComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/plan.component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_region_service__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_region__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_BasicObjects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegionComponent = (function () {
    function RegionComponent(serv, auth) {
        this.serv = serv;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.srchObj = new __WEBPACK_IMPORTED_MODULE_2__Models_region__["b" /* Region */]();
        this.ProvinceList = __WEBPACK_IMPORTED_MODULE_3__Models_BasicObjects__["f" /* provinces */];
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
    }
    RegionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUser.jobClass < 1) {
            this.serv.getRegion().subscribe(function (cols) { return _this.collection = cols; }, function (err) { return _this.errorMessage = err.message; });
        }
        else {
            this.serv.getUserChainRegions(this.currentUser.userID).subscribe(function (cols) { return _this.collection = cols; }, function (err) { return _this.errorMessage = err.message; });
        }
        this.TableBack();
    };
    RegionComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__Models_region__["b" /* Region */]();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Province';
    };
    RegionComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    RegionComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    RegionComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    RegionComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.serv.getRegion(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'Province ' + state : state + ' Province';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    RegionComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Provinces';
        this.errorMessage = null;
    };
    RegionComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        var newRegion = this.model;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertRegion(newRegion).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                }, function (err) { return _this.errorMessage = err.message; });
                break;
            case 'Edit':
                this.serv.UpdateRegion(newRegion.RegionID, newRegion).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                }, function (err) { return _this.errorMessage = err.message; });
                break;
            case 'Delete':
                this.serv.DeleteRegion(newRegion.RegionID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                }, function (err) { return _this.errorMessage = err.message; });
                break;
            default:
                break;
        }
    };
    RegionComponent.prototype.ApproveRegion = function (id) {
        var _this = this;
        this.serv.ApproveRegion(id, this.currentUser.userID).subscribe(function (ret) {
            if (ret.error) {
                _this.errorMessage = ret.error.message;
            }
            else if (ret.affected > 0) {
                _this.ngOnInit();
            }
        }, function (err) { return _this.errorMessage = err.message; });
    };
    RegionComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    RegionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(1005)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_region_service__["a" /* RegionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_region_service__["a" /* RegionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], RegionComponent);
    return RegionComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/region.component.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_validators__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(serv, regserv, srvln, auth, usrRegServ, fb) {
        var _this = this;
        this.serv = serv;
        this.regserv = regserv;
        this.srvln = srvln;
        this.auth = auth;
        this.usrRegServ = usrRegServ;
        this.fb = fb;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.searchUser = new __WEBPACK_IMPORTED_MODULE_4__Models__["n" /* User */]();
        this.classList = __WEBPACK_IMPORTED_MODULE_4__Models__["t" /* JobClass */].filter(function (obj) { return obj.class > _this.currentUser.jobClass && obj.class != 99; });
        this.regions = [];
        this.userRegions = [];
        this.managerList = [];
        this.salesLines = [];
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.replcUsers = [];
        this.inputForm = fb.group({
            'UserID': null,
            'UserName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'LoginName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200)])],
            'UserPass': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200)])],
            'ConfPass': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200)])],
            'JobClass': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            manager: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            lineID: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'Email': [null, __WEBPACK_IMPORTED_MODULE_3__pipes_validators__["g" /* emailValidator */]],
            'Phone': null
        }, { validator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["d" /* matchingPasswords */])('UserPass', 'ConfPass') });
        this.replcForm = fb.group({
            'User1ID': null,
            'User1Name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'User2ID': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.inputForm.controls['JobClass'].valueChanges.subscribe(function (value) { return _this.TitleChanged(value); });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getUserChain(this.currentUser.userID).subscribe(function (cols) {
            _this.collection = cols;
            _this.regserv.getRegion().subscribe(function (reg) {
                _this.regions = reg;
                _this.srvln.getLine().subscribe(function (ln) {
                    _this.salesLines = ln;
                    _this.TableBack();
                });
            });
        });
    };
    UserComponent.prototype.CompleteLogin = function () {
        if (this.model.UserName) {
            var sp = this.model.UserName.split(" ");
            this.model.LoginName = sp[0].charAt(0) + '.' + sp[sp.length - 1];
        }
    };
    UserComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_4__Models__["n" /* User */]();
        this.inputForm.controls['LoginName'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["a" /* alreadyExist */])(this.collection, 'LoginName', '')]));
        this.inputForm.controls["UserName"].enable();
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New User';
    };
    UserComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    UserComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    UserComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    UserComponent.prototype.Disable = function (id) {
        this.loadDetails(id, 'Disable');
    };
    UserComponent.prototype.Replace = function (id) {
        this.loadDetails(id, 'Replace');
    };
    UserComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        if (state == 'Replace') {
            this.serv.getuser(id).subscribe(function (ret) {
                _this.srvln.getLineUsers(ret[0].SalesLineID).subscribe(function (ret1) {
                    _this.replcUsers = ret1;
                    _this.rplcModel = new __WEBPACK_IMPORTED_MODULE_4__Models__["u" /* ReplaceUser */]();
                    _this.rplcModel.user1ID = ret[0].UserID;
                    _this.rplcModel.User1Name = ret[0].UserName;
                    _this.showTable = false;
                    _this.Formstate = state;
                    _this.headerText = state + ' User';
                });
            });
        }
        else {
            this.serv.getuser(id).subscribe(function (ret) {
                _this.usrRegServ.getUSerRegion(id).subscribe(function (ret1) {
                    _this.userRegions = ret1;
                    _this.model = ret[0];
                    if (state == 'Edit') {
                        _this.inputForm.controls["UserName"].disable();
                        _this.inputForm.controls['ConfPass'].setValue(_this.model.UserPass);
                        _this.inputForm.controls['LoginName'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pipes_validators__["a" /* alreadyExist */])(_this.collection, 'LoginName', _this.model.LoginName)]));
                        _this.inputForm.updateValueAndValidity();
                    }
                    _this.showTable = false;
                    _this.Formstate = state;
                    _this.headerText = state == 'Details' ? 'User ' + state : state + ' User';
                });
            });
        }
    };
    UserComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.headerText = 'Users';
        this.errorMessage = null;
        this.inputForm.reset();
    };
    UserComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        var newUser = this.model;
        // newUser.DirectManager = this.currentUser.userID;
        switch (this.Formstate) {
            case 'Create':
                this.serv.InsertUser(newUser, this.userRegions).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.serv.UpdateUser(newUser.UserID, newUser, this.userRegions).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message ? ret.error.message : ret.error;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.serv.DeleteUser(newUser.UserID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Disable':
                this.serv.DisableUser(newUser.UserID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Replace':
                this.serv.RotateUsers(this.rplcModel.user1ID, this.rplcModel.user2ID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    UserComponent.prototype.ApproveUser = function (id) {
        var _this = this;
        this.serv.ApproveUser(id, this.currentUser.userID).subscribe(function (ret) {
            if (ret.error) {
                _this.errorMessage = ret.error.message;
            }
            else if (ret.affected > 0) {
                _this.ngOnInit();
            }
        });
    };
    UserComponent.prototype.addRegion = function () {
        var _this = this;
        if (this.selectedRegion != null && this.userRegions.findIndex(function (x) { return x.RegionID == _this.selectedRegion; }) == -1) {
            var regio = this.regions.filter(function (obj) { return obj.RegionID == _this.selectedRegion; })[0];
            this.userRegions.push(regio);
        }
    };
    UserComponent.prototype.removeRegion = function (index) {
        console.log(index);
        this.userRegions.splice(index, 1);
    };
    UserComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    UserComponent.prototype.TitleChanged = function (value) {
        var _this = this;
        if (!value)
            return;
        var Class = __WEBPACK_IMPORTED_MODULE_4__Models__["t" /* JobClass */].find(function (c) { return c.class == __WEBPACK_IMPORTED_MODULE_4__Models__["t" /* JobClass */].find(function (l) { return l.name == value; }).class - 1; });
        this.managerList = this.collection.filter(function (usr) { return usr.JobClass == Class.name && usr.SalesLineID == _this.model.SalesLineID; });
        if (Class.class == 1) {
            this.inputForm.controls['manager'].clearValidators();
        }
        else {
            this.inputForm.controls['manager'].setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]);
        }
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(1006)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["d" /* RegionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["d" /* RegionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["t" /* LineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["t" /* LineService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* UserRegionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* UserRegionService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _f) || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/user.component.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_validators__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VacationComponent = (function () {
    function VacationComponent(srvVac, srvUser, auth, fb) {
        var _this = this;
        this.srvVac = srvVac;
        this.srvUser = srvUser;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.collection = [];
        this.userList = [];
        this.vacTypeList = __WEBPACK_IMPORTED_MODULE_3__Models__["r" /* VacTypes */];
        this.srchObj = new __WEBPACK_IMPORTED_MODULE_3__Models__["s" /* Vacation */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.inFrm = fb.group({
            'fromDate': [this.cnvFromDate, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'toDate': [this.cnvToDate, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'UserID': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'VacType': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'Notes': [null]
        });
        this.inFrm.controls['fromDate'].valueChanges.subscribe(function (val) { return _this.FromDateChange(val); });
    }
    VacationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvUser.getuser().subscribe(function (usr) {
            _this.userList = usr;
            if (_this.currentUser.jobClass > 1 && _this.currentUser.jobClass < 99) {
                _this.srvVac.getUserVacations(_this.currentUser.userID).subscribe(function (cols) {
                    _this.collection = cols;
                    _this.TableBack();
                });
            }
            else {
                _this.srvVac.getVacation().subscribe(function (cols) {
                    _this.collection = cols;
                    _this.TableBack();
                });
            }
        }, function (err) { return _this.errorMessage = err.message; });
    };
    VacationComponent.prototype.CreateNew = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_3__Models__["s" /* Vacation */]();
        var today = new Date();
        this.cnvFromDate = __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__["a" /* handleDate */](today);
        this.cnvToDate = __WEBPACK_IMPORTED_MODULE_5__helpers_helper_functions__["a" /* handleDate */](today);
        if (this.currentUser.jobClass > 1 && this.currentUser.jobClass < 99) {
            this.model.UserID = this.currentUser.userID;
            this.inFrm.controls["UserID"].disable();
        }
        else {
            this.inFrm.controls["UserID"].enable();
        }
        this.updateValidators('to');
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Vacation';
    };
    VacationComponent.prototype.EditThis = function (id) {
        this.loadDetails(id, 'Edit');
    };
    VacationComponent.prototype.ShowDetails = function (id) {
        this.loadDetails(id, 'Details');
    };
    VacationComponent.prototype.Delete = function (id) {
        this.loadDetails(id, 'Delete');
    };
    VacationComponent.prototype.loadDetails = function (id, state) {
        var _this = this;
        this.srvVac.getVacation(id).subscribe(function (ret) {
            _this.model = ret[0];
            _this.cnvFromDate = _this.model.FromDate.toString().split('T')[0];
            _this.cnvToDate = _this.model.ToDate.toString().split('T')[0];
            _this.inFrm.controls["UserID"].disable();
            _this.updateValidators('to');
            _this.FromDateChange(_this.inFrm.controls['fromDate'].value);
            _this.showTable = false;
            _this.Formstate = state;
            _this.headerText = state == 'Details' ? 'Vacation ' + state : state + ' Vacation';
        }, function (err) { return _this.errorMessage = err.message; });
    };
    VacationComponent.prototype.TableBack = function () {
        this.showTable = true;
        this.Formstate = null;
        this.inFrm.reset();
        this.headerText = 'User Vacations';
        this.errorMessage = null;
    };
    VacationComponent.prototype.HandleForm = function (event) {
        var _this = this;
        event.preventDefault();
        this.model.FromDate = new Date(this.cnvFromDate);
        this.model.ToDate = new Date(this.cnvToDate);
        switch (this.Formstate) {
            case 'Create':
                this.srvVac.InsertVacation(this.model).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Edit':
                this.srvVac.UpdateVacation(this.model.VacID, this.model).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            case 'Delete':
                this.srvVac.DeleteVacation(this.model.VacID).subscribe(function (ret) {
                    if (ret.error) {
                        _this.errorMessage = ret.error.message;
                    }
                    else if (ret.affected > 0) {
                        _this.ngOnInit();
                    }
                });
                break;
            default:
                break;
        }
    };
    VacationComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    VacationComponent.prototype.FromDateChange = function (value) {
        if (!value)
            return;
        this.updateValidators('to');
    };
    VacationComponent.prototype.updateValidators = function (all) {
        switch (all) {
            case 'all':
                this.inFrm.controls['fromDate'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pipes_validators__["f" /* planDateInRange */])(this.collection, this.model.VacID, this.model.UserID)]));
                this.inFrm.controls['fromDate'].markAsTouched();
                this.inFrm.controls['fromDate'].updateValueAndValidity();
                this.inFrm.controls['toDate'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pipes_validators__["f" /* planDateInRange */])(this.collection, this.model.VacID, this.model.UserID),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pipes_validators__["c" /* minDate */])(this.inFrm.controls['fromDate'].value)]));
                this.inFrm.controls['toDate'].markAsTouched();
                this.inFrm.controls['toDate'].updateValueAndValidity();
                break;
            case 'to':
                this.inFrm.controls['toDate'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pipes_validators__["c" /* minDate */])(this.inFrm.controls['fromDate'].value)]));
                this.inFrm.controls['toDate'].markAsTouched();
                this.inFrm.controls['toDate'].updateValueAndValidity();
                break;
            default:
                break;
        }
    };
    VacationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vac',
            template: __webpack_require__(1007)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["m" /* VacationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["m" /* VacationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _d) || Object])
    ], VacationComponent);
    return VacationComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/vac.component.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitDrugsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitDrugsComponent = (function () {
    function VisitDrugsComponent(srvDrg, fb) {
        this.srvDrg = srvDrg;
        this.drugChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.drugs = [];
        this.drgform = fb.group({
            drugID: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            comment: [''],
            gift: ['']
        });
        // this.drgform.controls['drugID'].valueChanges.subscribe(val => this.drugChange(val));
    }
    VisitDrugsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvDrg.getPlanDrugs(this.currentUser.userID).subscribe(function (drg) {
            _this.drugs = drg[0];
        });
    };
    // drugChange(value) {
    //     if (!value) { return }
    // }
    VisitDrugsComponent.prototype.AddDrug = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.visDrugs.findIndex(function (x) { return x.DrugID == _this.drugmodel.DrugID; }) == -1) {
            this.drugmodel.DrugName = this.drugs.filter(function (obj) { return obj.DrugID == _this.drugmodel.DrugID; })[0].DrugName;
            this.visDrugs.push(this.drugmodel);
            this.drugmodel = new __WEBPACK_IMPORTED_MODULE_3__Models__["k" /* VisitDrugs */]();
            this.drugChanged.emit(this.visDrugs.length);
            this.drgform.reset();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], VisitDrugsComponent.prototype, "visDrugs", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Models__["k" /* VisitDrugs */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__Models__["k" /* VisitDrugs */]) === 'function' && _a) || Object)
    ], VisitDrugsComponent.prototype, "drugmodel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Models__["b" /* CurrentUser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__Models__["b" /* CurrentUser */]) === 'function' && _b) || Object)
    ], VisitDrugsComponent.prototype, "currentUser", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], VisitDrugsComponent.prototype, "drugChanged", void 0);
    VisitDrugsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'visit-drugs',
            template: __webpack_require__(1008)
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["o" /* DrugService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["o" /* DrugService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _d) || Object])
    ], VisitDrugsComponent);
    return VisitDrugsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/drugs.component.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitGiftsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitGiftsComponent = (function () {
    function VisitGiftsComponent(srvGft, srvPromo, fb) {
        this.srvGft = srvGft;
        this.srvPromo = srvPromo;
        this.gifts = [];
        this.promoTools = [];
        this.dispTools = [];
        this.gftform = fb.group({
            giftID: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            toolID: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            qty: ['0', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]]
        });
        // this.drgform.controls['drugID'].valueChanges.subscribe(val => this.drugChange(val));
    }
    VisitGiftsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srvGft.getGift().subscribe(function (drg) { return _this.gifts = drg; });
        this.srvPromo.getPromoTools().subscribe(function (prm) { return _this.promoTools = prm; });
    };
    // drugChange(value) {
    //     if (!value) { return }
    // }
    VisitGiftsComponent.prototype.AddGift = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.visGifts.findIndex(function (x) { return x.ToolID == _this.giftmodel.ToolID; }) == -1) {
            this.giftmodel.GiftName = this.gifts.filter(function (obj) { return obj.GiftID == _this.giftmodel.GiftID; })[0].GiftName;
            this.giftmodel.ToolName = this.promoTools.filter(function (obj) { return obj.ToolID == _this.giftmodel.ToolID; })[0].ToolName;
            this.visGifts.push(this.giftmodel);
            this.giftmodel = new __WEBPACK_IMPORTED_MODULE_3__Models__["j" /* VisitGifts */]();
            this.gftform.reset();
        }
    };
    VisitGiftsComponent.prototype.ongiftChange = function (obj) {
        var _this = this;
        if (obj.target.value) {
            var giftId = obj.target.value.split(':')[1].trim();
            this.dispTools = this.promoTools.filter(function (p) { return p.GiftID == giftId; });
            if (this.visDrugs.length > 0) {
                this.dispTools = this.dispTools.filter(function (d) { return _this.visDrugs.findIndex(function (g) { return g.DrugID == d.DrugID; }) >= 0; });
            }
        }
    };
    VisitGiftsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.drgsChanged) {
            this.dispTools = this.promoTools.filter(function (p) { return p.GiftID == _this.giftmodel.GiftID; });
            if (this.visDrugs.length > 0) {
                this.dispTools = this.dispTools.filter(function (d) { return _this.visDrugs.findIndex(function (g) { return g.DrugID == d.DrugID; }) >= 0; });
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], VisitGiftsComponent.prototype, "visGifts", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], VisitGiftsComponent.prototype, "visDrugs", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Models__["j" /* VisitGifts */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__Models__["j" /* VisitGifts */]) === 'function' && _a) || Object)
    ], VisitGiftsComponent.prototype, "giftmodel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], VisitGiftsComponent.prototype, "drgsChanged", void 0);
    VisitGiftsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'visit-gifts',
            template: __webpack_require__(1009)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["q" /* GiftService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["q" /* GiftService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["r" /* PromoToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["r" /* PromoToolsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _d) || Object])
    ], VisitGiftsComponent);
    return VisitGiftsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/gifts.component.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visit_component__ = __webpack_require__(422);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__visit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userVisit_uservisit_component__ = __webpack_require__(724);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__userVisit_uservisit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drugs_drugs_component__ = __webpack_require__(721);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__drugs_drugs_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gifts_gifts_component__ = __webpack_require__(722);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__gifts_gifts_component__["a"]; });




//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserVisitsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserVisitsComponent = (function () {
    function UserVisitsComponent() {
        this.collection = [];
        this.DeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.DetailEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.EditEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userVisits = [];
        this.srchObj = new __WEBPACK_IMPORTED_MODULE_1__Models__["l" /* Visits */]();
        this.orderbyString = "";
        this.orderbyClass = "glyphicon glyphicon-sort";
        this.appliedClass = true;
    }
    UserVisitsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userVisits = this.collection.filter(function (obj) { return obj.UserID == _this.UserID; });
        if (this.userVisits) {
            this.userName = this.userVisits[0].UserName;
        }
    };
    UserVisitsComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    UserVisitsComponent.prototype.changeArrowClass = function () {
        // this.appliedClass = document.getElementById('toggle' + this.UserID).attributes.getNamedItem('aria-expanded').value === 'true'
        this.appliedClass = !this.appliedClass;
    };
    UserVisitsComponent.prototype.SortTable = function (column) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes";
            this.orderbyString = '+' + column;
        }
        else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = "glyphicon glyphicon-sort-by-attributes-alt";
            this.orderbyString = '-' + column;
        }
        else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString = '';
        }
    };
    UserVisitsComponent.prototype.onDetail = function (id) {
        this.DetailEvent.emit(id);
    };
    UserVisitsComponent.prototype.onDelete = function (id) {
        this.DeleteEvent.emit(id);
    };
    UserVisitsComponent.prototype.onEdit = function (id) {
        this.EditEvent.emit(id);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], UserVisitsComponent.prototype, "collection", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], UserVisitsComponent.prototype, "UserID", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Models__["b" /* CurrentUser */]) === 'function' && _a) || Object)
    ], UserVisitsComponent.prototype, "currentUser", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], UserVisitsComponent.prototype, "DeleteEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], UserVisitsComponent.prototype, "DetailEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], UserVisitsComponent.prototype, "EditEvent", void 0);
    UserVisitsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'visit-uservisits',
            template: __webpack_require__(1010),
            styles: ["\n        .card-title a {\n            text-decoration: none;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], UserVisitsComponent);
    return UserVisitsComponent;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/uservisit.component.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_pipe_module__ = __webpack_require__(185);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VisitModule = (function () {
    function VisitModule() {
    }
    VisitModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_8__pipes_pipe_module__["a" /* CustomPipesModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__["Ng2PaginationModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6____["a" /* VisitComponent */], __WEBPACK_IMPORTED_MODULE_6____["b" /* UserVisitsComponent */], __WEBPACK_IMPORTED_MODULE_6____["c" /* VisitDrugsComponent */], __WEBPACK_IMPORTED_MODULE_6____["d" /* VisitGiftsComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services__["u" /* VisitService */]],
        }), 
        __metadata('design:paramtypes', [])
    ], VisitModule);
    return VisitModule;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/visit.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppFooterComponent = (function () {
    function AppFooterComponent(auth) {
        this.auth = auth;
        // TODO
    }
    AppFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            styles: [__webpack_require__(964)],
            template: __webpack_require__(1012)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], AppFooterComponent);
    return AppFooterComponent;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/app-footer.component.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_footer_component__ = __webpack_require__(726);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_footer_component__["a"]; });

//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeaderComponent = (function () {
    function AppHeaderComponent(auth) {
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        // TODO
    }
    AppHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            styles: [__webpack_require__(965)],
            template: __webpack_require__(1013)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], AppHeaderComponent);
    return AppHeaderComponent;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/app-header.component.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header_component__ = __webpack_require__(728);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_header_component__["a"]; });

//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(breadServ) {
        var _this = this;
        this.breadServ = breadServ;
        this.display = false;
        this.header = '';
        this.description = '';
        this.levels = [];
        // getting the data from the services
        this.breadServ.current.subscribe(function (data) {
            _this.display = data.display;
            _this.header = data.header;
            _this.description = data.description;
            _this.levels = data.levels;
        });
    }
    BreadcrumbComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(1014)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["i" /* BreadcrumbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["i" /* BreadcrumbService */]) === 'function' && _a) || Object])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/breadcrumb.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__breadcrumb_component__ = __webpack_require__(730);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__breadcrumb_component__["a"]; });

//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlSidebarComponent = (function () {
    function ControlSidebarComponent(auth) {
        this.auth = auth;
        // TODO
    }
    ControlSidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aside',
            styles: [__webpack_require__(966)],
            template: __webpack_require__(1015)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], ControlSidebarComponent);
    return ControlSidebarComponent;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/control-sidebar.component.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_sidebar_component__ = __webpack_require__(732);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__control_sidebar_component__["a"]; });

//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header__ = __webpack_require__(729);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_footer__ = __webpack_require__(727);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__app_footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_aside__ = __webpack_require__(735);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__menu_aside__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__control_sidebar__ = __webpack_require__(733);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__control_sidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_box__ = __webpack_require__(737);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__messages_box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_box__ = __webpack_require__(739);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__notification_box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tasks_box__ = __webpack_require__(741);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__tasks_box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_box__ = __webpack_require__(743);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__user_box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__breadcrumb__ = __webpack_require__(731);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__breadcrumb__["a"]; });









//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_aside_component__ = __webpack_require__(736);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__menu_aside_component__["a"]; });

//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuAsideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuAsideComponent = (function () {
    function MenuAsideComponent(userServ, router, auth) {
        var _this = this;
        this.userServ = userServ;
        this.router = router;
        this.auth = auth;
        this.currentUser = this.auth.getUser();
        this.links = [
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
                'title': 'Reports',
                'icon': 'dashboard',
                'link': ['/home/reports/home']
            },
            {
                'title': 'Contact Us',
                'icon': 'dashboard',
                'link': ['/home/cntct']
            },
        ];
        // getting the current url
        this.router.events.subscribe(function (evt) { return _this.currentUrl = evt.url; });
    }
    MenuAsideComponent.prototype.ngOnInit = function () {
        // TODO
    };
    MenuAsideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu-aside',
            styles: [__webpack_require__(967)],
            template: __webpack_require__(1016)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], MenuAsideComponent);
    return MenuAsideComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/menu-aside.component.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messages_box_component__ = __webpack_require__(738);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__messages_box_component__["a"]; });

//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(268);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesBoxComponent = (function () {
    function MessagesBoxComponent(msgServ /*, private logger: LoggerService */) {
        this.msgServ = msgServ;
        this.messages = [];
    }
    MessagesBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Every incoming message changes entire local message Array.
        this.msgServ.messages.subscribe(function (msg) {
            // this.logger.log( 'MsgBox', null, 'RECIEVED.MESSAGE', null );
            _this.messages = msg;
            _this.msgLength = { 0: _this.messages.length };
        });
    };
    MessagesBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            /* tslint:disable */
            selector: '.messagesBox',
            /* tslint:enable */
            styles: [__webpack_require__(968)],
            template: __webpack_require__(1017)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */]) === 'function' && _a) || Object])
    ], MessagesBoxComponent);
    return MessagesBoxComponent;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/messages-box.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_box_component__ = __webpack_require__(740);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__notification_box_component__["a"]; });

//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationBoxComponent = (function () {
    function NotificationBoxComponent() {
        this.notifLength = { 0: '10' };
        // TODO 
    }
    NotificationBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    NotificationBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            /* tslint:disable */
            selector: '.notificationsBox',
            /* tslint:enable */
            styles: [__webpack_require__(969)],
            template: __webpack_require__(1018)
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationBoxComponent);
    return NotificationBoxComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/notification-box.component.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tasks_box_component__ = __webpack_require__(742);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tasks_box_component__["a"]; });

//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TasksBoxComponent = (function () {
    function TasksBoxComponent() {
        this.tasksLength = { 0: '9' };
        // TODO 
    }
    TasksBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TasksBoxComponent.prototype, "user", void 0);
    TasksBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            /* tslint:disable */
            selector: '.tasksBox',
            /* tslint:enable */
            styles: [__webpack_require__(970)],
            template: __webpack_require__(1019)
        }), 
        __metadata('design:paramtypes', [])
    ], TasksBoxComponent);
    return TasksBoxComponent;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/tasks-box.component.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_box_component__ = __webpack_require__(744);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_box_component__["a"]; });

//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/index.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserBoxComponent = (function () {
    function UserBoxComponent(auth, router, srvDest, srvVis) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.srvDest = srvDest;
        this.srvVis = srvVis;
        this.currentUser = this.auth.getUser();
        this.logout = function () {
            // this.router.navigate(['/']);
            _this.auth.logout();
        };
        // TODO
    }
    UserBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO
        this.srvDest.getUserChainCount(this.currentUser.userID).subscribe(function (cont) {
            _this.srvVis.getUserVisitsCount(_this.currentUser.userID).subscribe(function (vis) {
                _this.DestCount = cont[0].DestCount;
                _this.visCount = vis[0].visCount;
            });
        });
    };
    UserBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            /* tslint:disable */
            selector: '.userBox',
            /* tslint:enable */
            styles: [__webpack_require__(971)],
            template: __webpack_require__(1020)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["f" /* DestinationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["f" /* DestinationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["u" /* VisitService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["u" /* VisitService */]) === 'function' && _d) || Object])
    ], UserBoxComponent);
    return UserBoxComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/user-box.component.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArrayOrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArrayFilterPipe = (function () {
    function ArrayFilterPipe() {
    }
    ArrayFilterPipe.prototype.transform = function (items, conditions) {
        if (!items) {
            return;
        }
        return items.filter(function (item) {
            for (var field in conditions) {
                if ((typeof item[field] === 'string' || item[field] instanceof String) &&
                    (item[field].toLowerCase().indexOf(conditions[field].toLowerCase()) == -1)) {
                    return false;
                }
            }
            return true;
        });
    };
    ArrayFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "filter",
            pure: false
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ArrayFilterPipe);
    return ArrayFilterPipe;
}());
var ArrayOrderByPipe = (function () {
    function ArrayOrderByPipe() {
    }
    ArrayOrderByPipe.prototype.transform = function (items, orderFields) {
        if (!orderFields) {
            return items;
        }
        if (!items) {
            return;
        }
        orderFields.split(';').forEach(function (currentField) {
            var orderType = 'ASC';
            if (currentField[0] === '-') {
                orderType = 'DESC';
            }
            currentField = currentField.substring(1);
            items.sort(function (a, b) {
                if (orderType === 'ASC') {
                    if (a[currentField] < b[currentField])
                        return -1;
                    if (a[currentField] > b[currentField])
                        return 1;
                    return 0;
                }
                else {
                    if (a[currentField] < b[currentField])
                        return 1;
                    if (a[currentField] > b[currentField])
                        return -1;
                    return 0;
                }
            });
        });
        return items;
    };
    ArrayOrderByPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "orderby",
            pure: false
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ArrayOrderByPipe);
    return ArrayOrderByPipe;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/array.pipe.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.initialData = {
            description: '',
            display: false,
            header: '',
            levels: [
                {
                    icon: 'clock-o',
                    link: ['/'],
                    title: 'Default'
                }
            ]
        };
        this.current = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"](1);
        this.clear();
    }
    BreadcrumbService.prototype.set = function (data) {
        this.current.next(data);
    };
    BreadcrumbService.prototype.clear = function () {
        this.set(this.initialData);
    };
    BreadcrumbService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbService);
    return BreadcrumbService;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/breadcrumb.service.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactUsService = (function () {
    function ContactUsService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'cntct/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    ContactUsService.prototype.getContactUs = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    ContactUsService.prototype.getUserContactUs = function (userid) {
        return this.http.get(this.url + 'UserMessages/' + userid, this.options).map(function (res) { return res.json(); });
    };
    ContactUsService.prototype.getPlanContactUs = function (userID) {
        return this.http.get(this.url + 'PlanContactUs/' + userID, this.options).map(function (res) { return res.json(); });
    };
    ContactUsService.prototype.InsertContactUs = function (cntct) {
        return this.http.post(this.url, cntct, this.options).map(function (res) { return res.json(); });
    };
    ContactUsService.prototype.UpdateContactUs = function (id, cntct) {
        return this.http.put(this.url + id, cntct, this.options).map(function (res) { return res.json(); });
    };
    ContactUsService.prototype.DeleteContactUs = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    ContactUsService.prototype.SolveContactUs = function (id) {
        return this.http.put(this.url + 'Solve/' + id, { id: id }, this.options).map(function (res) { return res.json(); });
    };
    ContactUsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], ContactUsService);
    return ContactUsService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/contactUs.service.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = (function () {
    function DashboardService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'dash/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    DashboardService.prototype.getUserSchedule = function (id) {
        return this.http.get(this.url + 'UserSchedule/' + id, this.options).map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getUserScheduleDate = function (id, date) {
        return this.http.get(this.url + 'UserScheduleDate/' + id + '/' + date, this.options).map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getUserChainSchedule = function (id) {
        return this.http.get(this.url + 'UserChainSchedule/' + id, this.options).map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getUserVisitRate = function (id, month) {
        return this.http.get(this.url + 'UserVisitRate/' + id + '/' + month, this.options).map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getUserChainVisitRate = function (id, month) {
        return this.http.get(this.url + 'UserChainVisitRate/' + id + '/' + month, this.options).map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getUserChainCounts = function (id) {
        return this.http.get(this.url + 'userVisitCounts/' + id, this.options).map(function (res) { return res.json(); });
    };
    DashboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DashboardService);
    return DashboardService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/dashboard.service.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestinationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DestinationService = (function () {
    function DestinationService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'dest/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    DestinationService.prototype.getDestination = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.getUserChainDestination = function (userID) {
        return this.http.get(this.url + 'userChain/' + userID, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.getUserChainCount = function (userID) {
        return this.http.get(this.url + 'userChainCount/' + userID, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.getRegionDestinations = function (regionID) {
        return this.http.get(this.url + 'region/' + regionID, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.getApprovedRegionDestinations = function (regionID) {
        return this.http.get(this.url + 'aprvregion/' + regionID, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.getPlanApprovedRegionDestinations = function (regionID, userID, visitDate) {
        return this.http.get(this.url + 'planAprvRegion/' + regionID + '.' + userID + '.' + visitDate, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.getDestUsers = function (destID) {
        return this.http.get(this.url + 'destUsers/' + destID, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.getAllDestUsers = function () {
        return this.http.get(this.url + 'AlldestUsers/', this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.InsertDestination = function (dest, destUsers) {
        return this.http.post(this.url, { dst: dest, users: destUsers }, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.UpdateDestination = function (id, dest, destUsers) {
        return this.http.put(this.url + id, { dst: dest, users: destUsers }, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.DeleteDestination = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.ApproveDestination = function (id, ApproveUser) {
        if (!this.headers.has("Content-type")) {
            this.options.headers.append("Content-type", "application/json");
        }
        return this.http.put(this.url + 'Approve/' + id, JSON.stringify({ id: id, appuser: ApproveUser }), this.options).map(function (res) { return res.json(); });
    };
    DestinationService.prototype.checkMaxVisit = function (id, userID, visitDate) {
        return this.http.get(this.url + 'checkMaxVisit/' + id + '.' + userID + '.' + visitDate, this.options).map(function (res) { return res.json(); });
        ;
    };
    DestinationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DestinationService);
    return DestinationService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/destination.service.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrugService = (function () {
    function DrugService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'drug/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    DrugService.prototype.getDrug = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    DrugService.prototype.getPlanDrugs = function (userID) {
        return this.http.get(this.url + 'PlanDrugs/' + userID, this.options).map(function (res) { return res.json(); });
    };
    DrugService.prototype.InsertDrug = function (drug) {
        return this.http.post(this.url, drug, this.options).map(function (res) { return res.json(); });
    };
    DrugService.prototype.UpdateDrug = function (id, drug) {
        return this.http.put(this.url + id, drug, this.options).map(function (res) { return res.json(); });
    };
    DrugService.prototype.DeleteDrug = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    DrugService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DrugService);
    return DrugService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/drug.service.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GiftService = (function () {
    function GiftService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'gift/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    GiftService.prototype.getGift = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    GiftService.prototype.InsertGift = function (gift) {
        return this.http.post(this.url, gift, this.options).map(function (res) { return res.json(); });
    };
    GiftService.prototype.UpdateGift = function (id, gift) {
        return this.http.put(this.url + id, gift, this.options).map(function (res) { return res.json(); });
    };
    GiftService.prototype.DeleteGift = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    GiftService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], GiftService);
    return GiftService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/gift.service.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportanceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportanceService = (function () {
    function ImportanceService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'visitimp/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    ImportanceService.prototype.getImp = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    ImportanceService.prototype.InsertImp = function (imp) {
        return this.http.post(this.url, imp, this.options).map(function (res) { return res.json(); });
    };
    ImportanceService.prototype.UpdateImp = function (id, imp) {
        return this.http.put(this.url + id, imp, this.options).map(function (res) { return res.json(); });
    };
    ImportanceService.prototype.DeleteImp = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    ImportanceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], ImportanceService);
    return ImportanceService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/importance.service.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMSService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IMSService = (function () {
    function IMSService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'ims/';
    }
    IMSService.prototype.getIMS = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl).map(function (res) { return res.json(); });
    };
    IMSService.prototype.getUserIMS = function (userID) {
        return this.http.get(this.url + 'UserIMS/' + userID).map(function (res) { return res.json(); });
    };
    IMSService.prototype.InsertIMS = function (IMS) {
        return this.http.post(this.url, IMS).map(function (res) { return res.json(); });
    };
    IMSService.prototype.UpdateIMS = function (id, IMS) {
        return this.http.put(this.url + id, IMS).map(function (res) { return res.json(); });
    };
    IMSService.prototype.DeleteIMS = function (id) {
        return this.http.delete(this.url + id).map(function (res) { return res.json(); });
    };
    IMSService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], IMSService);
    return IMSService;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/ims.service.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LineService = (function () {
    function LineService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'lines/';
    }
    LineService.prototype.getLine = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl).map(function (res) { return res.json(); });
    };
    LineService.prototype.getLineUsers = function (id) {
        return this.http.get(this.url + 'lineUsers/' + id).map(function (res) { return res.json(); });
    };
    LineService.prototype.InsertLine = function (line) {
        return this.http.post(this.url, line).map(function (res) { return res.json(); });
    };
    LineService.prototype.UpdateLine = function (id, line) {
        return this.http.put(this.url + id, line).map(function (res) { return res.json(); });
    };
    LineService.prototype.DeleteLine = function (id) {
        return this.http.delete(this.url + id).map(function (res) { return res.json(); });
    };
    LineService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], LineService);
    return LineService;
    var _a;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/line.service.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedSpecService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedSpecService = (function () {
    function MedSpecService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'medspec/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    MedSpecService.prototype.getSpec = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    MedSpecService.prototype.InsertSpec = function (spec) {
        return this.http.post(this.url, spec, this.options).map(function (res) { return res.json(); });
    };
    MedSpecService.prototype.UpdateSpec = function (id, spec) {
        return this.http.put(this.url + id, spec, this.options).map(function (res) { return res.json(); });
    };
    MedSpecService.prototype.DeleteSpec = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    MedSpecService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], MedSpecService);
    return MedSpecService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/medspec.service.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanService = (function () {
    function PlanService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'plan/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    PlanService.prototype.getPlan = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    PlanService.prototype.getUserPlan = function (userID) {
        return this.http.get(this.url + 'userPlan/' + userID, this.options).map(function (res) { return res.json(); });
    };
    PlanService.prototype.InsertPlan = function (Plan, plnDrugs, plnSpecs, plnImps) {
        return this.http.post(this.url, { basic: Plan, drugs: plnDrugs, specs: plnSpecs, imps: plnImps }, this.options)
            .map(function (res) { return res.json(); });
    };
    PlanService.prototype.UpdatePlan = function (id, Plan, plnDrugs, plnSpecs, plnImps) {
        return this.http.put(this.url + id, { basic: Plan, drugs: plnDrugs, specs: plnSpecs, imps: plnImps }, this.options)
            .map(function (res) { return res.json(); });
    };
    PlanService.prototype.DeletePlan = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    PlanService.prototype.getDetails = function () {
        return this.http.get(this.url + 'planDetails/', this.options).map(function (res) { return res.json(); });
    };
    PlanService.prototype.getPlanDetails = function (id) {
        return this.http.get(this.url + 'planDetails/' + id, this.options).map(function (res) { return res.json(); });
    };
    PlanService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], PlanService);
    return PlanService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/plan.service.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoToolsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromoToolsService = (function () {
    function PromoToolsService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'promo/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    PromoToolsService.prototype.getPromoTools = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    PromoToolsService.prototype.InsertPromoTools = function (promo) {
        return this.http.post(this.url, promo, this.options).map(function (res) { return res.json(); });
    };
    PromoToolsService.prototype.UpdatePromoTools = function (id, promo) {
        return this.http.put(this.url + id, promo, this.options).map(function (res) { return res.json(); });
    };
    PromoToolsService.prototype.DeletePromoTools = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    PromoToolsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], PromoToolsService);
    return PromoToolsService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/promo.service.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportsService = (function () {
    function ReportsService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_4__Models__["a" /* NodeUrl */] + 'rprt/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    ReportsService.prototype.getUserVisitCompare = function (userID, visDate) {
        return this.http.get(this.url + 'visitCompare/' + userID + '.' + visDate, this.options).map(function (res) { return res.json(); });
    };
    ReportsService.prototype.getSpecVisits = function (specID, from, to, ims) {
        return this.http.get(this.url + 'specVisits/' + specID + '.' + from + '.' + to + '.' + ims, this.options).map(function (res) { return res.json(); });
    };
    ReportsService.prototype.getPromo = function (from, to, ims) {
        return this.http.get(this.url + 'promoPeriod/' + from + '.' + to + '.' + ims, this.options).map(function (res) { return res.json(); });
    };
    ReportsService.prototype.getdrugAnalysis = function (from, to, drugId, type, crt) {
        return this.http.get(this.url + 'drugAnalysis/' + from + '.' + to + '.' + drugId + '.' + type + '.' + crt, this.options).map(function (res) { return res.json(); });
    };
    ReportsService.prototype.getpromoAnalysis = function (from, to, drugId) {
        return this.http.get(this.url + 'drugPromoAnalysis/' + from + '.' + to + '.' + drugId, this.options).map(function (res) { return res.json(); });
    };
    ReportsService.prototype.getUserVisitRate = function (id, month) {
        return this.http.get(this.url + 'UserVisitRate/' + id + '/' + month, this.options).map(function (res) { return res.json(); });
    };
    ReportsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], ReportsService);
    return ReportsService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/reports.service.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'User/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    UserService.prototype.getuser = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserChain = function (id) {
        return this.http.get(this.url + 'chain/' + id, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getManagerChain = function (id) {
        return this.http.get(this.url + 'managerChain/' + id, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.InsertUser = function (user, regions) {
        return this.http.post(this.url, { basic: user, regions: regions }, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.UpdateUser = function (id, user, regions) {
        return this.http.put(this.url + id, { basic: user, regions: regions }, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.DeleteUser = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.ApproveUser = function (id, ApproveUser) {
        // this.options.headers.append("Content-type", "application/json");
        return this.http.put(this.url + 'Approve/' + id, { id: id, appuser: ApproveUser }, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.DisableUser = function (id) {
        // this.options.headers.append("Content-type", "application/json");
        return this.http.put(this.url + 'Disable/' + id, { id: id }, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.RotateUsers = function (id1, id2) {
        return this.http.put(this.url + 'Replace/' + id1, { id1: id1, id2: id2 }, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.changePass = function (mod) {
        return this.http.put(this.url + 'ChangePass/' + mod.UserID, mod, this.options).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/user.service.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserRegionService = (function () {
    function UserRegionService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_6__Models__["a" /* NodeUrl */] + 'userRegion/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    UserRegionService.prototype.getUSerRegion = function (userid) {
        var geturl = this.url + userid;
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    UserRegionService.prototype.getUserChainRegions = function (userid) {
        var geturl = this.url + 'userchain/' + userid;
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    UserRegionService.prototype.getUserManagers = function (userid) {
        var geturl = __WEBPACK_IMPORTED_MODULE_6__Models__["a" /* NodeUrl */] + 'User/' + 'managerChain/' + userid;
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    UserRegionService.prototype.InsertUserRegion = function (UserID, regions) {
        var _this = this;
        var promises = [];
        regions.forEach(function (element) {
            var send = {
                RegionID: element.RegionID,
                UserID: UserID
            };
            promises.push(_this.http.post(_this.url, send, _this.options).map(function (res) { return res.json(); }));
        });
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(promises);
    };
    UserRegionService.prototype.DeleteUserRegion = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    UserRegionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], UserRegionService);
    return UserRegionService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/userRegion.service.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VacationService = (function () {
    function VacationService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* NodeUrl */] + 'vac/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    VacationService.prototype.getVacation = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    VacationService.prototype.getUserVacations = function (id) {
        return this.http.get(this.url + 'getUserVacations/' + id).map(function (res) { return res.json(); });
    };
    VacationService.prototype.InsertVacation = function (vac) {
        return this.http.post(this.url, vac, this.options).map(function (res) { return res.json(); });
    };
    VacationService.prototype.UpdateVacation = function (id, vac) {
        return this.http.put(this.url + id, vac, this.options).map(function (res) { return res.json(); });
    };
    VacationService.prototype.DeleteVacation = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    VacationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], VacationService);
    return VacationService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/vacation.service.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VisitService = (function () {
    function VisitService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = __WEBPACK_IMPORTED_MODULE_5__Models__["a" /* NodeUrl */] + 'visit/';
        this.drugurl = __WEBPACK_IMPORTED_MODULE_5__Models__["a" /* NodeUrl */] + 'visdrug/';
        this.gifturl = __WEBPACK_IMPORTED_MODULE_5__Models__["a" /* NodeUrl */] + 'visgift/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authService.token });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    VisitService.prototype.getVisit = function (id) {
        var geturl = this.url;
        if (id != null) {
            geturl = this.url + id;
        }
        return this.http.get(geturl, this.options).map(function (res) { return res.json(); });
    };
    VisitService.prototype.getUserVisits = function (userID) {
        return this.http.get(this.url + 'UserVisits/' + userID, this.options).map(function (res) { return res.json(); });
    };
    VisitService.prototype.getUserVisitsCount = function (userID) {
        return this.http.get(this.url + 'UserVisitsCount/' + userID, this.options).map(function (res) { return res.json(); });
    };
    VisitService.prototype.getUserVisitsByDate = function (userID) {
        return this.http.get(this.url + 'UserVisitsDate/' + userID, this.options).map(function (res) { return res.json(); });
    };
    VisitService.prototype.InsertVisit = function (visit, visDrugs, visGifts) {
        return this.http.post(this.url, { basic: visit, drugs: visDrugs, gifts: visGifts }, this.options)
            .map(function (res) { return res.json(); });
    };
    VisitService.prototype.UpdateVisit = function (id, visit, visDrugs, visGifts) {
        return this.http.put(this.url + id, { basic: visit, drugs: visDrugs, gifts: visGifts }, this.options)
            .map(function (res) { return res.json(); });
    };
    VisitService.prototype.DeleteVisit = function (id) {
        return this.http.delete(this.url + id, this.options).map(function (res) { return res.json(); });
    };
    VisitService.prototype.getVisitDrugs = function (id) {
        return this.http.get(this.drugurl + id, this.options).map(function (res) { return res.json(); });
    };
    VisitService.prototype.InsertVisitDrugs = function (VisitID, drugs) {
        var _this = this;
        var promises = [];
        promises.push(this.http.delete(this.drugurl + VisitID, this.options).map(function (res) { return res.json(); }));
        drugs.forEach(function (element) {
            element.VisitID = VisitID;
            promises.push(_this.http.post(_this.drugurl, element, _this.options).map(function (res) { return res.json(); }));
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(promises);
    };
    VisitService.prototype.DeleteVisitDrugs = function (id) {
        return this.http.delete(this.drugurl + id, this.options).map(function (res) { return res.json(); });
    };
    VisitService.prototype.getVisitGifts = function (id) {
        return this.http.get(this.gifturl + id, this.options).map(function (res) { return res.json(); });
    };
    VisitService.prototype.InsertVisitGifts = function (VisitID, gifts) {
        var _this = this;
        var promises = [];
        promises.push(this.http.delete(this.gifturl + VisitID, this.options).map(function (res) { return res.json(); }));
        gifts.forEach(function (element) {
            element.VisitID = VisitID;
            promises.push(_this.http.post(_this.gifturl, element, _this.options).map(function (res) { return res.json(); }));
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(promises);
    };
    VisitService.prototype.DeleteVisitGifts = function (id) {
        return this.http.delete(this.gifturl + id, this.options).map(function (res) { return res.json(); });
    };
    VisitService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], VisitService);
    return VisitService;
    var _a, _b;
}());
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/visit.service.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/environment.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=E:/NEW-ADES/Ahmed-Files/Developing/Web/CairoSalesNodeJS/public/src/polyfills.js.map

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

module.exports = "@media print{\r\n    .no-print {\r\n        display: none\r\n    }\r\n}\r\n\r\nlabel {\r\n    vertical-align: middle;\r\n    margin-top: 5px; \r\n}"

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports = "text {\r\n  font: 10px sans-serif;\r\n}\r\n\r\nrect.background {\r\n  fill: white;\r\n}\r\n\r\n.axis {\r\n  shape-rendering: crispEdges;\r\n}\r\n\r\n.axis path,\r\n.axis line {\r\n  fill: none;\r\n  stroke: #000;\r\n}\r\n"

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

module.exports = "\r\n.large {\r\n\tfont-size: 2em;\r\n}\r\n\r\n.text-muted {\r\n\tcolor: #fff;\r\n\tfont-size: 1.2em\r\n}\r\n\r\n.panel-widget .glyph {\r\n\tstroke-width: 2px;\r\n}\r\n\r\n.widget-right .text-muted {\r\n\tcolor: #fff;\r\n}\r\n.widget-right .large {\r\n\tcolor: #fff;\r\n}\r\n.no-padding {\r\n\tpadding: 0; margin: 0;\r\n}\r\n\r\n.no-padding i {\r\n\tpadding: 0; margin: 0;\r\n}"

/***/ }),

/***/ 964:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 965:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 966:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 967:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 968:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 969:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 970:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 971:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 974:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n\t<div class=\"panel-heading\">\r\n\r\n\t\t<h2> {{headerText}} </h2>\r\n\t\t<button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n\t\t<br *ngIf=\"!Formstate\"><br *ngIf=\"!Formstate\">\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n\t\t\t<p>{{errorMessage}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n\t\t<table id=\"tblDrugs\" class=\"table table-hover table-striped\">\r\n\t\t\t<colgroup>\r\n\t\t\t\t<col width=\"30%\" />\r\n\t\t\t\t<col width=\"20%\" />\r\n\t\t\t\t<col width=\"30%\" />\r\n\t\t\t\t<col width=\"20%\" />\r\n\t\t\t</colgroup>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th> Product Name <i (click)=\"SortTable('DrugName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('DrugName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Sales Line <i (click)=\"SortTable('LineName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('LineName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Description <i (click)=\"SortTable('Description')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('Description') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchDrugName\" name=\"DrugName\" [(ngModel)]=\"searchDrug.DrugName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchLineName\" name=\"LineName\" [(ngModel)]=\"searchDrug.LineName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchDescription\" name=\"Description\" [(ngModel)]=\"searchDrug.Description\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let item of (collection | filter:searchDrug | orderby:orderbyString)  | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n\t\t\t\t\t<td>{{item.DrugName}}</td>\r\n\t\t\t\t\t<td>{{item.LineName}}</td>\r\n\t\t\t\t\t<td>{{item.Description}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.DrugID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n\t\t\t\t\t\t<button (click)=\"ShowDetails(item.DrugID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.DrugID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t<pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n\t</div>\r\n\r\n\t<div class=\"panel-body\" *ngIf=\"Formstate\">\r\n\t\t<form (submit)=\"f.valid && HandleForm($event)\" #f=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-horizontal\">\r\n\r\n\t\t\t\t<h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this drug ?</h2>\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<div class=\"form-group hidden\">\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"DrugID\" [(ngModel)]=\"model.DrugID\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': drugName.touched && !drugName.valid }\">\r\n\t\t\t\t\t<label for=\"DrugName\" class=\"control-label col-md-2 col-sm-2\">Product Name</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"DrugName\" [(ngModel)]=\"model.DrugName\" #drugName=\"ngModel\" required>\r\n\t\t\t\t\t\t<div *ngIf=\"drugName.touched && !drugName.valid\" class=\"help-block\">Product Name is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': line.touched && !line.valid }\">\r\n                    <label for=\"SalesLineID\" class=\"control-label col-md-2 col-sm-2\">Sales Line</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"SalesLineID\" [(ngModel)]=\"model.SalesLineID\" #line=\"ngModel\" required>\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Sales Line...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of lines\" [ngValue]=\"i.SalesLineID\">{{i.LineName}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<div *ngIf=\"line.touched && !line.valid\" class=\"help-block\">Sales Line is required</div>\r\n                    </div>\r\n                </div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"Description\" class=\"control-label col-md-2 col-sm-2\">Description</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<textarea rows=\"10\" cols=\"10\" class=\"form-control\" name=\"Description\" [(ngModel)]=\"model.Description\"></textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10\">\r\n\t\t\t\t\t<button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [disabled]='!f.valid'>Save</button>\t\t\t\t\t|\r\n\t\t\t\t\t<button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button> |\r\n\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 975:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n\t<div class=\"panel-heading\">\r\n\r\n\t\t<h2> {{headerText}} </h2>\r\n\t\t<button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n\t\t<br><br>\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n\t\t\t<p>{{errorMessage}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n\t\t<table id=\"tblGifts\" class=\"table table-hover table-striped\">\r\n\t\t\t<colgroup>\r\n\t\t\t\t<col width=\"70%\" />\r\n\t\t\t\t<col width=\"30%\" />\r\n\t\t\t</colgroup>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th> Promotional Tool Type <i (click)=\"SortTable('GiftName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('GiftName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchgiftName\" name=\"GiftName\" [(ngModel)]=\"searchGift.GiftName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let item of (collection | filter:searchGift | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n\t\t\t\t\t<td>{{item.GiftName}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.GiftID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n\t\t\t\t\t\t<button (click)=\"ShowDetails(item.GiftID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.GiftID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n        <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n\t</div>\r\n\r\n\t<div class=\"panel-body\" *ngIf=\"Formstate\">\r\n\t\t<form (submit)=\"f.form.valid && HandleForm($event)\" #f=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-horizontal\">\r\n\r\n\t\t\t\t<h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this promotional tool type ?</h2>\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<div class=\"form-group hidden\">\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"GiftID\" [(ngModel)]=\"model.GiftID\">\r\n\t\t\t\t</div>\t\t\t\t\r\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !giftName.valid }\">\r\n\t\t\t\t\t<label for=\"giftName\" class=\"control-label col-md-2 col-sm-2\">Promotional Tool Type</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"GiftName\" [(ngModel)]=\"model.GiftName\" #giftName=\"ngModel\" required>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !giftName.valid\" class=\"help-block\">Promotional Tool Type is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10\">\r\n\t\t\t\t\t<button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\">Save</button> |\r\n\t\t\t\t\t<button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button> |\r\n\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 976:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\n\t<div class=\"panel-heading\">\n\n\t\t<h2> {{headerText}} </h2>\n\t\t<button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\n\t\t<br><br>\n\t\t<div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\n\t\t\t<p>{{errorMessage}}</p>\n\t\t</div>\n\t</div>\n\t<div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\n\t\t<table id=\"tblImportances\" class=\"table table-hover table-striped\">\n\t\t\t<colgroup>\n\t\t\t\t<col width=\"40%\" />\n\t\t\t\t<col width=\"40%\" />\n\t\t\t\t<col width=\"20%\" />\n\t\t\t</colgroup>\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th> Cycle <i (click)=\"SortTable('ImpName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('ImpName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\n\t\t\t\t\t<th> Visits No <i (click)=\"SortTable('VisitsNo')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('VisitsNo') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchImpName\" name=\"ImpName\" [(ngModel)]=\"searchImp.ImpName\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchVisitsNo\" name=\"VisitsNo\" [(ngModel)]=\"searchImp.VisitsNo\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of (collection | filter:searchImp | orderby:orderbyString)\">\n\t\t\t\t\t<td>{{item.ImpName}}</td>\n\t\t\t\t\t<td>{{item.VisitsNo}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.ImpID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\n\t\t\t\t\t\t<button (click)=\"ShowDetails(item.ImpID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.ImpID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\t<div class=\"panel-body\" *ngIf=\"Formstate\">\n\t\t<form  #f=\"ngForm\" novalidate (submit)=\"HandleForm($event)\">\n\t\t\t<div class=\"form-horizontal\">\n\n\t\t\t\t<h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this Cycle ?</h2>\n\t\t\t\t<br>\n\n\t\t\t\t<div class=\"form-group hidden\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"ImpID\" [(ngModel)]=\"model.ImpID\">\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"ImpName\" class=\"control-label col-md-2 col-sm-2\">Cycle</label>\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"ImpName\" [(ngModel)]=\"model.ImpName\" #impName=\"ngModel\" required>\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !impName.valid\" class=\"help-block\">Cycle is required</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"VisitsNo\" class=\"control-label col-md-2 col-sm-2\">Visits No</label>\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\n\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" name=\"VisitsNo\" [(ngModel)]=\"model.VisitsNo\" #visitsNo=\"ngModel\" required>\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !visitsNo.valid\" class=\"help-block\">Visits No is required</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10\">\n\t\t\t\t\t<button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\">Save</button> |\n\t\t\t\t\t<button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button> |\n\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ 977:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n\t<div class=\"panel-heading\">\r\n\r\n\t\t<h2> {{headerText}} </h2>\r\n\t\t<button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n\t\t<br><br>\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n\t\t\t<p>{{errorMessage}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n\t\t<table id=\"tblIMS\" class=\"table table-hover table-striped\">\r\n\t\t\t<colgroup>\r\n\t\t\t\t<col width=\"70%\" />\r\n\t\t\t\t<col width=\"30%\" />\r\n\t\t\t</colgroup>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>IMS Region<i (click)=\"SortTable('IMS')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('IMS') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchIMS\" name=\"IMS\" [(ngModel)]=\"srchObj.IMS\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let item of (collection | filter:srchObj | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n\t\t\t\t\t<td>{{item.IMS}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.IMSID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n\t\t\t\t\t\t<button (click)=\"ShowDetails(item.IMSID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.IMSID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n        <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n\t</div>\r\n\r\n\t<div class=\"panel-body\" *ngIf=\"Formstate\">\r\n\t\t<form (submit)=\"HandleForm($event)\" #f=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-horizontal\">\r\n\r\n\t\t\t\t<h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this IMS ?</h2>\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"IMS\" class=\"control-label col-md-2 col-sm-2\">IMS</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"IMS\" [(ngModel)]=\"model.IMS\" #specName=\"ngModel\" required>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !specName.valid\" class=\"help-block\">IMS Region is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n\t\t\t\t\t<button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\">Save</button> |\r\n\t\t\t\t\t<button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button> |\r\n\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n\t<div class=\"panel-heading\">\r\n\r\n\t\t<h2> {{headerText}} </h2>\r\n\t\t<button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n\t\t<br><br>\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n\t\t\t<p>{{errorMessage}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n\t\t<table id=\"tblSpecs\" class=\"table table-hover table-striped\">\r\n\t\t\t<colgroup>\r\n\t\t\t\t<col width=\"70%\" />\r\n\t\t\t\t<col width=\"30%\" />\r\n\t\t\t</colgroup>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th> Account <i (click)=\"SortTable('SpecName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('SpecName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchSpecName\" name=\"SpecName\" [(ngModel)]=\"searchSpec.SpecName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let item of (collection | filter:searchSpec | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n\t\t\t\t\t<td>{{item.SpecName}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.SpecID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n\t\t\t\t\t\t<button (click)=\"ShowDetails(item.SpecID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.SpecID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n        <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n\t</div>\r\n\r\n\t<div class=\"panel-body\" *ngIf=\"Formstate\">\r\n\t\t<form (submit)=\"HandleForm($event)\" #f=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-horizontal\">\r\n\r\n\t\t\t\t<h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this Account ?</h2>\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<div class=\"form-group hidden\">\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"SpecID\" [(ngModel)]=\"model.SpecID\">\r\n\t\t\t\t</div>\t\t\t\t\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"SpecName\" class=\"control-label col-md-2 col-sm-2\">Account</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"SpecName\" [(ngModel)]=\"model.SpecName\" #specName=\"ngModel\" required>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !specName.valid\" class=\"help-block\">Account is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n\t\t\t\t\t<button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\">Save</button> |\r\n\t\t\t\t\t<button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button> |\r\n\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 979:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n    <div class=\"panel-heading\">\r\n\r\n        <h2> {{headerText}} </h2>\r\n        <button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n        <br><br>\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n            <p>{{errorMessage}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n        <table id=\"tblPromoTools\" class=\"table table-hover table-striped\">\r\n            <colgroup>\r\n                <col width=\"20%\" />\r\n                <col width=\"20%\" />\r\n                <col width=\"40%\" />\r\n                <col width=\"20%\" />\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th> Promo Type <i (click)=\"SortTable('GiftName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('GiftName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Product <i (click)=\"SortTable('DrugName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('DrugName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Tool Name <i (click)=\"SortTable('ToolName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('ToolName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th></th>\r\n                </tr>\r\n                <tr>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchgiftName\" name=\"GiftName\" [(ngModel)]=\"srchObj.GiftName\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchdrugName\" name=\"DrugName\" [(ngModel)]=\"srchObj.DrugName\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchtoolName\" name=\"ToolName\" [(ngModel)]=\"srchObj.ToolName\">\r\n                        </div>\r\n                    </th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of (collection | filter:srchObj | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n                    <td>{{item.GiftName}}</td>\r\n                    <td>{{item.DrugName}}</td>\r\n                    <td>{{item.ToolName}}</td>\r\n                    <td>\r\n                        <button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.ToolID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n                        <button (click)=\"ShowDetails(item.ToolID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n                        <button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.ToolID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n    </div>\r\n\r\n    <div class=\"panel-body\" *ngIf=\"Formstate\">\r\n        <form [formGroup]=\"inFrm\" (submit)=\"inFrm.valid && HandleForm($event)\" novalidate>\r\n            <div class=\"form-horizontal\">\r\n\r\n                <h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this promotional tool ?</h2>\r\n                <br>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['GiftName'].valid }\">\r\n                    <label for=\"GiftID\" class=\"control-label col-md-2 col-sm-2\">Promo Type</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"GiftID\" [(ngModel)]=\"model.GiftID\" [formControl]=\"inFrm.controls['GiftName']\" (change)=\"onGiftChange($event)\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Promo Type...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of giftList\" [ngValue]=\"i.GiftID\">{{i.GiftName}}</option>\r\n\t\t\t\t\t\t</select>\r\n                        <div class='error' *ngIf=\"inFrm.controls['GiftName'].touched && !inFrm.controls['GiftName'].valid\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['GiftName'].hasError('required')\">Promo Type is required.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['DrugName'].valid }\">\r\n                    <label for=\"DrugID\" class=\"control-label col-md-2 col-sm-2\">Product</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"DrugID\" [(ngModel)]=\"model.DrugID\" [formControl]=\"inFrm.controls['DrugName']\" (change)=\"onDrugChange($event)\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Product...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of drugList\" [ngValue]=\"i.DrugID\">{{i.DrugName}}</option>\r\n\t\t\t\t\t\t</select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': inFrm.submitted && !inFrm.controls['ToolName'].valid }\">\r\n                    <label for=\"ToolName\" class=\"control-label col-md-2 col-sm-2\">Promotional Tool Name</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"ToolName\" [(ngModel)]=\"model.ToolName\" [formControl]=\"inFrm.controls['ToolName']\">\r\n                        <div class='error' *ngIf=\"(inFrm.controls['GiftName'].touched && !inFrm.controls['ToolName'].valid)\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['ToolName'].hasError('required')\">Promotional Tool Name is required.</div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inFrm.controls['ToolName'].hasError('alreadyexist')\">Promotional Tool Name already exist.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n                    <button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [disabled]='!inFrm.valid'>Save</button>                    |\r\n                    <button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button>                    |\r\n                    <button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 980:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n\t<div class=\"panel-heading\">\r\n\r\n\t\t<h2> {{headerText}} </h2>\r\n\t\t<button *ngIf=\"!Formstate && currentUser.jobClass < 1\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n        <br><br>\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n\t\t\t<p>{{errorMessage}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n\t\t<table id=\"tblSalesLines\" class=\"table table-hover table-striped\">\r\n\t\t\t<colgroup>\r\n\t\t\t\t<col width=\"40%\" />\r\n\t\t\t\t<col width=\"30%\" />\r\n\t\t\t\t<col width=\"30%\" />\r\n\t\t\t</colgroup>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th> Line Name <i (click)=\"SortTable('LineName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('LineName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Manager <i (click)=\"SortTable('UserName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('UserName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchLineName\" name=\"LineName\" [(ngModel)]=\"searchLine.LineName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchUserName\" name=\"UserName\" [(ngModel)]=\"searchLine.UserName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let item of (collection | filter:searchLine | orderby:orderbyString)\">\r\n\t\t\t\t\t<td>{{item.LineName}}</td>\r\n\t\t\t\t\t<td>{{item.UserName}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.SalesLineID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n\t\t\t\t\t\t<button (click)=\"ShowDetails(item.SalesLineID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.SalesLineID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\r\n\t<div class=\"panel-body\" *ngIf=\"Formstate\">\r\n\t\t<form #f=\"ngForm\" (submit)=\"HandleForm($event)\" novalidate>\r\n\t\t\t<div class=\"form-horizontal\">\r\n\r\n\t\t\t\t<h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this sales line ?</h2>\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<div class=\"form-group hidden\">\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"SalesLineID\" [(ngModel)]=\"model.SalesLineID\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"LineName\" class=\"control-label col-md-2 col-sm-2\">Line Name</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"LineName\" [(ngModel)]=\"model.LineName\" #LineName=\"ngModel\" required>\r\n\t\t\t\t\t\t<div class='error' *ngIf=\"LineName.touched && !LineName.valid\">\r\n\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"LineName.errors.required\">Line Name is required.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"UserID\" class=\"control-label col-md-2 col-sm-2\">Manager</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"UserID\" [(ngModel)]=\"model.UserID\" #Manager=\"ngModel\" required>\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Manager...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let user of users\" [ngValue]=\"user.UserID\">{{user.UserName}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<div class='error' *ngIf=\"Manager.touched && !Manager.valid\">\r\n\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"Manager.errors.required\">Manager is required.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n\t\t\t\t\t<button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [disabled]='!f.valid'>Save</button> |\r\n\t\t\t\t\t<button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button> |\r\n\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 981:
/***/ (function(module, exports) {

module.exports = "<div class=\"well no-print\">\r\n    <form #f=\"ngForm\" novalidate *ngIf=\"currentUser.jobClass != 3\" (submit)=\"f.valid && ViewReport()\">\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !from.valid }\">\r\n                    <label for=\"fromDate\" class=\"control-label col-md-2 col-sm-4\">From</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"fromDate\" [(ngModel)]=\"fromDate\" #from=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !to.valid }\">\r\n                    <label for=\"toDate\" class=\"control-label col-md-2 col-sm-4\">To</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"toDate\" [(ngModel)]=\"toDate\" #to=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !drug.valid }\">\r\n                <label for=\"drugID\" class=\"control-label col-md-3 col-sm-4\">Select a Product</label>\r\n                <div class=\"col-md-9 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"drugID\" [(ngModel)]=\"drugID\" #drug=\"ngModel\" required>\r\n                        <option [value]=\"null\">Select a Product</option>\r\n                        <option *ngFor=\"let drug of drugList\" [ngValue]=\"drug.DrugID\">{{drug.DrugName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !spec.valid }\">\r\n                <label for=\"specID\" class=\"control-label col-md-2 col-sm-2\">Speciality</label>\r\n                <div class=\"col-md-10 col-sm-10\">\r\n                    <select class=\"form-control\" name=\"specID\" [(ngModel)]=\"specID\" #spec=\"ngModel\" required>\r\n                        <option [value]=\"null\">Select a Speciality...</option>\r\n                        <option *ngFor=\"let i of specList\" [ngValue]=\"i.SpecID\">{{i.SpecName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">View</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"printReport()\">Print</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"goBack()\">Back</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"text-center\">{{reportHeader}}</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n                <dash-score [heading]=\"'Total Visits'\" [score]=\"collection.length\" [icon]=\"'fa fa-thumb-tack fa-4x'\" [alertColor]=\"'alert alert-danger'\"></dash-score>\r\n            </div>\r\n        </div>\r\n        <table id=\"tblRegions\" class=\"table table-hover table-striped table-responsive table-bordered\">\r\n            <colgroup>\r\n                <col width=\"20%\" />\r\n                <col width=\"20%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"10%\" />\r\n                <col width=\"20%\" />\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th> IMS Region <i (click)=\"SortTable('IMS')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('IMS') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Medical Rep. <i (click)=\"SortTable('UserName')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('UserName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Visit Date <i (click)=\"SortTable('VisitDate')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('VisitDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Customer <i (click)=\"SortTable('Destination')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('Destination') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Speciality <i (click)=\"SortTable('SpecName')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('SpecName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Comment <i (click)=\"SortTable('Comment')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('Comment') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of collection | orderby:orderbyString\">\r\n                    <td>{{item.IMS}}</td>\r\n                    <td>{{item.UserName}}</td>\r\n                    <td>{{item.VisitDate | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>{{item.Destination}}</td>\r\n                    <td>{{item.SpecName}}</td>\r\n                    <td>{{item.Comment}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <!--<pagination-controls class=\"no-print\" (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ 982:
/***/ (function(module, exports) {

module.exports = "<div class=\"well no-print\">\r\n    <form #f=\"ngForm\" novalidate *ngIf=\"currentUser.jobClass != 3\" (submit)=\"f.valid && ViewReport()\">\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !from.valid }\">\r\n                    <label for=\"fromDate\" class=\"control-label col-md-2 col-sm-4\">From</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"fromDate\" [(ngModel)]=\"fromDate\" #from=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !to.valid }\">\r\n                    <label for=\"toDate\" class=\"control-label col-md-2 col-sm-4\">To</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"toDate\" [(ngModel)]=\"toDate\" #to=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"DrugID\" class=\"control-label col-md-3 col-sm-4\">Select a Product</label>\r\n                <div class=\"col-md-9 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"DrugID\" [(ngModel)]=\"drugID\">\r\n                        <option [value]=\"null\">Select a Product</option>\r\n                        <option *ngFor=\"let drug of drugList\" [ngValue]=\"drug.DrugID\">{{drug.DrugName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"imsID\" class=\"control-label col-md-3 col-sm-4\">Select IMS Region</label>\r\n                <div class=\"col-md-9 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"imsID\" [(ngModel)]=\"imsID\">\r\n                        <option [value]=\"null\">Select IMS Region</option>\r\n                        <option *ngFor=\"let ims of imsList\" [ngValue]=\"ims.IMSID\">{{ims.IMS}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">View</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"printReport()\">Print</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"goBack()\">Back</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"text-center\">{{reportHeader}}</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n                <dash-score [heading]=\"'Total Visits'\" [score]=\"collection.length\" [icon]=\"'fa fa-thumb-tack fa-4x'\" [alertColor]=\"'alert alert-danger'\"></dash-score>\r\n            </div>\r\n        </div>\r\n        <table id=\"tblRegions\" class=\"table table-hover table-striped table-responsive table-bordered\">\r\n            <colgroup>\r\n                <col width=\"20%\" />\r\n                <col width=\"20%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"10%\" />\r\n                <col width=\"20%\" />\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th> IMS Region <i (click)=\"SortTable('IMS')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('IMS') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Medical Rep. <i (click)=\"SortTable('UserName')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('UserName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Visit Date <i (click)=\"SortTable('VisitDate')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('VisitDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Customer <i (click)=\"SortTable('Destination')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('Destination') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Speciality <i (click)=\"SortTable('SpecName')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('SpecName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Comment <i (click)=\"SortTable('Comment')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('Comment') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of collection | orderby:orderbyString\">\r\n                    <td>{{item.IMS}}</td>\r\n                    <td>{{item.UserName}}</td>\r\n                    <td>{{item.VisitDate | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>{{item.Destination}}</td>\r\n                    <td>{{item.SpecName}}</td>\r\n                    <td>{{item.Comment}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <!--<pagination-controls class=\"no-print\" (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ 983:
/***/ (function(module, exports) {

module.exports = "<div class=\"well no-print\">\r\n    <form #f=\"ngForm\" novalidate *ngIf=\"currentUser.jobClass != 3\" (submit)=\"f.valid && ViewReport()\">\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !from.valid }\">\r\n                    <label for=\"fromDate\" class=\"control-label col-md-2 col-sm-4\">From</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"fromDate\" [(ngModel)]=\"fromDate\" #from=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !to.valid }\">\r\n                    <label for=\"toDate\" class=\"control-label col-md-2 col-sm-4\">To</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"toDate\" [(ngModel)]=\"toDate\" #to=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"DrugID\" class=\"control-label col-md-3 col-sm-4\">Select a Product</label>\r\n                <div class=\"col-md-9 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"DrugID\" [(ngModel)]=\"drugID\">\r\n                        <option [value]=\"null\">Select a Product</option>\r\n                        <option *ngFor=\"let drug of drugList\" [ngValue]=\"drug.DrugID\">{{drug.DrugName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !region.valid }\">\r\n                <label for=\"RegionID\" class=\"control-label col-md-2 col-sm-2\">Regions</label>\r\n                <div class=\"col-md-10 col-sm-10\">\r\n                    <select class=\"form-control\" name=\"RegionID\" [(ngModel)]=\"regionID\" #region=\"ngModel\" (change)=\"onRegChange($event)\" required>\r\n                        <option [value]=\"null\">Select a Province...</option>\r\n                        <option *ngFor=\"let i of regionList\" [ngValue]=\"i.RegionID\">{{i.RegionName}} - {{i.ProvinceID}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !destination.valid }\">\r\n                <label for=\"DestID\" class=\"control-label col-md-2 col-sm-2\">Customer</label>\r\n                <div class=\"col-md-10 col-sm-10\">\r\n                    <select class=\"form-control\" name=\"DestID\" [(ngModel)]=\"destID\" #destination=\"ngModel\" required>\r\n                        <option [value]=\"null\">Select a Customer...</option>\r\n                        <option *ngFor=\"let i of destList\" [ngValue]=\"i.DestID\">{{i.Destination}}</option>\r\n                    </select>\r\n                    <div class='error' *ngIf=\"(destination.touched && !destination.valid) || (f.submitted && !destination.valid)\">\r\n                        <div class=\"alert alert-danger\" *ngIf=\"destination.hasError('required')\">Customer is required.</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">View</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"printReport()\">Print</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"goBack()\">Back</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"text-center\">{{reportHeader}}</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n                <dash-score [heading]=\"'Total Visits'\" [score]=\"collection.length\" [icon]=\"'fa fa-thumb-tack fa-4x'\" [alertColor]=\"'alert alert-danger'\"></dash-score>\r\n            </div>\r\n        </div>\r\n        <table id=\"tblRegions\" class=\"table table-hover table-striped table-responsive table-bordered\">\r\n            <colgroup>\r\n                <col width=\"20%\" />\r\n                <col width=\"20%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"10%\" />\r\n                <col width=\"20%\" />\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th> IMS Region <i (click)=\"SortTable('IMS')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('IMS') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Medical Rep. <i (click)=\"SortTable('UserName')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('UserName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Visit Date <i (click)=\"SortTable('VisitDate')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('VisitDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Customer <i (click)=\"SortTable('Destination')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('Destination') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Speciality <i (click)=\"SortTable('SpecName')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('SpecName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Comment <i (click)=\"SortTable('Comment')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('Comment') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of collection | orderby:orderbyString\">\r\n                    <td>{{item.IMS}}</td>\r\n                    <td>{{item.UserName}}</td>\r\n                    <td>{{item.VisitDate | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>{{item.Destination}}</td>\r\n                    <td>{{item.SpecName}}</td>\r\n                    <td>{{item.Comment}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <!--<pagination-controls class=\"no-print\" (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ 984:
/***/ (function(module, exports) {

module.exports = "<div class=\"well no-print\">\r\n    <form #f=\"ngForm\" novalidate *ngIf=\"currentUser.jobClass != 3\" (submit)=\"f.valid && ViewReport()\">\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !from.valid }\">\r\n                    <label for=\"fromDate\" class=\"control-label col-md-2 col-sm-4\">From</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"fromDate\" [(ngModel)]=\"fromDate\" #from=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !to.valid }\">\r\n                    <label for=\"toDate\" class=\"control-label col-md-2 col-sm-4\">To</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"toDate\" [(ngModel)]=\"toDate\" #to=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"DrugID\" class=\"control-label col-md-3 col-sm-4\">Select a Product</label>\r\n                <div class=\"col-md-9 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"DrugID\" [(ngModel)]=\"drugID\">\r\n                        <option [value]=\"null\">Select a Product</option>\r\n                        <option *ngFor=\"let drug of drugList\" [ngValue]=\"drug.DrugID\">{{drug.DrugName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">View</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"printReport()\">Print</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"goBack()\">Back</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"text-center\">{{reportHeader}}</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n                <dash-score [heading]=\"'Total Visits'\" [score]=\"collection.length\" [icon]=\"'fa fa-thumb-tack fa-4x'\" [alertColor]=\"'alert alert-danger'\"></dash-score>\r\n            </div>\r\n        </div>\r\n        <table id=\"tblRegions\" class=\"table table-hover table-striped table-responsive table-bordered\">\r\n            <colgroup>\r\n                <col width=\"20%\" />\r\n                <col width=\"20%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"15%\" />\r\n                <col width=\"10%\" />3\r\n                <col width=\"20%\" />\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th> IMS Region <i (click)=\"SortTable('IMS')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('IMS') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Medical Rep. <i (click)=\"SortTable('UserName')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('UserName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Visit Date <i (click)=\"SortTable('VisitDate')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('VisitDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Customer <i (click)=\"SortTable('Destination')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('Destination') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Speciality <i (click)=\"SortTable('SpecName')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('SpecName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Comment <i (click)=\"SortTable('Comment')\" class=\"btn btn-default no-print\" [ngClass]=\"(orderbyString.indexOf('Comment') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of collection | orderby:orderbyString\">\r\n                    <td>{{item.IMS}}</td>\r\n                    <td>{{item.UserName}}</td>\r\n                    <td>{{item.VisitDate | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>{{item.Destination}}</td>\r\n                    <td>{{item.SpecName}}</td>\r\n                    <td>{{item.Comment}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <!--<pagination-controls class=\"no-print\"  (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ 985:
/***/ (function(module, exports) {

module.exports = "<div class=\"well no-print\">\r\n    <form #f=\"ngForm\" novalidate *ngIf=\"currentUser.jobClass != 3\" (submit)=\"f.valid && ViewReport()\">\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !from.valid }\">\r\n                    <label for=\"fromDate\" class=\"control-label col-md-2 col-sm-4\">From</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"fromDate\" [(ngModel)]=\"fromDate\" #from=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !to.valid }\">\r\n                    <label for=\"toDate\" class=\"control-label col-md-2 col-sm-4\">To</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"toDate\" [(ngModel)]=\"toDate\" #to=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !gft.valid }\">\r\n                <label for=\"selectedGift\" class=\"control-label col-md-3 col-sm-4\">Select Promo Tool Type</label>\r\n                <div class=\"col-md-9 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"selectedGift\" [(ngModel)]=\"selectedGift\" #gft=\"ngModel\" required>\r\n                        <option [ngValue]=\"null\">Select Promo Tool Type..</option>\r\n                        <option *ngFor=\"let gft of gftList\" [ngValue]=\"gft.GiftID\">{{gft.GiftName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>-->\r\n            <div class=\"form-group\">\r\n                <label for=\"imsID\" class=\"control-label col-md-3 col-sm-4\">Select IMS Region</label>\r\n                <div class=\"col-md-9 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"imsID\" [(ngModel)]=\"imsID\">\r\n                        <option [ngValue]=\"null\">Select IMS Region</option>\r\n                        <option *ngFor=\"let ims of imsList\" [ngValue]=\"ims.IMSID\">{{ims.IMS}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">View</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"printReport()\">Print</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"goBack()\">Back</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <pre>\r\n        {{data | json}}\r\n        {{original | json}}\r\n        </pre>\r\n    </div>\r\n</div>\r\n<div class=\"svgRpt well\">\r\n</div>"

/***/ }),

/***/ 986:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <template ngFor let-rpt [ngForOf]=\"reports\">\r\n        <div class=\"col-xs-12 col-md-12\" *ngIf=\"rpt.heading\">\r\n            <h2>{{rpt.header}}</h2>\r\n        </div>\r\n        <div class=\"col-xs-6 col-md-3\" *ngIf=\"!rpt.heading\">\r\n            <a [routerLink]=\"rpt.link\" class=\"thumbnail\">\r\n                <img src=\"./assets/img/ReportIcon.svg\" alt=\"Report\" style=\"max-height: 150px; max-width: 100px\">\r\n                <div class=\"caption text-center\">\r\n                    <h4>{{rpt.header}}</h4>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </template>\r\n</div>"

/***/ }),

/***/ 987:
/***/ (function(module, exports) {

module.exports = "<div class=\"well no-print\">\r\n    <form #f=\"ngForm\" novalidate *ngIf=\"currentUser.jobClass != 3\" (submit)=\"f.valid && ViewReport()\">\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !from.valid }\">\r\n                    <label for=\"fromDate\" class=\"control-label col-md-2 col-sm-4\">From</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"fromDate\" [(ngModel)]=\"fromDate\" #from=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n                <div [ngClass]=\"{ 'has-error': f.submitted && !to.valid }\">\r\n                    <label for=\"toDate\" class=\"control-label col-md-2 col-sm-4\">To</label>\r\n                    <div class=\"col-md-4 col-sm-8\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"toDate\" [(ngModel)]=\"toDate\" #to=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !spec.valid }\">\r\n                <label for=\"selectedSpec\" class=\"control-label col-md-2 col-sm-4\">Select Medical Account</label>\r\n                <div class=\"col-md-10 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"selectedSpec\" [(ngModel)]=\"selectedSpec\" #spec=\"ngModel\" required>\r\n                        <option [ngValue]=\"null\">Select Medical Account..</option>\r\n                        <option *ngFor=\"let spec of specList\" [ngValue]=\"spec.SpecID\">{{spec.SpecName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"imsID\" class=\"control-label col-md-2 col-sm-4\">Select IMS Region</label>\r\n                <div class=\"col-md-10 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"imsID\" [(ngModel)]=\"imsID\">\r\n                        <option [ngValue]=\"null\">Select IMS Region</option>\r\n                        <option *ngFor=\"let ims of imsList\" [ngValue]=\"ims.IMSID\">{{ims.IMS}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">View</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"printReport()\">Print</button>\r\n                </div>\r\n                <div class=\"col-md-offset-1 col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"goBack()\">Back</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"card-block\">\r\n    <div>\r\n        <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" [colors]=\"colorsEmpty\"></canvas>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = "<div class=\"well no-print\">\r\n    <form>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\" *ngIf=\"currentUser.jobClass != 3\">\r\n                <label for=\"selectedUser\" class=\"control-label col-md-4 col-sm-4\">Select Medical Rep.</label>\r\n                <div class=\"col-md-8 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"selectedUser\" [(ngModel)]=\"selectedUser\" (change)=\"newUser()\">\r\n                        <option [value]=\"currentUser.userID\">{{currentUser.UserName}}</option>\r\n                        <option *ngFor=\"let user of userList\" [ngValue]=\"user.UserID\">{{user.UserName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-offset-1 col-md-4\">\r\n            <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"window.print()\">Print</button>\r\n        </div>\r\n        <div class=\"col-md-offset-1 col-md-4\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"goBack()\">Back</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card-block\">\r\n    <date-slider (dateChanged)=\"newSchedule($event)\"></date-slider>\r\n\r\n    <div>\r\n        <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" [colors]=\"colorsEmpty\"></canvas>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = "<div class=\"well no-print\">\r\n    <form>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\" *ngIf=\"currentUser.jobClass != 3\">\r\n                <label for=\"selectedUser\" class=\"control-label col-md-4 col-sm-4\">Select Medical Rep.</label>\r\n                <div class=\"col-md-8 col-sm-8\">\r\n                    <select class=\"form-control\" name=\"selectedUser\" [(ngModel)]=\"selectedUser\" (change)=\"newUser()\">\r\n                        <option [value]=\"currentUser.userID\">{{currentUser.UserName}}</option>\r\n                        <option *ngFor=\"let user of userList\" [ngValue]=\"user.UserID\">{{user.UserName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-offset-1 col-md-4\">\r\n            <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"window.print()\">Print</button>\r\n        </div>\r\n        <div class=\"col-md-offset-1 col-md-4\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"goBack()\">Back</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card-block\">\r\n    <table class=\"table table-bordered table-hover table-striped\">\r\n        <colgroup>\r\n            <col width=\"50%\">\r\n            <col width=\"50%\">\r\n        </colgroup>\r\n        <thead>\r\n            <tr>\r\n                <th>VisType</th>\r\n                <th>VisCount</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of userRate\">\r\n                <td>{{item.DayDate | date:'dd/MM/yyyy'}}</td>\r\n                <td>{{item.visCount}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n    <div class=\"panel-heading\">\r\n        <h2> Change User Password </h2>\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n            <p>{{errorMessage}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"inputForm\" (submit)=\"(inputForm.valid || Formstate == 'Delete') && SavePassword($event)\" novalidate>\r\n            <div class=\"form-horizontal\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"OldPass\" class=\"control-label col-md-2 col-sm-2\">Old Password</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <input class=\"form-control\" type=\"password\" name=\"OldPass\" [formControl]=\"inputForm.controls['OldPass']\">\r\n                        <div class='error' *ngIf=\"inputForm.controls['OldPass'].touched\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['OldPass'].hasError('required')\">Old User Password is required.</div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inputForm.hasError('mismatchValue')\">Old User Password is Incorrect.</div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['OldPass'].hasError('minlength')\">Old User Password must be minimum 5 characters.</div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['OldPass'].hasError('maxlength')\">Old User Password must be maximum 200 characters.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"UserPass\" class=\"control-label col-md-2 col-sm-2\">New Password</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <input class=\"form-control\" type=\"password\" name=\"UserPass\" [formControl]=\"inputForm.controls['UserPass']\">\r\n                        <div class='error' *ngIf=\"inputForm.controls['UserPass'].touched\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['UserPass'].hasError('required')\">User Password is required.</div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['UserPass'].hasError('minlength')\">User Password must be minimum 5 characters.</div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inputForm.controls['UserPass'].hasError('maxlength')\">User Password must be maximum 200 characters.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"ConfPass\" class=\"control-label col-md-2 col-sm-2\">Confirm Password</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <input class=\"form-control\" type=\"password\" name=\"ConfPass\" [formControl]=\"inputForm.controls['ConfPass']\">\r\n                        <div class='error' *ngIf=\"inputForm.controls['ConfPass'].touched\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"inputForm.hasError('mismatchedPasswords')\">Passwords do not match.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n                    <button type=\"submit\" value=\"Save\" class=\"btn btn-primary\" [disabled]='!inputForm.valid'>Save</button>                    |\r\n                    <button type=\"button\" (click)=\"Back()\" class=\"btn btn-danger\">Back to Home</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n\t<div class=\"panel-heading\">\r\n\r\n\t\t<h2> {{headerText}} </h2>\r\n\t\t<button *ngIf=\"!Formstate\" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n\t\t<br><br>\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n\t\t\t<p>{{errorMessage}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n\t\t<table id=\"tblMsgs\" class=\"table table-hover table-striped\">\r\n\t\t\t<colgroup>\r\n\t\t\t\t<col width=\"20%\" />\r\n\t\t\t\t<col width=\"10%\" />\r\n\t\t\t\t<col width=\"20%\" />\r\n\t\t\t\t<col width=\"20%\" />\r\n\t\t\t\t<col width=\"10%\" />\r\n\t\t\t\t<col width=\"20%\" />\r\n\t\t\t</colgroup>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th> From User <i (click)=\"SortTable('UserName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('UserName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Create Date <i (click)=\"SortTable('CreateDate')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('CreateDate') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Message Type <i (click)=\"SortTable('IssueType')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('IssueType') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Title <i (click)=\"SortTable('Title')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('Title') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th> Solved <i (click)=\"SortTable('Solved')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('Solved') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchUserName\" name=\"UserName\" [(ngModel)]=\"srchObj.UserName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchIssueType\" name=\"IssueType\" [(ngModel)]=\"srchObj.IssueType\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"srchTitle\" name=\"Title\" [(ngModel)]=\"srchObj.Title\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let item of (collection | filter:srchObj | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\">\r\n\t\t\t\t\t<td>{{item.UserName}}</td>\r\n\t\t\t\t\t<td>{{item.CreateDate | date:'dd/MM/yyyy'}}</td>\r\n\t\t\t\t\t<td>{{item.IssueType}}</td>\r\n\t\t\t\t\t<td>{{item.Title}}</td>\r\n\t\t\t\t\t<td>{{item.Solved}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.ID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n\t\t\t\t\t\t<button (click)=\"ShowDetails(item.ID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n\t\t\t\t\t\t<button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.ID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t<pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n\t</div>\r\n\r\n\t<div class=\"panel-body\" *ngIf=\"Formstate\">\r\n\t\t<form (submit)=\"f.form.valid && HandleForm($event)\" #f=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-horizontal\">\r\n\r\n\t\t\t\t<h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this message ?</h2>\r\n\t\t\t\t<br>\r\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !Type.valid }\">\r\n\t\t\t\t\t<label for=\"IssueType\" class=\"control-label col-md-2 col-sm-2\">Message Type</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"IssueType\" [(ngModel)]=\"model.IssueType\" #Type=\"ngModel\" required>\r\n\t\t\t\t\t\t\t<option ngValue=\"null\">Select a Message Type...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of msgTypeList\" [ngValue]=\"i.name\">{{i.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !Type.valid\" class=\"help-block\">Message Type is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !title.valid }\">\r\n\t\t\t\t\t<label for=\"title\" class=\"control-label col-md-2 col-sm-2\">Title</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"Title\" [(ngModel)]=\"model.Title\" #title=\"ngModel\" required>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !title.valid\" class=\"help-block\">Title is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !IDesc.valid }\">\r\n\t\t\t\t\t<label for=\"IDescription\" class=\"control-label col-md-2 col-sm-2\">Description</label>\r\n\t\t\t\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t\t\t\t<textarea rows=\"\" cols=\"\" class=\"form-control\" type=\"text\" name=\"IDescription\" [(ngModel)]=\"model.IDescription\" #IDesc=\"ngModel\"\r\n\t\t\t\t\t\t required></textarea>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !IDesc.valid\" class=\"help-block\">Description is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group no-print col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10\">\r\n\t\t\t\t\t<button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\">Save</button>\t\t\t\t\t|\r\n\t\t\t\t\t<button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button> |\r\n\t\t\t\t\t<button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1>\r\n<!--<div class=\"userchain\" *ngIf=\"currentUser.jobClass >= 1\">\r\n    <div *ngFor=\"let user of users\">\r\n        <dash-schedule [currentUser]=\"currentUser\" [user]=\"user\" [chain]=\"true\" ></dash-schedule>\r\n        <dash-workRate [currentUser]=\"currentUser\" [user]=\"user\" [chain]=\"true\"></dash-workRate>\r\n    </div>\r\n</div>-->\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n        <dash-score [heading]=\"headings[0]\" [score]=\"planned\" [icon]=\"'fa fa-calendar fa-4x'\" [alertColor]=\"'alert alert-danger'\"></dash-score>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n        <dash-score [heading]=\"headings[1]\" [score]=\"committed\" [icon]=\"'fa fa-thumb-tack fa-4x'\" [alertColor]=\"'alert alert-warning'\"></dash-score>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n        <dash-score [heading]=\"headings[2]\" [score]=\"today\" [icon]=\"'fa fa-calendar-check-o fa-4x'\" [alertColor]=\"'alert alert-info'\"></dash-score>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n        <dash-score [heading]=\"headings[3]\" [score]=\"promo\" [icon]=\"'fa fa-gift fa-4x'\" [alertColor]=\"'alert alert-success'\"></dash-score>\r\n    </div>\r\n</div>\r\n<div class=\"userchain\" *ngIf=\"currentUser.jobClass != 3\">\r\n    <div class=\"form-group row alert alert-success\" style=\"margin: 10px 5px; padding: 5px;\">\r\n        <label for=\"userID\" class=\"control-lable col-md-3 text-right\">Select a User</label>\r\n        <div class=\"col-md-9\">\r\n            <select class=\"form-control\" name=\"userID\" (change)=\"UserChanged($event)\">\r\n            <option value=\"null\">Select a User</option>\r\n            <option *ngFor=\"let user of users\" [ngValue]=\"user.UserID\">{{user.UserName}}</option>\r\n        </select>\r\n        </div>\r\n    </div>\r\n    <dash-schedule *ngIf=\"seluser\" [currentUser]=\"currentUser\" [user]=\"seluser\" [chain]=\"true\"></dash-schedule>\r\n    <dash-workRate *ngIf=\"seluser\" [currentUser]=\"currentUser\" [user]=\"seluser\" [chain]=\"true\"></dash-workRate>\r\n</div>\r\n\r\n<div class=\"userchain\" *ngIf=\"currentUser.jobClass == 3\">\r\n    <dash-plan [currentUser]=\"currentUser\"></dash-plan>\r\n    <dash-schedule [currentUser]=\"currentUser\"></dash-schedule>\r\n    <dash-workRate [currentUser]=\"currentUser\"></dash-workRate>\r\n</div>"

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-blue panel-widget \">\r\n    <div class=\"row no-padding\" [ngClass]=\"alertColor\">\r\n        <div class=\"col-sm-3 col-lg-5 widget-left no-padding text-center\">\r\n            <!--<svg class=\"glyph stroked bag\">\r\n                <use xlink:href=\"#stroked-bag\"></use>\r\n            </svg>-->\r\n            <i [ngClass]=\"icon\"></i>\r\n        </div>\r\n        <div class=\"col-sm-9 col-lg-7 widget-right\">\r\n            <div class=\"large\">{{score}}</div>\r\n            <div class=\"text-muted\">{{heading}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <h3 class=\"card-title\">\r\n        <a class=\"btn btn-warning\" data-toggle=\"collapse\" [href]=\"'#'+'plan'+currentUser.userID\" aria-expanded=\"true\" [attr.aria-controls]=\"'plan'+currentUser.userID\"\r\n            (click)=\"changeArrowClass()\">\r\n            <i class=\"glyphicon\" [ngClass]=\"appliedClass ? 'glyphicon-circle-arrow-up' : 'glyphicon-circle-arrow-down'\"></i>\r\n        </a>\r\n        {{currentUser.UserName}} Assigned Plan\r\n    </h3>\r\n    <!--(dateChanged)=\"newSchedule($event)\"-->\r\n\r\n    <div [id]=\"'plan'+currentUser.userID\" class=\"panel-collapse collapse in\">\r\n        <div class=\"card-block\">\r\n            <plan-slider [currentUser]=\"currentUser\" (planChanged)=\"newPlan($event)\"></plan-slider>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3>Products</h3>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ul class=\"list-group\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let item of plnDrugs | orderby:'+DrugName'\">{{item.DrugName}}\r\n                            <!--<input type=\"checkbox\" [name]=\"item.DrugID\" [checked]=\"item.Checked\" readonly>{{item.DrugName}}-->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3>Accounts</h3>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ul class=\"list-group\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let item of plnSpecs | orderby:'+SpecName'\">{{item.SpecName}}\r\n                            <!--<input type=\"checkbox\" [name]=\"item.SpecID\" [checked]=\"item.Checked\" readonly>{{item.SpecName}}-->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3>Cycles</h3>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ul class=\"list-group\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let item of plnImps | orderby:'+ImpName'\">{{item.ImpName}}\r\n                            <!--<input type=\"checkbox\" [name]=\"item.ImpID\" [checked]=\"item.Checked\" readonly>{{item.ImpName}}-->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <h3 class=\"card-title\">\r\n        <a [id]=\"'toggle'+dispUser.userID\" class=\"btn btn-warning\" data-toggle=\"collapse\" [href]=\"'#'+dispUser.userID\" aria-expanded=\"true\"\r\n            [attr.aria-controls]=\"dispUser.userID\" (click)=\"changeArrowClass()\">\r\n            <i class=\"glyphicon\" [ngClass]=\"appliedClass ? 'glyphicon-circle-arrow-up' : 'glyphicon-circle-arrow-down'\"></i>\r\n        </a>\r\n        {{dispUser.UserName}} Schedule\r\n    </h3>\r\n    <!--(dateChanged)=\"newSchedule($event)\"-->\r\n\r\n    <div [id]=\"dispUser.userID\" class=\"panel-collapse collapse in\">\r\n        <div class=\"card-block\">\r\n            <date-slider (dateChanged)=\"newSchedule($event)\"></date-slider>\r\n            <table class=\"table table-hover table-striped\">\r\n                <colgroup>\r\n                    <col width=\"15%\" />\r\n                    <col width=\"10%\" />\r\n                    <col width=\"10%\" />\r\n                    <col width=\"15%\" />\r\n                    <col width=\"10%\" />\r\n                    <col width=\"10%\" />\r\n                    <col width=\"10%\" />\r\n                    <col width=\"10%\" />\r\n                    <col width=\"10%\" />\r\n                </colgroup>\r\n                <thead>\r\n                    <tr>\r\n                        <td>Customer</td>\r\n                        <td>Type</td>\r\n                        <td>Class</td>\r\n                        <td>Region</td>\r\n                        <td>Planned Visits</td>\r\n                        <td>Commited Visits</td>\r\n                        <td>Remaining</td>\r\n                        <td>Loss Percentage</td>\r\n                        <td>Dist. Manager Visits</td>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of userSched | orderby: '+RegionName; +ProvinceID; +DestType; +Destination'\">\r\n                        <td>{{item.Destination}}</td>\r\n                        <td>{{item.DestType}}</td>\r\n                        <td>{{item.ImpName}}</td>\r\n                        <td>{{item.RegionName}} - {{item.ProvinceID}}</td>\r\n                        <td>{{item.VisitsNo}}</td>\r\n                        <td>{{item.visCount}}</td>\r\n                        <td>{{item.RemVisits}}</td>\r\n                        <td [style.color]=\"item.visLossPercent == 1 ? 'red': item.visLossPercent == 0 ? 'green': '#FFC400'\">\r\n                            {{item.visLossPercent | percent:'3.2-2'}}\r\n                        </td>\r\n                        <td>{{item.DistManVisits}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <h3 class=\"card-title\">\r\n        <a class=\"btn btn-warning\" data-toggle=\"collapse\" [href]=\"'#'+'rate'+dispUser.userID\" aria-expanded=\"true\" [attr.aria-controls]=\"'rate'+dispUser.userID\"\r\n            (click)=\"changeArrowClass()\">\r\n            <i class=\"glyphicon\" [ngClass]=\"appliedClass ? 'glyphicon-circle-arrow-up' : 'glyphicon-circle-arrow-down'\"></i>\r\n        </a>\r\n        {{dispUser.UserName}} Work Rate</h3>\r\n    <div [id]=\"'rate'+dispUser.userID\" class=\"panel-collapse collapse in\">\r\n        <div class=\"card-block\">\r\n            <date-slider (dateChanged)=\"newSchedule($event)\"></date-slider>\r\n            <!--<nvd3 [options]=\"options\" [data]=\"data\"></nvd3>-->\r\n\r\n            <div style=\"display: block;\">\r\n                <canvas baseChart [datasets]=\"chartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\"\r\n                    [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"></canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default zz\">\r\n    <div class=\"panel-heading\">\r\n\r\n        <h2> {{headerText}} </h2>\r\n        <h3> {{srchObj.DestType}} </h3>\r\n        <button *ngIf=\"!Formstate && currentUser.jobClass < 1 \" class=\"btn btn-primary\" (click)=\"CreateNew()\">Create New</button>\r\n        <!--<br><br>&& (curMonth==6 || curMonth==12)-->\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n            <p>{{errorMessage}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-body table-responsive\" *ngIf=\"showTable\">\r\n        <ul class=\"nav nav-tabs nav-justified\">\r\n            <!--<li id=\"tab1\" role=\"presentation\" class=\"tabs active\"><a data-toggle=\"tab\" href=\"javascript:void(0)\" (click)=\"TabClicked('Hospital')\">Hospital</a></li> -->\r\n            <li id=\"tab2\" role=\"presentation\" class=\"tabs active\"><a data-toggle=\"tab\" href=\"javascript:void(0)\" (click)=\"TabClicked('Clinic (Doctor)')\">Clinic (Doctor)</a></li>\r\n            <li id=\"tab3\" role=\"presentation\" class=\"tabs\"><a data-toggle=\"tab\" href=\"javascript:void(0)\" (click)=\"TabClicked('Pharmacy')\">Pharmacy</a></li>\r\n        </ul>\r\n        <div class=\"form-group row alert alert-success\" style=\"margin: 10px 5px; padding: 5px;\">\r\n            <label for=\"IMSID\" class=\"control-label col-md-2 col-sm-2 text-right\">IMS Region</label>\r\n            <div class=\"col-md-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"IMSID\" [(ngModel)]=\"selIMS\" (change)=\"IMSSelected()\" required>\r\n                    <option value=\"\">Select an IMS...</option>\r\n                    <option *ngFor=\"let i of IMSList\" [ngValue]=\"i.IMSID\">{{i.IMS}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <table id=\"tblCustomers\" class=\"table table-hover table-striped\">\r\n            <colgroup>\r\n                <col width=\"15%\" />\r\n                <col width=\"10%\" />\r\n                <col width=\"10%\" />\r\n                <col *ngIf=\"currentUser.jobClass < 1\" width=\"10%\" />\r\n                <col *ngIf=\"currentUser.jobClass > 1\" width=\"20%\" />\r\n                <col width=\"10%\" />\r\n                <col width=\"10%\" />\r\n                <col width=\"10%\" />\r\n                <col *ngIf=\"currentUser.jobClass < 1\" width=\"10%\" />\r\n                <col width=\"15%\" />\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th> {{srchObj.DestType}} Name <i (click)=\"SortTable('Destination')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('Destination') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> IMS <i (click)=\"SortTable('IMS')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('IMS') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Region - Province <i (click)=\"SortTable('RegionProvince')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('RegionProvince') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Address <i (click)=\"SortTable('Address')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('Address') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Med. Speciality <i (click)=\"SortTable('SpecName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('SpecName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Importance <i (click)=\"SortTable('ImpName')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('ImpName') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th> Visits # <i (click)=\"SortTable('VisitsNo')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf('VisitsNo') == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i></th>\r\n                    <th>\r\n                        <select [(ngModel)]=\"ClassColumn\">\r\n                            <option value=\"Approved\">Approved</option>\r\n                            <option value=\"Assigned\">Assigned</option>\r\n                            <option value=\"PlanExist\">In Plan</option>\r\n                        </select>\r\n                        <i (click)=\"SortTable('ClassColumn')\" class=\"btn btn-default\" [ngClass]=\"(orderbyString.indexOf(ClassColumn) == 1) ? orderbyClass : 'glyphicon glyphicon-sort'\"></i>\r\n                    </th>\r\n                    <th></th>\r\n                </tr>\r\n                <tr>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchDestination\" name=\"Destination\" [(ngModel)]=\"srchObj.Destination\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchIMS\" name=\"IMS\" [(ngModel)]=\"srchObj.IMS\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchRegionProvince\" name=\"RegionProvince\" [(ngModel)]=\"srchObj.RegionProvince\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchAddress\" name=\"Address\" [(ngModel)]=\"srchObj.Address\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchSpecName\" name=\"SpecName\" [(ngModel)]=\"srchObj.SpecName\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchImpName\" name=\"ImpName\" [(ngModel)]=\"srchObj.ImpName\">\r\n                        </div>\r\n                    </th>\r\n                    <th>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"glyphicon glyphicon-search\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"srchVisitsNo\" name=\"VisitsNo\" [(ngModel)]=\"srchObj.VisitsNo\">\r\n                        </div>\r\n                    </th>\r\n                    <th></th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of (filteredDest | filter:srchObj | orderby:orderbyString) | paginate: { itemsPerPage: 25, currentPage: p }\"\r\n                    [ngStyle]=\"{'background-color': !item.Approved? '#ffff80': !item.Assigned? '#66ffc2' : !item.PlanExist? '#ff9999' : '#fff'}\">\r\n                    <td class=\"text-bold\">{{item.Destination}}</td>\r\n                    <td>{{item.IMS}}</td>\r\n                    <td>{{item.RegionProvince}}</td>\r\n                    <td>{{item.Address}}</td>\r\n                    <td>{{item.SpecName}}</td>\r\n                    <td>{{item.ImpName}}</td>\r\n                    <td>{{item.VisitsNo}}</td>\r\n                    <td *ngIf=\"ClassColumn == 'Approved'\">{{item.Approved}}</td>\r\n                    <td *ngIf=\"ClassColumn == 'Assigned'\">{{item.Assigned}}</td>\r\n                    <td *ngIf=\"ClassColumn == 'PlanExist'\">{{item.PlanExist}}</td>\r\n                    <td>\r\n                        <button *ngIf=\"currentUser.jobClass < 1\" [disabled]=\"item.Approved\" (click)='ApproveDestination(item.DestID)' class=\"btn btn-success\"\r\n                            title=\"Approve Customer\"><i class=\"glyphicon glyphicon-ok\"></i></button>\r\n                        <button *ngIf=\"currentUser.jobClass < 1\" (click)='EditThis(item.DestID)' class=\"btn btn-info\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n                        <button (click)=\"ShowDetails(item.DestID)\" class=\"btn btn-warning\" title=\"Details\"><i class=\"glyphicon glyphicon-eye-open\"></i></button>\r\n                        <button *ngIf=\"currentUser.jobClass < 1\" (click)=\"Delete(item.DestID)\" class=\"btn btn-danger\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n                <tr>\r\n                    <td colspan=\"3\">\r\n                        <div style=\"display:inline-block; width:40px; height:20px; background-color: #ff9999; border: 2px; border-color: black\">\r\n                        </div>\r\n                        <label>Customers not in Current Month Plan</label>\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                        <div style=\"display:inline-block; width:40px; height:20px; background-color: #ffff80; border: 2px; border-color: black\">\r\n                        </div>\r\n                        <label>Customers not Approved</label>\r\n                    </td>\r\n                    <td colspan=\"3\">\r\n                        <div style=\"display:inline-block; width:40px; height:20px; background-color: #66ffc2; border: 2px; border-color: black\">\r\n                        </div>\r\n                        <label>Customers not Assigned to Sales Lines</label>\r\n                    </td>\r\n                </tr>\r\n            </tfoot>\r\n        </table>\r\n        <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\"></pagination-controls>\r\n    </div>\r\n\r\n    <div class=\"panel-body\" *ngIf=\"Formstate\">\r\n        <form #f=\"ngForm\" (submit)=\"HandleForm($event)\">\r\n            <div class=\"form-horizontal\">\r\n\r\n                <h2 *ngIf=\"Formstate == 'Delete'\">Are you sure you want to delete this customer ?</h2>\r\n                <br>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"Destination\" class=\"control-label col-md-2 col-sm-2\">{{srchObj.DestType}} Name</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"Destination\" [(ngModel)]=\"model.Destination\" #destination=\"ngModel\" required>\r\n                        <div class='error' *ngIf=\"destination.touched && !destination.valid\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"destination.errors.required\">Customer Name is required.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"ProvinceID\" class=\"control-label col-md-2 col-sm-2\">Province</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"ProvinceID\" [(ngModel)]=\"model.ProvinceID\" #provinceID=\"ngModel\" required (change)=\"onProvinceChanged($event)\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Province...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of ProvinceList\" [ngValue]=\"i.name\">{{i.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n                        <div class='error' *ngIf=\"provinceID.touched && !provinceID.valid\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"provinceID.errors.required\">Province is required.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"RegionID\" class=\"control-label col-md-2 col-sm-2\">Region</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"RegionID\" [(ngModel)]=\"model.RegionID\" #regionID=\"ngModel\" required>\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Region...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of RegionList\" [ngValue]=\"i.RegionID\">{{i.RegionName}}</option>\r\n\t\t\t\t\t\t</select>\r\n                        <div class='error' *ngIf=\"regionID.touched && !regionID.valid\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"regionID.errors.required\">Region Name is required.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"IMSID\" class=\"control-label col-md-2 col-sm-2\">IMS Region</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"IMSID\" [(ngModel)]=\"model.IMSID\" #imsID=\"ngModel\" required>\r\n\t\t\t\t\t\t\t<option value=\"\">Select an IMS...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of allIMSList\" [ngValue]=\"i.IMSID\">{{i.IMS}}</option>\r\n\t\t\t\t\t\t</select>\r\n                        <div class='error' *ngIf=\"imsID.touched && !imsID.valid\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"imsID.errors.required\">IMS Region is required.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"Address\" class=\"control-label col-md-2 col-sm-2\">Address</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <textarea rows=\"2\" cols=\"10\" class=\"form-control\" name=\"Address\" [(ngModel)]=\"model.Address\" #address=\"ngModel\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"MedSpecID\" class=\"control-label col-md-2 col-sm-2\">Speciality</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"MedSpecID\" [(ngModel)]=\"model.MedSpecID\" #specID=\"ngModel\" required>\r\n\t\t\t\t\t\t\t<option value=\"\">Select a Speciality...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of MedSpecList\" [ngValue]=\"i.SpecID\">{{i.SpecName}}</option>\r\n\t\t\t\t\t\t</select>\r\n                        <div class='error' *ngIf=\"specID.touched && !specID.valid\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"specID.errors.required\">Speciality is required.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"VisitImpID\" class=\"control-label col-md-2 col-sm-2\">Importance</label>\r\n                    <div class=\"col-md-10 col-sm-10\">\r\n                        <select class=\"form-control\" name=\"VisitImpID\" [(ngModel)]=\"model.VisitImpID\" #impID=\"ngModel\" required>\r\n\t\t\t\t\t\t\t<option value=\"\">Select an Importance...</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let i of VisImpList\" [ngValue]=\"i.ImpID\">{{i.ImpName}} - {{i.VisitsNo}} Visits</option>\r\n\t\t\t\t\t\t</select>\r\n                        <div class='error' *ngIf=\"impID.touched && !impID.valid\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"impID.errors.required\">Importance is required.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                    <h3>the Customer will be visited by:</h3>\r\n                    <div *ngFor=\"let line of lines\">\r\n                        <dest-lineusers [UserList]=\"UserList\" [line]=\"line\" (userSelected)=\"userSelected($event)\"></dest-lineusers>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group no-print col-md-offset-2 col-md-10 col-sm-10\">\r\n                    <button type=\"submit\" value=\"Save\" class=\"btn btn-info\" *ngIf=\"Formstate!='Details' && Formstate!='Delete'\" [disabled]='!f.valid'>Save</button>                    |\r\n                    <button type=\"submit\" value=\"Delete\" class=\"btn btn-info\" *ngIf=\"Formstate == 'Delete'\">Delete</button>                    |\r\n                    <button type=\"button\" (click)=\"TableBack()\" class=\"btn btn-danger\">Back to List</button>\r\n                </div>\r\n                <div class=\"form-group alert alert-danger\" *ngIf=\"errorMessage\">\r\n                    <p>{{errorMessage}}</p>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-centered\">\r\n    <div class=\"view col-md-12 col-sm-12 col-xs-12\">\r\n        <button class=\"btn btn-large btn-primary pull-left col-md-2 col-sm-2 col-xs-2 col-centered\" type=\"button\" (click)=\"previousMonth()\">\r\n            <i class=\"glyphicon glyphicon-circle-arrow-left\"></i>\r\n        </button>\r\n        <div class=\"text-center col-md-8 col-sm-8 col-xs-8 col-centered\">\r\n            <h2 class=\"text-center\">{{MonthName}} - {{Year}}</h2>\r\n        </div>\r\n        <button class=\"btn btn-large btn-primary pull-right col-md-2 col-sm-2 col-xs-2 col-centered\" type=\"button\" (click)=\"nextMonth()\">\r\n            <i class=\"glyphicon glyphicon-circle-arrow-right\"></i>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 999:
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-centered\">\r\n    <div class=\"view col-md-12 col-sm-12 col-xs-12\">\r\n        <button [disabled]=\"selectedPlan == 0\" class=\"btn btn-large btn-primary pull-left col-md-2 col-sm-2 col-xs-2 col-centered\" type=\"button\" (click)=\"previousPlan()\">\r\n            <i class=\"glyphicon glyphicon-circle-arrow-left\"></i>\r\n        </button>\r\n        <div class=\"text-center col-md-8 col-sm-8 col-xs-8 col-centered\">\r\n            <h2 class=\"text-center\">{{FromDate}} - {{ToDate}}</h2>\r\n        </div>\r\n        <button [disabled]=\"selectedPlan == userPlan.length-1\" class=\"btn btn-large btn-primary pull-right col-md-2 col-sm-2 col-xs-2 col-centered\" type=\"button\" (click)=\"nextPlan()\">\r\n            <i class=\"glyphicon glyphicon-circle-arrow-right\"></i>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ })

},[1292]);
//# sourceMappingURL=main.bundle.map