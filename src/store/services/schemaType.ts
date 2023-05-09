// export default interface IDataAPI {
//   data: { __schema: ISchema };
// }

import { IntrospectionQuery } from 'graphql';

export default interface IDataAPI {
  data: IntrospectionQuery;
}

export interface ISchema {
  mutationType: null;
  queryType: { name: string; __typename: string };
  subscriptionType: null;
  types: Array<IType>;
  __typename: string;
}

export interface IType {
  name: string;
  description: null | string;
  fields: Array<IField>;
  __typename: string;
}

export interface IField {
  args: Array<IArg>;
  name: string;
  deprecationReason: null;
  description: string | null;
  extensions: {};
  type: string;
}

export interface IArg {
  description: null | string;
  extensions: {};
  name: string;
  type: string;
}
