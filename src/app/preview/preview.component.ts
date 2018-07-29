import { Component, OnInit } from '@angular/core';

import { FormService } from 'src/common/services';
import { Field } from 'src/common/models';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html'
})
export class PreviewComponent implements OnInit {
  public fields: Field[] = [];

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.fields = this.formService.get();
  }
}
