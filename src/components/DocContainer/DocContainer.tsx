import React, { Suspense } from 'react';
import { dataAPI } from '../../store/services/APIservice';
import DocExplorerAsinc from './DocExplorer.async';
import { buildClientSchema } from 'graphql';
import { Container } from '@mui/material';
import './documentation.styles.css';

const DocumentationContainer = () => {
  const { data: ans, error, isLoading } = dataAPI.useFetchAllDataQuery();

  return (
    <Container className="docContainer" maxWidth="sm">
      {error ? (
        <>there was an error</>
      ) : (
        <Suspense fallback={<h1>Loading...</h1>}>
          {!isLoading && ans?.data ? (
            <DocExplorerAsinc schema={buildClientSchema(ans.data)} />
          ) : null}
        </Suspense>
      )}
    </Container>
  );
};

export default DocumentationContainer;
