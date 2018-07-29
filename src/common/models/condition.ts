import { ConditionType } from './condition-type.enum';

export interface Condition {
  type: ConditionType;
  value: string | boolean | number;
}
