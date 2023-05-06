import React from 'react';
import { dataAPI } from '../../store/services/APIservice';
import DocAccordion from '../DocThree/DocThree';

const DocumentationContainer = () => {
  const { data: data, isLoading } = dataAPI.useFetchAllDataQuery();
  console.log(data?.data.__schema);
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <DocAccordion
          types={
            data?.data.__schema.types.length ? data?.data.__schema.types : []
          }
        />
      )}
    </div>
  );
};

export default DocumentationContainer;
