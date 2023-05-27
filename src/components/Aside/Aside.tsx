import React, { useState, Suspense } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  Tooltip,
  Typography,
  Container,
  LinearProgress,
  Stack,
} from '@mui/material';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import useScrollPosition, {
  calculateDrawerPostion,
} from '../../hooks/useScrollPosition';
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
  const drawerPosition = calculateDrawerPostion(screenWidth, offset);
  const { data: ans, error, isLoading } = schemaAPI.useFetchAllDataQuery();
  const { t } = useTranslation();

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
                ? t('Hide Documentation Explorer')
                : t('Show Documentation Explorer')
            }
          >
            <IconButton onClick={handleDocVisability} sx={asideBtnStyles}>
              {docDrawer && <LocalLibraryIcon />}
              {!docDrawer && <LocalLibraryOutlinedIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip
            title={historyDrawer ? t('Hide History') : t('Show History')}
          >
            <IconButton onClick={handleHistoryVisability} sx={asideBtnStyles}>
              <RestoreOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="bottom-block">
          <Tooltip title={t('Open Short Keys Dialog')}>
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
            paddingTop="20px"
            width="320px"
            position="relative"
            sx={{ marginLeft: { xs: '10px', md: '61px' } }}
          >
            <Container className="docContainer" maxWidth="sm">
              {error ? (
                <>{t('there was an error')}</>
              ) : (
                <Suspense
                  fallback={
                    <div>
                      <LinearProgress />
                      <Typography variant="subtitle1" fontSize="14px">
                        {t('Lazy loading Documentation...')}
                      </Typography>
                    </div>
                  }
                >
                  {!isLoading && ans ? (
                    <>
                      <IconButton
                        sx={{
                          position: 'absolute',
                          top: -7,
                          right: '20px',
                          width: 'auto',
                          borderRadius: '4px',
                        }}
                        onClick={handleDocVisability}
                        size="large"
                      >
                        <CloseIcon />
                      </IconButton>
                      <DocContainerAsync schemaRaw={ans} />
                    </>
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
            paddingTop="20px"
            width="320px"
            position="relative"
            paddingX="24px"
            sx={{ marginLeft: { xs: '10px', md: '61px' } }}
          >
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5">{t('History')}</Typography>
              <IconButton
                sx={{ borderRadius: '4px' }}
                onClick={handleHistoryVisability}
                size="large"
              >
                <CloseIcon />
              </IconButton>
            </Stack>

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
