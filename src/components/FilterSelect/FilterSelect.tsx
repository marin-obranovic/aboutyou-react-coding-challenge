import React, { FC } from 'react';
import styled from 'styled-components';
import { FilterGroup } from '../../types';
import FilterItem from '../FilterItem/FilterItem';

interface Props {
  filter: FilterGroup;
  addFilter: (id: number, value: number) => void;
  removeFilter: (id: number, value: number) => void;
}

const FilterSelect: FC<Props> = ({
  filter: { name, values, id },
  addFilter,
  removeFilter,
}) => {
  return (
    <Wrapper data-testid="Filters">
      <Title>{name}</Title>
      <Contant>
        <FilterContainer>
          {values.map((filter) => {
            return (
              <FilterItem
                filter={filter}
                key={filter.name}
                addFilter={addFilter}
                removeFilter={removeFilter}
                groupId={id}
              />
            );
          })}
        </FilterContainer>
      </Contant>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 800;
`;

const Contant = styled.div`
  padding: 12px;
`;

export default FilterSelect;
