import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MonthPlan, PlanDrugs, PlanImps, PlanSpecs, CurrentUser } from '../../../Models';
import { PlanService } from '../../../services';
import * as hf from '../helper.functions'

@Component({
    selector: 'plan-slider',
    templateUrl: './planSlider.html',
    styles: [` h2 { display: inline; }
    `]
})
export class PlanSliderComponent implements OnInit {
    @Input() currentUser: CurrentUser;
    @Output() planChanged = new EventEmitter()
    userPlan: MonthPlan[] = [];
    selectedPlan = 0
    FromDate: string
    ToDate: string

    constructor(private srvPlan: PlanService) { }

    ngOnInit() {
        this.srvPlan.getUserPlan(this.currentUser.userID).subscribe(pln => {
            this.userPlan = pln;
            if (!this.userPlan) return
            this.selectedPlan = this.userPlan.findIndex(p => new Date() >= new Date(p.FromDate) &&
                                                            new Date() < new Date(new Date(p.ToDate).setDate(new Date(p.ToDate).getDate()+1)))
            this.changeView()
        }, err => hf.handleError(err));
    }
    previousPlan() {
        this.selectedPlan--;
        this.changeView()
    }
    nextPlan() {
        this.selectedPlan++;
        this.changeView()
    }
    changeView() {
        this.FromDate = hf.handleDate(new Date(this.userPlan[this.selectedPlan].FromDate))
        this.ToDate = hf.handleDate(new Date(this.userPlan[this.selectedPlan].ToDate))
        this.planChanged.emit(this.userPlan[this.selectedPlan].PlanID)
    }
}
