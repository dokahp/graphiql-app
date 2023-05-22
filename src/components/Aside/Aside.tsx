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
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import useScrollPosition from '../../hooks/useScrollPosition';
import DocContainerAsync from '../DocContainer/DocContainer.async';
import schemaAPI from '../../store/services/APIserviceSchema';
import HistoryList from '../HistoryList/HistoryList';
import './aside.css';
import HotkeysModal from '../HotkeysModal/HotkeysModal';

const asideBtnStyles = {
  borderRadius: '4px',
  width: '44px',
  height: '44px',
  margin: { xs: '0 20px', md: '20px 0' },
};

function Aside() {
  const [docDrawer, setDocDrawer] = useState(false);
  const [historyDrawer, setHistoryDrawer] = useState(false);
  const [hotkeysModal, setHotkeysModal] = useState<boolean>(false);
  const offset = useScrollPosition();
  const screenWidth = window.screen.width;
  // const drawerPosition = screenWidth > 900 ? 64 - offset : 56 - offset;
  const drawerPosition = screenWidth > 900 ? 64 - offset : 56 - offset;
  const { data: ans, error, isLoading } = schemaAPI.useFetchAllDataQuery();

  const handleDocVisability = () => {
    setHistoryDrawer(() => false);
    setDocDrawer((prev: boolean) => !prev);
  };

  const handleHistoryVisability = () => {
    setDocDrawer(() => false);
    setHistoryDrawer((prev: boolean) => !prev);
  };

  const handleHotkeysModalOpen = () => {
    setHotkeysModal(true);
  };

  const handleHotkeysModalClose = () => {
    setHotkeysModal(false);
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
            <IconButton onClick={handleDocVisability} sx={asideBtnStyles}>
              {docDrawer && <LocalLibraryIcon />}
              {!docDrawer && <LocalLibraryOutlinedIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title={historyDrawer ? 'Hide History' : 'Show History'}>
            <IconButton onClick={handleHistoryVisability} sx={asideBtnStyles}>
              <RestoreOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="bottom-block">
          <Tooltip title="Open Short Keys Dialog">
            <IconButton onClick={handleHotkeysModalOpen} sx={asideBtnStyles}>
              <KeyboardCommandKeyOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>

        <Drawer
          open={docDrawer}
          onClose={handleDocVisability}
          anchor="left"
          slotProps={{
            backdrop: { sx: { background: 'transparent' } },
          }}
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
          onClose={handleHistoryVisability}
          anchor="left"
          slotProps={{
            backdrop: { sx: { background: 'transparent' } },
          }}
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
            <HistoryList cb={handleHistoryVisability} />
          </Box>
        </Drawer>
      </aside>
      <HotkeysModal
        hotkeysModalOpen={hotkeysModal}
        handleHotkeysModalClose={handleHotkeysModalClose}
      />
    </div>
  );
}

export default Aside;
