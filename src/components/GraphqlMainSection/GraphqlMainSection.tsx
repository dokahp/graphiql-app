import { Container } from '@mui/material';
import React, { useState } from 'react';
import dataAPIreq from '../../store/services/APIserviceReqData';
import IrequestType from '../../store/services/requsetType';

function GraphqlMainSection() {
  const [editor, setEditor] = useState<string>('');
  const [variable, setVariable] = useState<string>('');
  const [skip, setSkip] = useState<boolean>(true);
  const [req, setReq] = useState<IrequestType>({
    operationName: '',
    query: '',
    variable: {},
  });

  const { data: fetchData } = dataAPIreq.useGetCountriesByContinentQuery(req, {
    skip,
  });
  function handlerEditor(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setEditor(e.target.value);
  }

  function handlerVariablese(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setVariable(e.target.value);
  }

  function handlerSend() {
    setSkip(false);
    let start = editor.indexOf(' ');
    start += 1;
    const finish = editor.indexOf('(');
    setReq({
      operationName: editor.slice(start, finish),
      query: editor,
      variable: JSON.parse(variable),
    });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>{JSON.stringify(fetchData)}</div>
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
