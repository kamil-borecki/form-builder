import { Component, OnInit } from '@angular/core';
import { Field, FieldType } from 'src/common/models';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      fields: this.fb.array([])
    });
  }

  addNew() {
    (<FormArray>this.form.get('fields')).push(this.fb.group(
      {
        type: [FieldType.Text],
        question: [''],
        childrens: this.fb.array([]),
      }
    ));
  }
  onSubmit(val: FormGroup) {
    console.log(val.value);
  }
  onDelete(id: number) {
    (<FormArray>this.form.get('fields')).removeAt(id);
  }
}
