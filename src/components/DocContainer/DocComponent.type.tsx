import { GraphQLObjectType } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { IField } from '../../store/services/schemaType';

export default interface IDocCompoment {
  nameComponent: string;
  typeComponent?: string;
  fieldsType?: Maybe<GraphQLObjectType<unknown, unknown>>;
  fields?: Array<[string, IField]> | undefined;
  description?: Maybe<string>;
  arg?: { nameArg: string; typeArg: string };
  type: 'root' | 'type' | 'name' | 'scalar' | null;
}
