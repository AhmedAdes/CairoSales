import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdRadioModule, MdProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdRadioModule, MdProgressSpinnerModule],
  exports: [MdButtonModule, MdCheckboxModule, MdRadioModule, MdProgressSpinnerModule],
})
export class CustomMaterialModule { }
