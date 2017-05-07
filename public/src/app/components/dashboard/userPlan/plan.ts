import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MonthPlan, PlanDrugs, PlanImps, PlanSpecs, CurrentUser } from '../../../Models';
import { PlanService } from '../../../services';

@Component({
    selector: 'dash-plan',
    templateUrl: './plan.html'
})
export class UserPlanComponent implements OnInit {
    constructor(private srvPlan: PlanService) { }

    @Input() currentUser: CurrentUser;
    appliedClass: boolean = true
    plnSpecs: PlanSpecs[] = []
    plnDrugs: PlanDrugs[] = []
    plnImps: PlanImps[] = []

    ngOnInit() {

    }

    newPlan(planID: number) {
        this.srvPlan.getPlanDetails(planID).subscribe(det => {
            this.plnSpecs = det.specs.filter(d=>d.Checked == true)
            this.plnDrugs = det.drgs.filter(d=>d.Checked == true)
            this.plnImps = det.imps.filter(d=>d.Checked == true)
        })

    }
    changeArrowClass() {
        this.appliedClass = !this.appliedClass
    }
}