import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { noctisLilac } from '@uiw/codemirror-themes-all';
import { graphql } from 'cm6-graphql';
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
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';

import dataAPI from '../../store/services/APIservice';
import { createSchema } from '../DocContainer/DocExplorer';
import ExpandIcon from '../ExpandIcon/ExpandIcon';

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
  const { data: ans, isLoading } = dataAPI.useFetchAllDataQuery();
  const [editorValue, setEditorValue] = useState(defaultRequest);
  const [variableValue, setVariableValue] = useState('');

  const handleEditorValueChanged = (value: string) => {
    setEditorValue(() => value);
  };

  const handleVariableEditorValueChanged = (value: string) => {
    setVariableValue(() => value);
  };

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(editorValue);
  };

  const handlePrettifyQuery = () => {
    const codeFormatted = format(editorValue);
    setEditorValue(() => codeFormatted);
  };

  const handleExecQuery = () => {
    // Query execution code nessecary here
  };

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
        padding="16px"
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
            style={{ flexGrow: 1, position: 'relative', overflowY: 'scroll' }}
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
              onClick={handleExecQuery}
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
        >
          <Typography>Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CodeMirror
            onChange={handleVariableEditorValueChanged}
            maxHeight="150px"
            style={{ position: 'relative', overflow: 'scroll' }}
            theme={noctisLilac}
            value={variableValue}
          />
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default Request;
