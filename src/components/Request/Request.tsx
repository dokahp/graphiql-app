import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { noctisLilac } from '@uiw/codemirror-themes-all';
import { graphql } from 'cm6-graphql';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
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

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(editorValue);
  };

  if (isLoading) {
    return 'loading';
  }
  if (error) {
    return 'error';
  }
  return (
    <section style={{ display: 'flex', width: '100%' }}>
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
          style={{ flexGrow: 1 }}
        />
      )}
      <Box width="40px" marginLeft="16px" display="flex" flexDirection="column">
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
          <IconButton sx={{ marginTop: '8px' }}>
            <CleaningServicesRoundedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Copy query">
          <IconButton onClick={handleCopyQuery} sx={{ marginTop: '8px' }}>
            <ContentCopyRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </section>
  );
}

export default Request;
