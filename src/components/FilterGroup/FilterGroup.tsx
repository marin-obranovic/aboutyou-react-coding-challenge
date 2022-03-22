import React, { FC } from 'react';
import styled from 'styled-components';
import { EventFunction, FilterGroup } from '../../types';
import FilterSelect from '../FilterSelect/FilterSelect';


interface Props {
  filters: FilterGroup[];
  addFilter: EventFunction;
  removeFilter: EventFunction;
}

const FilterGroup: FC<Props> = ({ filters, addFilter, removeFilter }) => (
  <Wrapper data-testid="Filters">
    {filters.map((filter) => {
      return (
        <Content key={filter.name}>
          <FilterSelect
            filter={filter}
            key={filter.name}
            addFilter={addFilter}
            removeFilter={removeFilter}
          />
        </Content>
      );
    })}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  padding: 1em;
`;

export default FilterGroup;
