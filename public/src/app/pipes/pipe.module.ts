import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayFilterPipe, ArrayOrderByPipe } from './array.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [ArrayFilterPipe, ArrayOrderByPipe],
    exports: [ArrayFilterPipe, ArrayOrderByPipe]
})
export class CustomPipesModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: CustomPipesModule
        };
    }
}
