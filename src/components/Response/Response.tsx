import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { noctisLilac } from '@uiw/codemirror-themes-all';
import { langs } from '@uiw/codemirror-extensions-langs';
import './response.css';

type ResponseProps = {
  response: string | undefined;
};

function Response({ response }: ResponseProps) {
  return (
    <section className="response-section">
      <CodeMirror
        lang="application/json"
        extensions={[langs.json()]}
        value={JSON.stringify(response, null, 2)}
        minHeight="100%"
        theme={noctisLilac}
        editable={false}
        style={{
          flexGrow: 1,
          position: 'relative',
          overflowY: 'scroll',
          fontSize: '16px',
        }}
      />
    </section>
  );
}

export default Response;
