import React from 'react';
import IDocCompoment from './DocComponent.type';
import DocRootComponent from './DocRootComponent';
import DocTypeComponent from './DocTypeComponent';
import DocNameComponent from './DocNameComponent';

interface DocComponentProps {
  component: IDocCompoment;
  callBack: (
    type: string,
    name: string,
    typeComponent?: string,
    arg?: { nameArg: string; typeArg: string }
  ) => void;
}

function DocComponent({ component, callBack }: DocComponentProps) {
  if (component.type === 'root') {
    return (
      <DocRootComponent
        name={component.nameComponent}
        description={component.description}
        fieldsType={component.fieldsType}
        cb={callBack}
      />
    );
  }
  if (component.type === 'type') {
    return (
      <DocTypeComponent
        name={component.nameComponent}
        description={component.description}
        fields={component.fields}
        cb={callBack}
      />
    );
  }
  if (component.type === 'name') {
    return (
      <DocNameComponent
        name={component.nameComponent}
        arg={component.arg}
        typeComponent={component.typeComponent}
        cb={callBack}
      />
    );
  }
  return <div>No</div>;
}

export default DocComponent;
