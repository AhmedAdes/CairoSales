import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {
  PromoToolsService,
  DrugService,
  GiftService,
  AuthenticationService
} from '../../../services';
import { PromoTools, Gifts, Drugs, CurrentUser } from '../../../Models';
import { alreadyExist } from '../../../pipes/validators';
import * as hf from '../../helpers/helper.functions';

@Component({
  selector: 'app-promotools',
  templateUrl: './promo.component.html'
})
export class PromoToolsComponent implements OnInit {
  inFrm: FormGroup;
  currentUser: CurrentUser = this.auth.getUser();
  collection: PromoTools[] = [];
  giftList: Gifts[] = [];
  drugList: Drugs[] = [];
  srchObj: PromoTools = new PromoTools();
  model: PromoTools;
  showTable: boolean;
  Formstate: string;
  headerText: string;
  errorMessage: string;
  orderbyString = '';
  orderbyClass = 'glyphicon glyphicon-sort';

  constructor(
    private srvPromo: PromoToolsService,
    private srvDrug: DrugService,
    private srvGift: GiftService,
    private auth: AuthenticationService,
    fb: FormBuilder
  ) {
    this.inFrm = fb.group({
      ToolName: [null, Validators.required],
      GiftName: [null, Validators.required],
      DrugName: [null]
    });
  }

  ngOnInit() {
    this.srvPromo.getPromoTools().subscribe( cols => {
        this.collection = cols;
        this.srvDrug.getDrug().subscribe( drg => {
            this.drugList = drg;
            this.srvGift.getGift().subscribe( gft => {
                this.giftList = gft;
                this.TableBack();
              }, err => hf.handleError(err));
          }, err => hf.handleError(err));
      }, err => hf.handleError(err));
  }

  CreateNew() {
    this.model = new PromoTools();
    this.inFrm.controls['ToolName'].setValidators(
      Validators.compose([
        Validators.required,
        alreadyExist(this.collection, 'ToolName', '')
      ])
    );
    this.showTable = false;
    this.Formstate = 'Create';
    this.headerText = 'Create New Promo Tool';
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
    this.srvPromo.getPromoTools(id).subscribe(ret => {
      this.model = ret[0];
      switch (state) {
        case 'Edit':
          this.inFrm.controls['ToolName'].setValidators(
            Validators.compose([ Validators.required,
              alreadyExist( this.collection, 'ToolName', this.inFrm.controls['ToolName'].value )
            ])
          );
          break;
        case 'Delete':
          this.inFrm.controls['ToolName'].setValidators( Validators.compose([Validators.required]) );
          break;
        default:
          break;
      }
      this.showTable = false;
      this.Formstate = state;
      this.headerText = state == 'Details' ? 'Promo Tool ' + state : state + ' Promo Tool';
    }, err => hf.handleError(err));
  }
  TableBack() {
    this.showTable = true;
    this.Formstate = null;
    this.inFrm.reset();
    this.headerText = 'Promotional Tools';
    this.errorMessage = null;
  }
  HandleForm(event) {
    event.preventDefault();
    switch (this.Formstate) {
      case 'Create':
        this.srvPromo.InsertPromoTools(this.model).subscribe(ret => {
          if (ret.error) {
            hf.handleError(ret.error)
          } else if (ret.affected > 0) {
            this.ngOnInit();
          }
        }, err => hf.handleError(err));
        break;
      case 'Edit':
        this.srvPromo
          .UpdatePromoTools(this.model.ToolID, this.model).subscribe(ret => {
            if (ret.error) {
              hf.handleError(ret.error)
            } else if (ret.affected > 0) {
              this.ngOnInit();
            }
          }, err => hf.handleError(err));
        break;
      case 'Delete':
        this.srvPromo.DeletePromoTools(this.model.ToolID).subscribe(ret => {
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
    if (this.orderbyString.indexOf(column) === -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes';
      this.orderbyString =  '+' + column;
    } else if (this.orderbyString.indexOf('-' + column) === -1) {
      this.orderbyClass = 'glyphicon glyphicon-sort-by-attributes-alt';
      this.orderbyString =  '-' + column;
    } else {
      this.orderbyClass = 'glyphicon glyphicon-sort';
      this.orderbyString =  '';
    }
  }
  ConcatToolName() {
    this.model.ToolName =
      (!this.model.GiftName ? '' : this.model.GiftName) +
      ' ' +
      (!this.model.DrugName ? '' : this.model.DrugName);
    this.inFrm.controls['ToolName'].markAsTouched();
    // this.inFrm.controls['ToolName'].value = this.model.ToolName
    // if (this.collection.findIndex(p => p.ToolName == this.model.ToolName) >= 0) {
    //     this.inFrm.controls['ToolName'].setErrors({ 'alreadyexist': true });
    // } else { }
  }
  onGiftChange(obj) {
    if (obj.target.value) {
      const giftID = +obj.target.value.split(':')[1].trim();
      const giftName = this.giftList.filter(gft => gft.GiftID === giftID)[0].GiftName;
      this.model.GiftName = giftName;
      this.ConcatToolName();
    }
  }
  onDrugChange(obj) {
    if (obj.target.value) {
      const drugID = +obj.target.value.split(':')[1].trim();
      const drugName = this.drugList.filter(gft => gft.DrugID === drugID)[0].DrugName;
      this.model.DrugName = drugName;
      this.ConcatToolName();
    }
  }
}
