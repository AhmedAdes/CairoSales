import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdRadioModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdRadioModule],
  exports: [MdButtonModule, MdCheckboxModule, MdRadioModule],
})
export class CustomMaterialModule { }
