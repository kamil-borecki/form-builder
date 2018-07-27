
export enum ConditionType {
  Equals = 'Equals',
  GreaterThan = 'GreaterThan',
  LessThan = 'LessThan ',
}

export const ConditionTypeLabels = {
  [ConditionType.Equals]: 'Equals',
  [ConditionType.GreaterThan]: 'Greater than',
  [ConditionType.LessThan]: 'Less than ',
};
