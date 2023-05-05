import React from 'react';
import { dataAPI } from '../../store/services/APIservice';

const DocumentationContainer = () => {
  const { data: data } = dataAPI.useFetchAllDataQuery();
  console.log(data);
  return <div></div>;
};

export default DocumentationContainer;
