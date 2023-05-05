export default interface IDataAPI {
  data: { __schema: ISchema };
}

interface ISchema {
  mutationType: null;
  queryType: { name: string; __typename: string };
  subscriptionType: null;
  types: Array<IType>;
  __typename: string;
}

interface IType {
  name: string;
  description: null | string;
  fields: Array<IField> | null;
  __typename: string;
}

interface IField {
  name: string;
  description: string | null;
  args: Array<IArg> | null;
  __typename: string;
}

interface IArg {
  description: null | string;
  name: string;
  __typename: string;
}
