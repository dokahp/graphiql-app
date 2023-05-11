import React from 'react';
import { Typography } from '@mui/material';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

type NameCompProps = {
  name: string;
  typeComponent?: string;
  arg?: { nameArg: string; typeArg: string };
  cb: (
    type: string,
    name: string,
    typeComponent?: string,
    arg?: { nameArg: string; typeArg: string }
  ) => void;
};

function NameComponent({ name, typeComponent, arg, cb }: NameCompProps) {
  const handleFieldTypeClick = () => {
    if (typeComponent) {
      return cb('type', typeComponent);
    }
    return cb('type', '');
  };

  return (
    <div>
      <Typography variant="h5">{name}</Typography>
      <div>
        <FilterTiltShiftIcon fontSize="inherit" />
        <Typography variant="body1" component="span" fontSize="14px">
          Type
        </Typography>
      </div>

      <div
        className="fieldType"
        role="presentation"
        onClick={handleFieldTypeClick}
      >
        {typeComponent}
      </div>
      {arg?.nameArg ? (
        <div>
          <div>
            <DonutLargeIcon fontSize="inherit" />
            <Typography variant="body1" component="span" fontSize="14px">
              Argument
            </Typography>
          </div>
          <div>
            {arg?.nameArg}:
            <span
              role="presentation"
              className="fieldType"
              onClick={handleFieldTypeClick}
            >
              {arg?.typeArg}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

NameComponent.defaultProps = {
  typeComponent: '',
  arg: undefined,
};

export default NameComponent;
