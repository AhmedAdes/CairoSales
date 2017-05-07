import { NgModule } from '@angular/core';
import { PlanService } from '../../services'
import { DateSliderComponent, PlanSliderComponent } from './';

@NgModule({
    imports: [],
    exports: [DateSliderComponent, PlanSliderComponent],
    declarations: [DateSliderComponent, PlanSliderComponent],
    providers: [PlanService],
})
export class HelperModule { }
