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
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    handleEditorValueChanged('');
  };

  if (isLoading) {
    return 'loading';
  }
  if (error) {
    return 'error';
  }
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
      >
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
            value={defaultRequest}
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
            <IconButton onClick={handlePrettifyQuery} sx={{ marginTop: '8px' }}>
              <CleaningServicesRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Copy query">
            <IconButton onClick={handleCopyQuery} sx={{ marginTop: '8px' }}>
              <ContentCopyRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
      <Accordion sx={{ position: 'relative' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
          />
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default Request;
