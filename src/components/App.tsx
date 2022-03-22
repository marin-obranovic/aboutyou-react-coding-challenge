import React, { useState } from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import ProductStream from './ProductStream';
import { useProductLoader } from '../api/useProductLoader';
import { useFilters } from '../api/useFilters';
import FilterGroup from './FilterGroup/FilterGroup';

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const products = useProductLoader(selectedFilters);
  const filters = useFilters(selectedFilters);

  const addSelectedFilter = (id: number, value: number) => {
    setSelectedFilters((filters) => ({
      ...filters,
      [id]: [...(filters[id] || []), value],
    }));
  };

  const removeSelectedFilter = (id: number, value: number) => {
    setSelectedFilters((filters) => {
      filters[id] = filters[id].filter(
        (existingValue) => existingValue !== value,
      );
      return { ...filters };
    });
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <FilterGroup
        filters={filters}
        addFilter={addSelectedFilter}
        removeFilter={removeSelectedFilter}
      />
      <Layout>
        <ProductStream products={products} />
      </Layout>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Layout = styled.article`
  padding: 0 20px;
`;

export default App;
