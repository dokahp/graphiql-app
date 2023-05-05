import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import schemaType from './schemaType';
export const dataAPI = createApi({
  reducerPath: 'dataAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://countries.trevorblades.com/',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query {
        __schema {
          queryType {
            name
          }
          mutationType {
            name
          }
          subscriptionType {
            name
          }
          types {
            name
            description
            fields {
              name
              description
              args {
                name
                description
              }
            }
          }
        }
      }
    `,
    }),
  }),
  endpoints: (build) => ({
    fetchAllData: build.query<schemaType, void>({
      query: () => ' ',
    }),
  }),
});
