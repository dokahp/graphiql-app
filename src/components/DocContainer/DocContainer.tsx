import React, { Suspense } from 'react';

import DocExplorer from './DocExplorer';
import './documentation.styles.css';
import IDataAPI from '../../store/services/schemaType';

type DocumentationContainerProps = {
  schemaRaw: IDataAPI | undefined;
};

function DocumentationContainer({ schemaRaw }: DocumentationContainerProps) {
  return schemaRaw ? <DocExplorer schemaJSON={schemaRaw.data} /> : null;
}

export default DocumentationContainer;
