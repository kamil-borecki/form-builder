import { Component } from '@angular/core';
import { routerTransition } from 'src/common/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ routerTransition ]
})
export class AppComponent {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
