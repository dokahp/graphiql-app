import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import IrequestType from './reqType';

const requestAPI = createApi({
  reducerPath: 'requestAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://countries.trevorblades.com/' }),
  endpoints: (builder) => ({
    getCountriesByContinent: builder.query<string, IrequestType>({
      query: (arg) => {
        if (arg.variable) {
          return {
            url: '',
            method: 'POST',
            body: {
              operationName: arg.operationName,
              query: arg.query,
              variables: arg.variable,
            },
          };
        }
        return {
          url: '',
          method: 'POST',
          body: {
            operationName: arg.operationName,
            query: arg.query,
          },
        };
      },
    }),
  }),
});

export default requestAPI;
