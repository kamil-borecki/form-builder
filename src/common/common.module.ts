import { NgModule, ModuleWithProviders } from '@angular/core';
import { KeysPipe } from './pipes';

const PROVIDERS = [
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
