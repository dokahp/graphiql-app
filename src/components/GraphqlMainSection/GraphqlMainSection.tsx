import { Container } from '@mui/material';
import React, { useState } from 'react';
import dataAPIreq from '../../store/services/APIserviceReq';

function GraphqlMainSection() {
  const [editor, setEditor] = useState<string>('');
  const [variable, setVariable] = useState<string>('');

  const { data: str } = dataAPIreq.useGetCountriesByContinentQuery(editor);

  function handlerEditor(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setEditor(e.target.value);
  }

  function handlerVariablese(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setVariable(e.target.value);
  }

  function handlerSend() {
    setEditor('');
    setVariable('');
    console.log(str);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Container
        className="mainSectionGraphqlContainer"
        maxWidth="sm"
        style={{ display: 'flex' }}
      >
        <label htmlFor="reqEditor">
          Editor
          <textarea
            onChange={handlerEditor}
            name="reqEditor"
            id="reqEditor"
            cols={30}
            rows={10}
            value={editor}
            style={{ border: '1px solid black' }}
          />
        </label>
        <label htmlFor="varEditor">
          Variables
          <textarea
            onChange={handlerVariablese}
            name="varEditor"
            id="varEditor"
            cols={30}
            rows={10}
            style={{ border: '1px solid black', marginLeft: '10px' }}
            value={variable}
          />
        </label>
      </Container>
      <div style={{ margin: '0 auto' }}>
        <button type="button" onClick={handlerSend}>
          Send!
        </button>
      </div>
    </div>
  );
}

export default GraphqlMainSection;
