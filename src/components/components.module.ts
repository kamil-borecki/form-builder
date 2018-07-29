import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule as NgCommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from 'src/common';
import { GeneratorFieldComponent } from './generator-field';
import { FormFieldComponent } from './form-field';
import { FadeInComponent } from './fade-in';

const DECLARATIONS_EXPORTS = [
  GeneratorFieldComponent,
  FormFieldComponent,
  FadeInComponent
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
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule
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
