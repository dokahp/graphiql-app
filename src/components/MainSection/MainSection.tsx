import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import Response from '../Response/Response';
import Request from '../Request/Request';
import IrequestType from '../../store/services/reqType';
import requestAPI from '../../store/services/APIserviceReqData';
import { historySlice } from '../../store/reducers/historySlice';
import { useAppDispatch } from '../../hooks/redux';

type MainSectionProps = {
  currentRequest: IrequestType;
};

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

function MainSection({ currentRequest }: MainSectionProps) {
  const [editorValue, setEditorValue] = useState<string>(
    currentRequest.query || ''
  );
  const [variableValue, setVariableValue] = useState<string>(
    currentRequest.variable || ''
  );
  const [skip, setSkip] = useState<boolean>(true);
  const [req, setReq] = useState<IrequestType>({
    operationName: '',
    query: '',
    variable: '',
  });

  const { data: fetchData } = requestAPI.useGetCountriesByContinentQuery(req, {
    skip,
  });

  useEffect(() => {
    setEditorValue(currentRequest.query || '');
    setVariableValue(currentRequest.variable || '');
  }, [currentRequest]);

  const { setHistory, setCurrentRequset } = historySlice.actions;
  const dispatch = useAppDispatch();

  function handlerEditor(editorData: string) {
    setEditorValue(editorData);
  }

  function handlerVariable(variableData: string) {
    setVariableValue(variableData);
  }

  function handlerSendRequest() {
    setSkip(false);
    const name = findOperationName(editorValue);
    try {
      let newReq: IrequestType;
      newReq = {
        operationName: name,
        query: editorValue,
      };
      if (variableValue) {
        newReq = {
          ...newReq,
          variable: JSON.parse(variableValue),
        };
      }
      setReq(newReq);
      dispatch(
        setHistory({
          id: Date.now(),
          isSelect: false,
          requestData: newReq,
        })
      );
      dispatch(setCurrentRequset(newReq));
    } catch (error) {
      toast.error(String(error), {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  }
  return (
    <>
      <Box bgcolor="#fff" borderRadius="12px" width="55%" height="100%">
        <Request
          editorValue={editorValue}
          variableValue={variableValue}
          editorCB={(value: string) => handlerEditor(value)}
          variableCB={(value: string) => handlerVariable(value)}
          execQuery={() => handlerSendRequest()}
        />
      </Box>
      <Response response={fetchData} />
    </>
  );
}

export default MainSection;
