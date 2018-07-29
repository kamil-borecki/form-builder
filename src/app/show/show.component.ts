import { Component, OnInit } from '@angular/core';

import { Field } from 'src/common/models';
import { FormService } from 'src/common/services';

@Component({
  selector: 'app-show',
  template: `<div class="box">
                {{form | json}}
            </div>`,
})
export class ShowComponent implements OnInit {
  public form: Field[];
  constructor(private formService: FormService) { }

  ngOnInit() {
    this.form = this.formService.get();
  }
}
