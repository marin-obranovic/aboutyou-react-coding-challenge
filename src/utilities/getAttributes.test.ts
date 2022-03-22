import { getAttributes } from './getAttributes';

const expectedObjectKey = '1';
const expectedObject = {
  [expectedObjectKey]: [1, 2, 3],
};

describe('getAttributes', () => {
  describe('when passed expected object', () => {
    let output;

    beforeEach(() => {
      output = getAttributes(expectedObject);
    });

    it('should return array with attribute filters', () => {
      expect(output).toHaveLength(Object.keys(expectedObject).length);
      expect(output[0]).toHaveProperty('type');
      expect(output[0].type).toBe('attributes');
      expect(output[0].id).toBe(parseInt(expectedObjectKey, 10));
      expect(output[0].values).toStrictEqual(expectedObject[expectedObjectKey]);
    });
  });

  describe('when passed empty object', () => {
    let output;

    beforeEach(() => {
      output = getAttributes({});
    });

    it('should return empty array', () => {
      expect(output).toHaveLength(0);
    });
  });
});
