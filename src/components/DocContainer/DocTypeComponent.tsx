import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { IField } from '../../store/services/schemaType';
type TypeCompProps = {
  name: string;
  description: Maybe<string>;
  fields: Array<[string, IField]> | undefined;
  cb: (
    type: string,
    name: string,
    typeComponent?: string,
    arg?: { nameArg: string; typeArg: string }
  ) => void;
};

const TypeComponent: React.FC<TypeCompProps> = ({
  name,
  description,
  fields,
  cb,
}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <div>
        {fields?.map((field, index) => {
          console.log(fields);
          return (
            <div key={index}>
              <span
                onClick={() => {
                  // console.log(fields[index][1].args);
                  let nameArg = '';
                  let typeArg = '';
                  if (fields[index][1].args.length) {
                    nameArg = fields[index][1].args[0].name;
                    typeArg = fields[index][1].args[0].type;
                  }
                  cb('name', fields[index][0], fields[index][1].type, {
                    nameArg: nameArg,
                    typeArg: typeArg,
                  });
                }}
              >
                {field[0]}
              </span>
              {field[1].description && <div>{field[1].description}</div>}
              {field[1].args.length ? (
                <span onClick={() => cb('type', field[1].args[0].type)}>
                  ({field[1].args[0].name}: {field[1].args[0].type})
                </span>
              ) : null}
              <span
                onClick={() => {
                  cb('type', field[1].type);
                }}
              >
                : {field[1].type}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TypeComponent;
