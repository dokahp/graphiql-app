import React from 'react';
import { dataAPI } from '../../store/services/APIservice';
import DocTreeView from '../DocThree/DocThree';

const DocumentationContainer = () => {
  const { data: data, isLoading } = dataAPI.useFetchAllDataQuery();
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <DocTreeView
          types={data?.data.__schema.types || []}
          name={data?.data.__schema.queryType.name || ''}
        />
      )}
    </div>
  );
};

export default DocumentationContainer;
