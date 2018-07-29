import { Condition } from './condition';
import { FieldType } from './field-type.enum';

export interface Field {
  type: FieldType;
  question: string;
  condition?: Condition;
  childrens?: Field[];
}



