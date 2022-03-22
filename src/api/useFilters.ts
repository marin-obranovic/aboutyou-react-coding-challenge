import { useCallback } from 'react';
import { BapiClient } from '@aboutyou/backbone';
import { useAsyncLoader } from './useAsyncLoader';
import { getAttributes } from '../utilities/getAttributes';

const SHOP_ID = 605;
const PORT = process.env.PORT || 9459;
const HOST = `http://0.0.0.0:${PORT}/v1/`;

const prepareFilters = (data) =>
  data.filter(({ slug }) => slug === 'color' || slug === 'pattern');

export const useFilters = (selectedFilters) => {
  const bapi = new BapiClient({
    host: HOST,
    shopId: SHOP_ID,
  });

  const filters = useAsyncLoader(
    useCallback(() => {
      const returnedFilters = bapi.filters
        .get({
          where: {
            categoryId: 20236,
            attributes: getAttributes(selectedFilters),
          },
          with: ['values'],
        })
        .then(prepareFilters);
      return returnedFilters;
    }, [selectedFilters]),
  );

  return Array.isArray(filters) ? filters : [];
};
