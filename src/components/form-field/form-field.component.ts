import { Component, Input } from '@angular/core';

import { Field, ConditionType, FieldType } from 'src/common/models';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html'
})
export class FormFieldComponent {
  @Input() field: Field;
  public value;
  public fieldTypes = FieldType;
  
  constructor() { }

  getChildrens(value): Field[] {
    let fields: Field[] = [];
    fields = this.field.childrens.filter((field: Field) => {
      switch (field.condition.type) {
        case ConditionType.Equals:
          if (field.condition.value === '') {
            return value;
          }
          return '' + value === '' + field.condition.value;
        case ConditionType.GreaterThan:
          return value > field.condition.value;
        case ConditionType.LessThan:
          return value < field.condition.value;
      }
    });
    return fields;
  }
}
