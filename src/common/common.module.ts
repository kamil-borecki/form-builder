import { NgModule, ModuleWithProviders } from '@angular/core';

import { KeysPipe } from './pipes';
import { FormService } from './services';

const PROVIDERS = [
  FormService
];

@NgModule({
  declarations: [KeysPipe],
  imports: [],
  exports: [KeysPipe]
})
export class CommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: PROVIDERS
    };
  }
}
