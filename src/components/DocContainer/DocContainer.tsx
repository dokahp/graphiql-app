import React from 'react';

import DocExplorer from './DocExplorer';
import IDataAPI from '../../store/services/schemaType';
import './documentation.styles.css';

type DocumentationContainerProps = {
  schemaRaw: IDataAPI | undefined;
};

function DocumentationContainer({ schemaRaw }: DocumentationContainerProps) {
  return schemaRaw ? <DocExplorer schemaJSON={schemaRaw.data} /> : null;
}

export default DocumentationContainer;
