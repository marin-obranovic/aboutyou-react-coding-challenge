import { AttributesFilterValue } from '@aboutyou/backbone/endpoints/filters/filters';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { EventFunction } from '../../types';

interface Props {
  filter: AttributesFilterValue;
  addFilter: EventFunction;
  removeFilter: EventFunction;
  groupId: number;
}

const FilterItem: FC<Props> = ({
  filter: { name, id },
  groupId,
  addFilter,
  removeFilter,
}) => {
  const [selected, setSelected] = useState(false);

  const changeSelected = () => {
    const updatedValue = !selected;
    setSelected(updatedValue);
    if (updatedValue) {
      addFilter(groupId, id);
    } else {
      removeFilter(groupId, id);
    }
  };

  return (
    <Wrapper onClick={changeSelected} data-testid="filter-item-wrapper">
      <FilterBox isSelected={selected}></FilterBox>
      <label>{name}</label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

interface FilterBoxProps {
  readonly isSelected: boolean;
}

const FilterBox = styled.div<FilterBoxProps>`
  width: 1em;
  height: 1em;
  border: 1px solid black;
  background-color: ${({ isSelected }) => (isSelected ? 'green' : 'white')};
`;

export default FilterItem;
