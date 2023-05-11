import React from 'react';
import {
  IntrospectionQuery,
  GraphQLFieldMap,
  GraphQLScalarType,
  buildClientSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInputFieldMap,
} from 'graphql';
import { Typography } from '@mui/material';
import { Maybe } from 'graphql/jsutils/Maybe';
import IDocCompoment from './DocComponent.type';
import DocComponent from './DocComponent';
import { IField } from '../../store/services/schemaType';

type DocComponentProps = {
  schemaJSON: IntrospectionQuery;
};

const convertToArray = (
  obj: GraphQLFieldMap<unknown, unknown> | GraphQLInputFieldMap
): [string, IField][] => {
  const json = JSON.parse(JSON.stringify(obj));
  return Object.entries(json);
};

function createSchema(data: IntrospectionQuery): GraphQLSchema {
  return buildClientSchema(data);
}

function DocExplorer({ schemaJSON }: DocComponentProps) {
  const schema = createSchema(schemaJSON);
  const rootComponent: IDocCompoment = {
    nameComponent: 'Docs',
    fieldsType: schema.getQueryType(),
    description:
      'A GraphQL schema provides a root type for each kind of operation.',
    type: 'root',
  };

  const [elementDoc, setElementDoc] =
    React.useState<IDocCompoment>(rootComponent);
  const [history, setHistory] = React.useState<Array<IDocCompoment>>([
    {
      nameComponent: '',
      type: null,
    },
  ]);

  const selectComponent = (
    type: string | null,
    name: string,
    typeComponent?: string,
    arg?: { nameArg: string; typeArg: string },
    historyFlag?: boolean
  ) => {
    if (!historyFlag) {
      history.push(elementDoc);
    }
    const newHistory = [...history];
    let desc: Maybe<string>;
    const replacedName = name.replace(/[[\]!]/g, '');
    switch (type) {
      case 'type': {
        let convertFields: [string, IField][] = [];
        if (schema.getType(replacedName) instanceof GraphQLScalarType) {
          desc = schema.getType(replacedName)?.description || '';
        } else {
          const t = schema.getType(replacedName);
          if (
            t instanceof GraphQLObjectType ||
            t instanceof GraphQLInputObjectType
          ) {
            convertFields = convertToArray(t.getFields());
          } else {
            convertFields = [];
          }
        }
        setElementDoc({
          nameComponent: replacedName || '',
          fields: convertFields,
          description: desc,
          type: 'type',
        });
        setHistory(newHistory);
        break;
      }
      case 'name': {
        setElementDoc({
          nameComponent: replacedName || '',
          arg,
          typeComponent,
          type: 'name',
        });
        setHistory(newHistory);
        break;
      }
      default:
        setElementDoc(rootComponent);
    }
  };

  const undo = (component: IDocCompoment) => {
    history.pop();
    const { type } = component;
    const name = component.nameComponent;
    const typeComp = component.typeComponent || '';
    const arg = component.arg ? component.arg : undefined;
    selectComponent(type, name, typeComp, arg, true);
  };

  return (
    <div>
      <Typography variant="h5" component="span">
        <div
          role="presentation"
          onClick={() => undo(history[history.length - 1])}
        >
          {history.length > 1 &&
            `< ${history[history.length - 1].nameComponent}`}
        </div>
      </Typography>
      <DocComponent component={elementDoc} callBack={selectComponent} />
    </div>
  );
}

export default DocExplorer;
