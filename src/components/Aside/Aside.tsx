import React, { useState, Suspense } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  Tooltip,
  Typography,
  Container,
  LinearProgress,
} from '@mui/material';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import useScrollPosition from '../../hooks/useScrollPosition';
import DocContainerAsync from '../DocContainer/DocContainer.async';
import schemaAPI from '../../store/services/APIserviceSchema';
import HistoryList from '../HistoryList/HistoryList';
import './aside.css';

function Aside() {
  const [docDrawer, setDocDrawer] = useState(false);
  const [historyDrawer, setHistoryDrawer] = useState(false);
  const offset = useScrollPosition();
  const screenWidth = window.screen.width;
  const drawerPosition = screenWidth > 600 ? 64 - offset : 56 - offset;
  const { data: ans, error, isLoading } = schemaAPI.useFetchAllDataQuery();

  const handleDocVisability = () => {
    setHistoryDrawer(() => false);
    setDocDrawer((prev: boolean) => !prev);
  };

  const handleHistoryVisability = () => {
    setDocDrawer(() => false);
    setHistoryDrawer((prev: boolean) => !prev);
  };

  return (
    <div style={{ display: 'flex' }}>
      <aside className="aside-wrapper">
        <div className="top-block">
          <Tooltip
            title={
              docDrawer
                ? 'Hide Documentation Explorer'
                : 'Show Documentation Explorer'
            }
          >
            <IconButton
              onClick={handleDocVisability}
              sx={{
                borderRadius: '4px',
                width: '44px',
                height: '44px',
                margin: '20px 0',
              }}
            >
              {docDrawer && <LocalLibraryIcon />}
              {!docDrawer && <LocalLibraryOutlinedIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title={historyDrawer ? 'Hide History' : 'Show History'}>
            <IconButton
              onClick={handleHistoryVisability}
              sx={{
                borderRadius: '4px',
                width: '44px',
                height: '44px',
                margin: '20px 0',
              }}
            >
              <RestoreOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="bottom-block">
          <Tooltip title="Re-fetch GraphQL schema">
            <IconButton
              sx={{
                borderRadius: '4px',
                width: '44px',
                height: '44px',
                margin: '10px 0',
              }}
            >
              <RefreshOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open Short Keys Dialog">
            <IconButton
              sx={{
                borderRadius: '4px',
                width: '44px',
                height: '44px',
                margin: '10px 0',
              }}
            >
              <KeyboardCommandKeyOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>

        <Drawer
          open={docDrawer}
          anchor="left"
          hideBackdrop
          PaperProps={{
            sx: {
              height: `calc(100% - ${drawerPosition}px)`,
              top: drawerPosition,
            },
          }}
        >
          <Box
            marginLeft="61px"
            paddingTop="20px"
            width="300px"
            position="relative"
          >
            <Container className="docContainer" maxWidth="sm">
              {error ? (
                <>there was an error</>
              ) : (
                <Suspense
                  fallback={
                    <div>
                      <LinearProgress />
                      <Typography variant="subtitle1" fontSize="14px">
                        Lazy loading Documentation...
                      </Typography>
                    </div>
                  }
                >
                  {!isLoading && ans ? (
                    <DocContainerAsync schemaRaw={ans} />
                  ) : null}
                </Suspense>
              )}
            </Container>
          </Box>
        </Drawer>
        <Drawer
          open={historyDrawer}
          anchor="left"
          hideBackdrop
          PaperProps={{
            sx: {
              height: `calc(100% - ${drawerPosition}px)`,
              top: drawerPosition,
            },
          }}
        >
          <Box
            marginLeft="61px"
            paddingTop="20px"
            width="300px"
            position="relative"
            paddingX="24px"
          >
            <Typography variant="h5">History</Typography>
            <HistoryList />
          </Box>
        </Drawer>
      </aside>
    </div>
  );
}

export default Aside;
