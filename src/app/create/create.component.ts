import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { FieldType, Field } from 'src/common/models';
import { FormService } from 'src/common/services';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private formSub: Subscription;

  constructor(private fb: FormBuilder, private formService: FormService) { }

  ngOnInit() {
    this.initForm();
  }

  addNew() {
    (<FormArray>this.form.get('fields')).push(this.fb.group(
      {
        type: [FieldType.Text],
        question: ['', Validators.required],
        childrens: this.fb.array([]),
      }
    ));
  }

  onDelete(id: number) {
    (<FormArray>this.form.get('fields')).removeAt(id);
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }

  private initForm() {
    const fields = this.formService.get();
    this.form = this.fb.group({
      fields: this.recreateForm(fields)
    });
    this.formSub = this.form.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      if (data.fields && this.form.valid) {
        this.formService.save(this.form.getRawValue().fields);
      }
    });
  }

  private recreateForm(fields: Field[]): FormArray {
    const groups = fields.map((field: Field) => {
      const obj: any = {
        type: [field.type],
        question: [field.question, Validators.required],
        childrens: this.fb.array([]),
      };
      if (field.condition) {
        obj.condition = this.fb.group({
          type: [field.condition.type],
          value: [field.condition.value, Validators.required]
        });
      }
      if (field.childrens) {
        obj.childrens = this.recreateForm(field.childrens);
      }
      return this.fb.group(obj);
    });
    return this.fb.array(groups);
  }
}
