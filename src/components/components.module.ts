import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule as NgCommonModule } from '@angular/common';
import { CommonModule } from 'src/common';
import { FieldComponent } from './field';
import { DisableControlDirective } from './disableControl.directive';

const DECLARATIONS_EXPORTS = [
  FieldComponent,
  DisableControlDirective
];

const PROVIDERS = [
];

@NgModule({
   declarations: [
      DECLARATIONS_EXPORTS
   ],
   imports: [
      CommonModule,
      NgCommonModule,
      FormsModule,
      ReactiveFormsModule,
   ],
   exports: [
      DECLARATIONS_EXPORTS
   ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: PROVIDERS
    };
  }
}
