import React, { useState } from 'react';
import { Box } from '@mui/material';
import Response from '../Response/Response';
import Request from '../Request/Request';
import IrequestType from '../../store/services/reqType';
import requestAPI from '../../store/services/APIserviceReqData';
import { historySlice } from '../../store/reducers/historySlice';
import { useAppDispatch } from '../../hooks/redux';

function findOperationName(value: string) {
  let start = value.indexOf(' ');
  start += 1;
  let finish = 0;
  for (let i = start; i < value.length - 1; i += 1) {
    if (value[i] === '(' || value[i] === '{' || value[i] === ' ') {
      finish = i;
      break;
    }
  }
  return value.slice(start, finish);
}

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
    const name = findOperationName(editorValue);
    let newReq: IrequestType;
    if (variableValue) {
      newReq = {
        operationName: name,
        query: editorValue,
        variable: JSON.parse(variableValue),
      };
    } else {
      newReq = {
        operationName: name,
        query: editorValue,
      };
    }
    setReq(newReq);
    if (fetchData) {
      dispatch(setHistory(newReq));
    }
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
