import React from 'react';
import IDocCompoment from './DocComponent.type';
import DocRootComponent from './DocRootComponent';
import DocTypeComponent from './DocTypeComponent';
import DocNameComponent from './DocNameComponent';

const DocComponent: React.FC<{
  component: IDocCompoment;
  callBack: (
    type: string,
    name: string,
    typeComponent?: string,
    arg?: { nameArg: string; typeArg: string }
  ) => void;
}> = ({ component, callBack }) => {
  return component.type === 'root' ? (
    <DocRootComponent
      name={component.nameComponent}
      description={component.description}
      fieldsType={component.fieldsType}
      cb={callBack}
    />
  ) : component.type === 'type' ? (
    <DocTypeComponent
      name={component.nameComponent}
      description={component.description}
      fields={component.fields}
      cb={callBack}
    />
  ) : component.type === 'name' ? (
    <DocNameComponent
      name={component.nameComponent}
      arg={component.arg}
      typeComponent={component.typeComponent}
      cb={callBack}
    />
  ) : (
    <div>No</div>
  );
};

export default DocComponent;
