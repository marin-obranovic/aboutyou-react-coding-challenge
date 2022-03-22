import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import FilterItem from './FilterItem';

describe('FilterItem', () => {
  let output;
  const addMock = jest.fn();
  const removeMock = jest.fn();
  const testFilter = {
    name: 'test filter',
    id: 1,
    productCount: 1234,
  };

  beforeEach(() => {
    const { getByTestId } = render(
      <FilterItem
        filter={testFilter}
        addFilter={addMock}
        removeFilter={removeMock}
        groupId={1}
      />,
    );
    output = getByTestId('filter-item-wrapper');
  });

  it('it should exist on page', () => {
    expect(output).toBeTruthy();
  });

  it("should trigger 'addFilter' function on first click", () => {
    fireEvent.click(output);
    expect(addMock).toHaveBeenCalled();
  });

  it("should trigger 'removeFilter' function on second click", () => {
    fireEvent.click(output);
    fireEvent.click(output);
    expect(removeMock).toHaveBeenCalled();
  });
});
