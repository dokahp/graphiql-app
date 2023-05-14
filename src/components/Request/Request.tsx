import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { noctisLilac } from '@uiw/codemirror-themes-all';
import { graphql } from 'cm6-graphql';
import dataAPI from '../../store/services/APIservice';
import { createSchema } from '../DocContainer/DocExplorer';

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

function Request() {
  const { data: ans, error, isLoading } = dataAPI.useFetchAllDataQuery();
  const [editorValue, setEditorValue] = useState(defaultRequest);

  const handleEditorValueChanged = (value: string) => {
    setEditorValue(() => value);
  };

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
          onChange={handleEditorValueChanged}
          value={defaultRequest}
          lang="graphql"
          extensions={graphql(createSchema(ans.data))}
          theme={noctisLilac}
        />
      )}
    </section>
  );
}

export default Request;
