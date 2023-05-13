import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import IrequestType from './requsetType';

const fetchAPI = createApi({
  reducerPath: 'fetchAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://countries.trevorblades.com/' }),
  endpoints: (builder) => ({
    getCountriesByContinent: builder.query<any, IrequestType>({
      query: (arg) => ({
        url: '',
        method: 'POST',
        body: {
          operationName: 'test',
          query: arg.query,
          variables: arg.variable,
        },
      }),
    }),
  }),
});

export default fetchAPI;
