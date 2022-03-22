import { AttributesFilterItemWithValues } from '@aboutyou/backbone/endpoints/filters/filters';

export interface FilterGroup extends AttributesFilterItemWithValues {
  selected: Array<string | number>;
}
