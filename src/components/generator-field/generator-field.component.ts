import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { merge } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { FieldType, FieldTypeLabels, ConditionTypeLabels, ConditionType, AllowedConditionsForType } from 'src/common/models';

@Component({
  selector: 'app-generator-field',
  templateUrl: './generator-field.component.html',
  styleUrls: ['./generator-field.component.sass']
})
export class GeneratorFieldComponent implements OnInit, OnDestroy {
  @Output() public remove: EventEmitter<number> = new EventEmitter<number>();
  @Input() public formGroup: FormGroup;
  @Input() public parentType: FieldType;
  public fieldTypeLabels = FieldTypeLabels;
  public fieldTypes = FieldType;
  public conditionTypeLabels = ConditionTypeLabels;
  public conditionTypes: ConditionType[];
  public conditionType = ConditionType;
  public showChildrens = true;
  public isInvalid = false;
  private valueChangesSub: Subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const conditionControl = this.formGroup.get('condition');
    if (conditionControl) {
      this.conditionTypes = AllowedConditionsForType[this.parentType];
    }
    this.toggleChildrens();
  }
  addNew() {
    let defaultVal = '';
    if (this.formGroup.get('type').value === FieldType.Radio) {
      defaultVal = 'yes';
    }
    (<FormArray>this.formGroup.get('childrens')).push(this.fb.group(
      {
        type: [FieldType.Text],
        question: ['', Validators.required],
        condition: this.fb.group({
          type: [AllowedConditionsForType[this.formGroup.get('type').value][0]],
          value: [defaultVal]
        }),
        childrens: this.fb.array([]),
      }
    ));
    this.toggleType();
  }

  delete() {
    this.remove.emit();
  }

  onDelete(id: number) {
    (<FormArray>this.formGroup.controls.childrens).removeAt(id);
    this.toggleType();
  }

  toggleChildrensVisible() {
    this.showChildrens = !this.showChildrens;
  }

  ngOnDestroy() {
    this.valueChangesSub.unsubscribe();
  }

  private toggleType() {
    const typeControl = this.formGroup.get('type');
    if (this.formGroup.get('childrens').value.length > 0) {
      typeControl.disable();
    } else {
      typeControl.enable();
    }
  }

  private toggleChildrens() {
    const condition = this.formGroup.get('condition');
    const question = this.formGroup.get('question');
    let valChanges$: any;
    if (condition) {
      valChanges$ = question.valueChanges.pipe(merge(condition.valueChanges));
    } else {
      valChanges$ = question.valueChanges;
    }
    this.valueChangesSub = valChanges$.subscribe(() => {
      this.isInvalid = question.invalid || (condition || <any>{}).invalid;
      const childrens = this.formGroup.get('childrens');
      if (this.isInvalid) {
        childrens.disable();
      } else {
        childrens.enable();
      }
    });
  }
}
