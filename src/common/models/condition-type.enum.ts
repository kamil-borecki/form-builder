
export enum ConditionType {
  Equals = 'equals',
  GreaterThan = 'greaterThan',
  LessThan = 'lessThan ',
}

export const ConditionTypeLabels = {
  [ConditionType.Equals]: 'Equals',
  [ConditionType.GreaterThan]: 'Greater than',
  [ConditionType.LessThan]: 'Less than ',
};
