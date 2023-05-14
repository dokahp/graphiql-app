import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import dataAPI from '../../store/services/APIservice';
import { createSchema } from '../DocContainer/DocExplorer';

function Request() {
  const { data: ans, error, isLoading } = dataAPI.useFetchAllDataQuery();

  const defaultRequest = `query GetCountry {
  country(code: "BY") {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}`;

  if (isLoading) {
    return 'loading';
  }
  if (error) {
    return 'error';
  }
  return (
    <section>
      {ans && (
        <CodeMirror
          value={defaultRequest}
          lang="graphql"
          extensions={graphql(createSchema(ans.data))}
        />
      )}
    </section>
  );
}

export default Request;
