import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { Typography } from '@mui/material';
import CropFreeIcon from '@mui/icons-material/CropFree';
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

function TypeComponent({ name, description, fields, cb }: TypeCompProps) {
  return (
    <div>
      <div>
        <CropFreeIcon fontSize="inherit" />
        <Typography variant="body1" component="span" fontSize="14px">
          Fields
        </Typography>
      </div>
      <Typography className="mainName" variant="h5">
        {name}
      </Typography>
      <Typography variant="subtitle2">{description}</Typography>
      <div>
        {fields?.map((field, index) => {
          return (
            <div key={index}>
              <span
                role="presentation"
                className="fieldName cursor"
                onClick={() => {
                  let nameArg = '';
                  let typeArg = '';
                  if (fields[index][1].args?.length) {
                    nameArg = fields[index][1].args[0].name;
                    typeArg = fields[index][1].args[0].type;
                  }
                  cb('name', fields[index][0], fields[index][1].type, {
                    nameArg,
                    typeArg,
                  });
                }}
              >
                {field[0]}
              </span>
              {field[1].description && <div>{field[1].description}</div>}
              {field[1].args?.length ? (
                <span
                  role="presentation"
                  onClick={() => cb('type', field[1].args[0].type)}
                >
                  (<span className="argName">{field[1].args[0].name}</span>:
                  <span className="fieldType cursor">
                    {field[1].args[0].type}
                  </span>
                  ):
                </span>
              ) : (
                ': '
              )}
              <span
                role="presentation"
                className="fieldType cursor"
                onClick={() => {
                  cb('type', field[1].type);
                }}
              >
                {field[1].type}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TypeComponent;
