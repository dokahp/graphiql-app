import React, { useState } from 'react';
import { Box } from '@mui/material';
import Response from '../Response/Response';
import Request from '../Request/Request';
import IrequestType from '../../store/services/reqType';
import requestAPI from '../../store/services/APIserviceReqData';
import { historySlice } from '../../store/reducers/historySlice';
import { useAppDispatch } from '../../hooks/redux';

function MainSection() {
  const [editorValue, setEditorValue] = useState<string>('');
  const [variableValue, setVariableValue] = useState<string>('');
  const [skip, setSkip] = useState<boolean>(true);
  const [req, setReq] = useState<IrequestType>({
    operationName: '',
    query: '',
    variable: {},
  });

  const { data: fetchData } = requestAPI.useGetCountriesByContinentQuery(req, {
    skip,
  });

  const { setHistory } = historySlice.actions;
  const dispatch = useAppDispatch();

  function handlerEditor(editorData: string) {
    setEditorValue(editorData);
  }

  function handlerVariablese(variableData: string) {
    setVariableValue(variableData);
  }

  function handlerSend() {
    setSkip(false);
    let start = editorValue.indexOf(' ');
    start += 1;
    const finish = editorValue.indexOf('(');
    const newReq = {
      operationName: editorValue.slice(start, finish),
      query: editorValue,
      variable: JSON.parse(variableValue),
    };
    setReq(newReq);

    dispatch(setHistory(newReq));
  }

  return (
    <>
      <Box bgcolor="#fff" borderRadius="12px" width="55%" height="100%">
        <Request
          editorValue={editorValue}
          variableValue={variableValue}
          editorCB={(value: string) => handlerEditor(value)}
          variableCB={(value: string) => handlerVariablese(value)}
          execQuery={() => handlerSend()}
        />
      </Box>
      <Response response={fetchData} />
    </>
  );
}

export default MainSection;
