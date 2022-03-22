import { AttributeWithValuesFilter } from "@aboutyou/backbone/types/AttributeOrAttributeValueFilter";

export const getAttributes = (values): Array<AttributeWithValuesFilter> => {
  return Object.entries(values).map(([key, value]): AttributeWithValuesFilter => ({
    type: 'attributes',
    id: parseInt(key, 10),
    values: value as Array<number>,
  }));
};
