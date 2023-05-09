import { GraphQLObjectType } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
type RootCompProps = {
  name: string;
  description: Maybe<string>;
  fieldsType: Maybe<GraphQLObjectType<any, any>>;
  cb: (type: string, name: string) => void;
};

const RootComponent: React.FC<RootCompProps> = ({
  name,
  description,
  fieldsType,
  cb,
}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <div onClick={() => cb('type', fieldsType?.name ? fieldsType?.name : '')}>
        query: {fieldsType?.name}
      </div>
    </div>
  );
};

export default RootComponent;
