import { GraphQLObjectType } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { Typography } from '@mui/material';
import CropIcon from '@mui/icons-material/Crop';

type RootCompProps = {
  name: string;
  description: Maybe<string>;
  fieldsType: Maybe<GraphQLObjectType<any, any>>;
  cb: (type: string, name: string) => void;
};

function RootComponent({ name, description, fieldsType, cb }: RootCompProps) {
  return (
    <div>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="subtitle1">{description}</Typography>
      <div>
        <CropIcon fontSize="inherit" />
        <Typography variant="body1" component="span" fontSize="14px">
          Root type
        </Typography>
      </div>
      <div
        role="presentation"
        onClick={() => cb('type', fieldsType?.name ? fieldsType?.name : '')}
      >
        <span className="fieldName">query:</span>{' '}
        <span className="fieldType">{fieldsType?.name}</span>
      </div>
    </div>
  );
}

export default RootComponent;
