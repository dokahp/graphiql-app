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
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const handleEditorValueChanged = (value: string) => {
    editorCB(value);
  };

  const handleVariableEditorValueChanged = (value: string) => {
    variableCB(value);
  };

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(editorValue);
    toast.success(t('Request successfully copied to clipboard'), {
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
    toast.success(t('Query successfully prettified'), {
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

  useHotkeys('ctrl+alt+enter', () => execQuery(), {
    enableOnContentEditable: true,
  });

  useHotkeys('ctrl+alt+p', () => handlePrettifyQuery(), {
    enableOnContentEditable: true,
  });

  useHotkeys('ctrl+alt+c', () => handleCopyQuery(), {
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
        width="100%"
        position="relative"
        overflow="scroll"
        maxHeight="70%"
        sx={{
          padding: { xs: '4px 4px 0 4px', md: '16px 16px 0 16px' },
          flexDirection: { xs: 'column-reverse', sm: 'row' },
        }}
      >
        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '200px',
              width: '100%',
            }}
          >
            <CircularProgress />
          </Box>
        )}
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
          display="flex"
          sx={{
            marginLeft: { xs: '4px', md: '16px' },
            flexDirection: { xs: 'row', sm: 'column' },
            padding: { xs: '10px', sm: 0 },
          }}
        >
          <Tooltip title={t('Execute query')}>
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
                marginRight: { xs: '20px', sm: 0 },
              }}
            >
              <PlayArrowRoundedIcon />
            </Button>
          </Tooltip>
          <Tooltip title={t('Prettify query')}>
            <IconButton
              onClick={handlePrettifyQuery}
              sx={{
                marginTop: { xs: 0, sm: '30px' },
                marginRight: { xs: '20px', sm: 0 },
              }}
            >
              <CleaningServicesRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t('Copy query')}>
            <IconButton
              onClick={handleCopyQuery}
              sx={{
                marginTop: { xs: 0, sm: '30px' },
                marginRight: { xs: '20px', sm: 0 },
              }}
            >
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
          <Typography variant="body1">{t('Variables')}</Typography>
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
