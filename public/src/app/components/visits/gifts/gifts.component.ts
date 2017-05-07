import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PromoToolsService, GiftService } from '../../../services';
import { Gifts, PromoTools, VisitGifts, VisitDrugs } from '../../../Models';
import { emailValidator } from '../../../Pipes/validators';

@Component({
    selector: 'visit-gifts',
    templateUrl: './visitgifts.html'
})
export class VisitGiftsComponent implements OnInit, OnChanges {
    @Input() visGifts: VisitGifts[];
    @Input() visDrugs: VisitDrugs[];
    @Input() giftmodel: VisitGifts;
    @Input() drgsChanged: number;
    gifts: Gifts[] = [];
    promoTools: PromoTools[] = [];
    dispTools: PromoTools[] = [];
    gftform: FormGroup;

    constructor(private srvGft: GiftService, private srvPromo: PromoToolsService, fb: FormBuilder) {
        this.gftform = fb.group({
            giftID: ['', Validators.required],
            toolID: ['', Validators.required],
            qty: ['0', [Validators.required]]
        })

        // this.drgform.controls['drugID'].valueChanges.subscribe(val => this.drugChange(val));
    }

    ngOnInit() {
        this.srvGft.getGift().subscribe(drg => this.gifts = drg);
        this.srvPromo.getPromoTools().subscribe(prm => this.promoTools = prm);
    }

    // drugChange(value) {
    //     if (!value) { return }

    // }

    AddGift(event) {
        event.preventDefault();
        if (this.visGifts.findIndex(x => x.ToolID == this.giftmodel.ToolID) == -1) {
            this.giftmodel.GiftName = this.gifts.filter(obj => obj.GiftID == this.giftmodel.GiftID)[0].GiftName;
            this.giftmodel.ToolName = this.promoTools.filter(obj => obj.ToolID == this.giftmodel.ToolID)[0].ToolName;
            this.visGifts.push(this.giftmodel);
            this.giftmodel = new VisitGifts();
            this.gftform.reset();
        }
    }

    ongiftChange(obj) {
        if (obj.target.value) {
            var giftId = obj.target.value.split(':')[1].trim();
            this.dispTools = this.promoTools.filter(p => p.GiftID == giftId)
            if (this.visDrugs.length > 0) {
                this.dispTools = this.dispTools.filter(d => this.visDrugs.findIndex(g => g.DrugID == d.DrugID) >= 0)
            }
        }
    }

    ngOnChanges(changes: any) {
        if (this.drgsChanged) {
            this.dispTools = this.promoTools.filter(p => p.GiftID == this.giftmodel.GiftID)
            if (this.visDrugs.length > 0) {
                this.dispTools = this.dispTools.filter(d => this.visDrugs.findIndex(g => g.DrugID == d.DrugID) >= 0)
            }
        }
    }
}