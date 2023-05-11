import React, { Suspense } from 'react';
import { Container } from '@mui/material';
import dataAPI from '../../store/services/APIservice';
import DocExplorerAsinc from './DocExplorer.async';
import './documentation.styles.css';

function DocumentationContainer() {
  const { data: ans, error, isLoading } = dataAPI.useFetchAllDataQuery();
  return (
    <Container className="docContainer" maxWidth="sm">
      {error ? (
        <>there was an error</>
      ) : (
        <Suspense fallback={<h1>Loading...</h1>}>
          {!isLoading && ans ? (
            <DocExplorerAsinc schemaJSON={ans.data} />
          ) : null}
        </Suspense>
      )}
    </Container>
  );
}

export default DocumentationContainer;
