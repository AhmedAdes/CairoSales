import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PlanService, LineService, MedSpecService, DrugService, ImportanceService, AuthenticationService } from '../../services';
import { minDate, maxDate, planDateInRange, min, max } from '../../pipes/validators';
import * as hf from '../helpers/helper.functions'
import { MonthPlan, SalesLine, CurrentUser, PlanDrugs, PlanSpecs, PlanImps, User } from '../../Models';

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html'
})
export class PlanComponent implements OnInit {
    inFrm: FormGroup
    cnvFromDate: string
    cnvToDate: string
    currentUser: CurrentUser = this.auth.getUser()
    collection: MonthPlan[] = []
    srchObj: MonthPlan = new MonthPlan()
    model: MonthPlan
    showTable: boolean
    Formstate: string
    headerText: string
    errorMessage: string
    drugs: PlanDrugs[]
    lines: SalesLine[] = []
    plnSpecs: PlanSpecs[] = []
    plnDrugs: PlanDrugs[] = []
    plnImps: PlanImps[] = []
    orderbyString = ''
    orderbyClass = 'glyphicon glyphicon-sort'
    yesterday: string
    thisday: string
    spinner = true

    constructor(private srvPlan: PlanService, private srvImp: ImportanceService, private srvDrug: DrugService,
        private srvSpec: MedSpecService, private srvLine: LineService,
        private auth: AuthenticationService, fb: FormBuilder) {
        this.inFrm = fb.group({
            'fromDate': [this.cnvFromDate, Validators.required],
            'toDate': [this.cnvToDate, Validators.required],
            'line': [null, Validators.required],
            'plnName': [null, Validators.required]
        })
        this.inFrm.controls['line'].valueChanges.subscribe(val => this.lineChange(val))
        this.inFrm.controls['fromDate'].valueChanges.subscribe(val => this.FromDateChange(val))
    }

    ngOnInit() {
        this.srvPlan.getPlan().subscribe(cols => {
            this.collection = cols;
            this.srvLine.getLine().subscribe(ln => {
                this.lines = ln;
                this.srvPlan.getDetails().subscribe(det => {
                    this.plnSpecs = det.specs
                    this.drugs = det.drgs
                    // this.plnDrugs = det.drgs
                    this.plnImps = det.imps
                    this.TableBack();
                });
            })
        }, err => hf.handleError(err))
    }
    CreateNew() {
        this.model = new MonthPlan();
        const today = new Date();
        this.cnvFromDate = hf.handleDate(today);
        this.cnvToDate = hf.handleDate(today);
        this.updateValidators('all')
        this.showTable = false;
        this.Formstate = 'Create';
        this.headerText = 'Create New Plan';
        this.ToggleAllSpecs(true);
        this.drugs.forEach(drg => drg.Checked = true)
        // this.ToggleAllDrugs(true);
        this.ToggleAllImps(true);
    }

    EditThis(id: number) {
        this.loadDetails(id, 'Edit');
    }
    ShowDetails(id: number) {
        this.loadDetails(id, 'Details');
    }
    Delete(id: number) {
        this.loadDetails(id, 'Delete');
    }
    loadDetails(id, state) {
        this.srvPlan.getPlan(id).subscribe(ret => {
            this.model = ret[0];
            this.cnvFromDate = this.model.FromDate.toString().split('T')[0];
            this.cnvToDate = this.model.ToDate.toString().split('T')[0];
            this.updateValidators('all')
            this.FromDateChange(this.inFrm.controls['fromDate'].value)
            this.srvPlan.getPlanDetails(id).subscribe(det => {
                this.plnSpecs = det.specs
                this.drugs = det.drgs
                this.lineChange(this.model.SalesLineID)
                this.plnImps = det.imps
                this.showTable = false;
                this.Formstate = state;
                this.headerText = state == 'Details' ? 'Plan ' + state : state + ' Plan';
            }, err => hf.handleError(err));
        }, err => hf.handleError(err))
    }
    TableBack() {
        this.showTable = true;
        this.spinner = false
        this.Formstate = null;
        this.headerText = 'Plan';
        this.errorMessage = null;
        this.inFrm.reset();
    }
    HandleForm(event) {
        event.preventDefault();
        this.model.FromDate = new Date(this.cnvFromDate);
        this.model.ToDate = new Date(this.cnvToDate);
        const selDrugs = this.plnDrugs.filter(c => c.Checked == true)
        const selSpec = this.plnSpecs.filter(c => c.Checked == true)
        const selImp = this.plnImps.filter(c => c.Checked == true)

        if (selDrugs.length <= 0 && this.Formstate !== 'Delete') {
          hf.handleError('Please Select Any of the Products')
          return;
        }
        if (selSpec.length <= 0 && this.Formstate !== 'Delete') {
          hf.handleError('Please Select Any of the Specifications')
          return;
        }
        if (selImp.length <= 0 && this.Formstate !== 'Delete') {
          hf.handleError('Please Select Any of the Cycles')
          return;
        }
        switch (this.Formstate) {
            case 'Create':
                this.srvPlan.InsertPlan(this.model, selDrugs, selSpec, selImp).subscribe(ret => {
                    if (ret.error) {
                        hf.handleError(ret.error)
                    } else {
                        this.ngOnInit();
                    }
                }, err => hf.handleError(err));
                break;
            case 'Edit':
                this.srvPlan.UpdatePlan(this.model.PlanID, this.model, selDrugs, selSpec, selImp).subscribe(ret => {
                    if (ret.error) {
                        hf.handleError(ret.error)
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                }, err => hf.handleError(err));
                break;
            case 'Delete':
                this.srvPlan.DeletePlan(this.model.PlanID).subscribe(ret => {
                    if (ret.error) {
                        hf.handleError(ret.error)
                    } else if (ret.affected > 0) {
                        this.ngOnInit();
                    }
                }, err => hf.handleError(err));
                break;
            default:
                break;
        }
    }

    SortTable(column: string) {
        if (this.orderbyString.indexOf(column) == -1) {
            this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes';
            this.orderbyString =  '+' + column;
        } else if (this.orderbyString.indexOf('-' + column) == -1) {
            this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
            this.orderbyString =  '-' + column;
        } else {
            this.orderbyClass = 'glyphicon glyphicon-sort';
            this.orderbyString =  '';
        }
    }

    FromDateChange(value) {
        if (!value) return;
        this.updateValidators('to')
        this.constructPlanName()
    }
    updateValidators(all: string) {
        switch (all) {
            case 'all':
                this.inFrm.controls['fromDate'].setValidators(Validators.compose([Validators.required,
                  planDateInRange(this.collection, this.model.PlanID, this.model.SalesLineID)]));
                this.inFrm.controls['fromDate'].markAsTouched()
                this.inFrm.controls['fromDate'].updateValueAndValidity()
                this.inFrm.controls['toDate'].setValidators(Validators.compose([Validators.required,
                  planDateInRange(this.collection, this.model.PlanID, this.model.SalesLineID),
                minDate(this.inFrm.controls['fromDate'].value)]));
                this.inFrm.controls['toDate'].markAsTouched()
                this.inFrm.controls['toDate'].updateValueAndValidity()
                break;
            case 'to':
                this.inFrm.controls['toDate'].setValidators(Validators.compose([Validators.required,
                  planDateInRange(this.collection, this.model.PlanID, this.model.SalesLineID),
                minDate(this.inFrm.controls['fromDate'].value)]));
                this.inFrm.controls['toDate'].markAsTouched()
                this.inFrm.controls['toDate'].updateValueAndValidity()
                break;
            default:
                break;
        }
    }
    lineChange(value) {
        if (!value) return;
        this.plnDrugs = this.drugs.filter(drg => drg.SalesLineID == value)
        this.constructPlanName()
        this.updateValidators('all')
        // this.plnDrugs.forEach(drg => { if (drg.SalesLineID == value) { drg.Checked = true } else { drg.Checked = false } })
    }
    constructPlanName() {
        this.model.PlanName = ''
        if (this.model.SalesLineID) {
            this.model.PlanName = this.lines.filter(ln => ln.SalesLineID == this.model.SalesLineID)[0].LineName
        }
        if (this.cnvFromDate) {
            this.model.PlanName += ', '
            this.model.PlanName += this.cnvFromDate
        }
    }

    ToggleAllSpecs(value) {
        this.plnSpecs.forEach(drg => drg.Checked = value)
    }
    ToggleAllDrugs(value) {
        this.plnDrugs.forEach(drg => drg.Checked = value)
    }
    ToggleAllImps(value) {
        this.plnImps.forEach(drg => drg.Checked = value)
    }

}
