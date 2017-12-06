import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  MonthPlan,
  PlanDrugs,
  PlanImps,
  PlanSpecs,
  CurrentUser
} from '../../../Models';
import { PlanService } from '../../../services';
import * as hf from '../../helpers/helper.functions'

@Component({
  selector: 'dash-plan',
  templateUrl: './plan.html'
})
export class UserPlanComponent implements OnInit {
  @Input() currentUser: CurrentUser;
  appliedClass = true;
  plnSpecs: PlanSpecs[] = [];
  plnDrugs: PlanDrugs[] = [];
  plnImps: PlanImps[] = [];

  constructor(private srvPlan: PlanService) {}

  ngOnInit() {}

  newPlan(planID: number) {
    this.srvPlan.getPlanDetails(planID).subscribe(det => {
      this.plnSpecs = det.specs.filter(d => d.Checked == true);
      this.plnDrugs = det.drgs.filter(d => d.Checked == true);
      this.plnImps = det.imps.filter(d => d.Checked == true);
    }, err => hf.handleError(err));
  }
  changeArrowClass() {
    this.appliedClass = !this.appliedClass;
  }
}
