import { Component, HostBinding } from '@angular/core';

import { fadeInTransition } from 'src/common/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-fade-in]',
  template: `<ng-content></ng-content>`,
  animations: [
    fadeInTransition
  ]
})
export class FadeInComponent {
  @HostBinding('@show') trigger;

  constructor() { }
}
