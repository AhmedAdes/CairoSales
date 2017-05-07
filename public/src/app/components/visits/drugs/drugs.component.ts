import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DrugService } from '../../../services';
import { Drugs, VisitDrugs, CurrentUser } from '../../../Models';

@Component({
    selector: 'visit-drugs',
    templateUrl: './visitdrugs.html'
})
export class VisitDrugsComponent implements OnInit {
    @Input() visDrugs: VisitDrugs[];
    @Input() drugmodel: VisitDrugs;
    @Input() currentUser: CurrentUser;
    @Output() drugChanged = new EventEmitter();
    drugs: Drugs[] = [];
    drgform: FormGroup;

    constructor(private srvDrg: DrugService, fb: FormBuilder) {
        this.drgform = fb.group({
            drugID: ['', Validators.required],
            comment: [''],
            gift: ['']
        })

        // this.drgform.controls['drugID'].valueChanges.subscribe(val => this.drugChange(val));
    }

    ngOnInit() {
        this.srvDrg.getPlanDrugs(this.currentUser.userID).subscribe(drg => {
            this.drugs = drg[0]
        });
    }

    // drugChange(value) {
    //     if (!value) { return }

    // }

    AddDrug(event) {
        event.preventDefault();
        if (this.visDrugs.findIndex(x => x.DrugID == this.drugmodel.DrugID) == -1) {
            this.drugmodel.DrugName = this.drugs.filter(obj => obj.DrugID == this.drugmodel.DrugID)[0].DrugName;
            this.visDrugs.push(this.drugmodel);
            this.drugmodel = new VisitDrugs();
            this.drugChanged.emit(this.visDrugs.length);
            this.drgform.reset();
        }
    }
}