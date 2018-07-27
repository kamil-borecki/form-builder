import { FieldType } from './field-type.enum';
import { ConditionType } from './condition-type.enum';

export const AllowedConditionsForType: {
  [FieldType.Number]: ConditionType[],
  [FieldType.Text]: ConditionType[],
  [FieldType.Radio]: ConditionType[]
} = {
  [FieldType.Number]: [ConditionType.Equals, ConditionType.GreaterThan, ConditionType.LessThan],
  [FieldType.Text]: [ConditionType.Equals],
  [FieldType.Radio]: [ConditionType.Equals],
};
