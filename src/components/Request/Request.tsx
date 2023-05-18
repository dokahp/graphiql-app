import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { noctisLilac } from '@uiw/codemirror-themes-all';
import { graphql } from 'cm6-graphql';
import { langs } from '@uiw/codemirror-extensions-langs';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { format } from 'graphql-formatter';
import { useHotkeys } from 'react-hotkeys-hook';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import { toast } from 'react-toastify';
import dataAPI from '../../store/services/APIserviceSchema';
import { createSchema } from '../DocContainer/DocExplorer';
import ExpandIcon from '../ExpandIcon/ExpandIcon';

type RequestProps = {
  editorValue: string;
  variableValue: string;
  editorCB: (value: string) => void;
  variableCB: (value: string) => void;
  execQuery: () => void;
};

function Request({
  editorCB,
  variableCB,
  execQuery,
  editorValue,
  variableValue,
}: RequestProps) {
  const { data: ans, isLoading } = dataAPI.useFetchAllDataQuery();

  const handleEditorValueChanged = (value: string) => {
    editorCB(value);
  };

  const handleVariableEditorValueChanged = (value: string) => {
    variableCB(value);
  };

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(editorValue);
    toast.success('Request successfully copied to clipboard', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const handlePrettifyQuery = () => {
    const codeFormatted = format(editorValue);
    editorCB(codeFormatted);
    toast.success('Query successfully prettified', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  useHotkeys('ctrl+shift+enter', () => execQuery(), {
    enableOnContentEditable: true,
  });

  useHotkeys('ctrl+shift+p', () => handlePrettifyQuery(), {
    enableOnContentEditable: true,
  });

  useHotkeys('ctrl+shift+c', () => handleCopyQuery(), {
    enableOnContentEditable: true,
  });

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Stack
        display="flex"
        flexDirection="row"
        width="100%"
        position="relative"
        overflow="scroll"
        maxHeight="70%"
        padding="16px 16px 0 16px"
      >
        {isLoading && <CircularProgress />}
        {ans && (
          <CodeMirror
            minHeight="200px"
            onChange={handleEditorValueChanged}
            basicSetup={{
              lineNumbers: true,
              autocompletion: true,
              lintKeymap: true,
              bracketMatching: true,
            }}
            value={editorValue}
            lang="graphql"
            extensions={graphql(createSchema(ans.data))}
            theme={noctisLilac}
            style={{
              flexGrow: 1,
              position: 'relative',
              overflowY: 'scroll',
              fontSize: '16px',
            }}
          />
        )}
        <Box
          width="40px"
          marginLeft="16px"
          display="flex"
          flexDirection="column"
        >
          <Tooltip title="Execute query">
            <Button
              variant="contained"
              color="success"
              onClick={execQuery}
              sx={{
                minWidth: '40px',
                maxWidth: '40px',
                height: '40px',
                boxSizing: 'border-box',
                padding: '0px',
              }}
            >
              <PlayArrowRoundedIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Prettify query">
            <IconButton
              onClick={handlePrettifyQuery}
              sx={{ marginTop: '30px' }}
            >
              <CleaningServicesRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Copy query">
            <IconButton onClick={handleCopyQuery} sx={{ marginTop: '30px' }}>
              <ContentCopyRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
      <Accordion
        sx={{
          position: 'relative',
          boxShadow: 0,
          borderBottomRightRadius: '12px',
          borderBottomLeftRadius: '12px',
          marginBottom: '6px',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ marginTop: '4px' }}
        >
          <Typography variant="body1">Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CodeMirror
            onChange={handleVariableEditorValueChanged}
            lang="application/json"
            extensions={[langs.json()]}
            maxHeight="150px"
            style={{
              position: 'relative',
              overflow: 'scroll',
              fontSize: '16px',
            }}
            theme={noctisLilac}
            value={variableValue}
          />
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default Request;
