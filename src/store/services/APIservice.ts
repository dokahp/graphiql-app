import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import IDataAPI from './schemaType';
import schemaType from './schemaType';
import { IntrospectionQuery, getIntrospectionQuery } from 'graphql';
const query = getIntrospectionQuery();
export const dataAPI = createApi({
  reducerPath: 'dataAPI',
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
