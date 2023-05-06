import React, { Suspense } from 'react';
import { dataAPI } from '../../store/services/APIservice';
import DocThreeAsync from '../DocThree/DocThree.async';

const DocumentationContainer = () => {
  const { data: data, isLoading, error } = dataAPI.useFetchAllDataQuery();
  return (
    <div>
      {error ? (
        <h1>Error</h1>
      ) : (
        <Suspense fallback={<h1>Loading...</h1>}>
          {!isLoading ? (
            <DocThreeAsync
              types={data?.data.__schema.types || []}
              name={data?.data.__schema.queryType.name || ''}
            />
          ) : null}
        </Suspense>
      )}
    </div>
  );
};

export default DocumentationContainer;
