import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { getIntrospectionQuery } from 'graphql';
import IDataAPI from './schemaType';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://countries.trevorblades.com/' }),
  endpoints: (builder) => ({
    getCountriesByContinent: builder.query({
      query: (x) => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query getCountriesByContinent($x: ID!) {
              continent(code: $x) {
                countries {
                  name
                }
              }
            }
          `,
          variables: { x },
        },
      }),
    }),
  }),
});

export default api;
