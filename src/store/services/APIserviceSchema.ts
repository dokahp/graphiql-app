import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { getIntrospectionQuery } from 'graphql';
import IDataAPI from './schemaType';

const query = getIntrospectionQuery();
const schemaAPI = createApi({
  reducerPath: 'schemaAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://countries.trevorblades.com/',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
    }),
  }),
  endpoints: (build) => ({
    fetchAllData: build.query<IDataAPI, void>({
      query: () => ' ',
    }),
  }),
});

export default schemaAPI;
