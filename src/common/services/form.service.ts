import { Injectable } from '@angular/core';
import { Field } from 'src/common/models';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  save(form: Field[]) {
    localStorage.setItem('formJSON', JSON.stringify(form));
  }

  get(): Field[] {
    return JSON.parse(localStorage.getItem('formJSON')) || [];
  }
}
