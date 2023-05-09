import React from 'react';
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

const NameComponent: React.FC<NameCompProps> = ({
  name,
  typeComponent,
  arg,
  cb,
}) => {
  return (
    <div>
      <div>{name}</div>
      <div>Type</div>
      <div onClick={() => cb('type', typeComponent ? typeComponent : '')}>
        {typeComponent}
      </div>
      {arg?.nameArg ? (
        <div>
          <div>Arguments</div>
          <div>
            {arg?.nameArg}:
            <span onClick={() => cb('type', arg?.typeArg ? arg?.typeArg : '')}>
              {arg?.typeArg}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NameComponent;
