import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FieldType, FieldTypeLabels, ConditionTypeLabels, ConditionType, AllowedConditionsForType } from 'src/common/models';

@Component({
  selector: 'app-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.sass'],
})
export class FieldComponent implements OnInit {
  @Output() public remove: EventEmitter<number> = new EventEmitter<number>();

  @Input() public formGroup: FormGroup;
  @Input() public parentType: FieldType;
  public fieldTypeLabels = FieldTypeLabels;
  public fieldTypes = FieldType;
  public conditionTypeLabels = ConditionTypeLabels;
  public conditionTypes: ConditionType[];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.formGroup);
    const conditionControl = this.formGroup.get('condition');
    if (conditionControl) {
      this.conditionTypes = AllowedConditionsForType[this.parentType];
    }

  }
  addNew() {
    setTimeout(() => {
      (<FormArray>this.formGroup.controls.childrens).push(this.fb.group(
        {
          type: [FieldType.Text],
          question: [''],
          condition: this.fb.group({
            type: [AllowedConditionsForType[this.formGroup.get('type').value][0]],
            value: []
          }),
          childrens: this.fb.array([]),
        }
      ));
    });
  }
  delete() {
    this.remove.emit();
  }
  onDelete(id: number) {
    (<FormArray>this.formGroup.controls.childrens).removeAt(id);
  }

}
