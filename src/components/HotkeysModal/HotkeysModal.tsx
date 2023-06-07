import {
  Box,
  Divider,
  IconButton,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import './hotkeysModal.css';
import { useTranslation } from 'react-i18next';

interface HotkeysModalProps {
  hotkeysModalOpen: boolean;
  handleHotkeysModalClose: () => void;
}

function HotkeysModal({
  hotkeysModalOpen,
  handleHotkeysModalClose,
}: HotkeysModalProps) {
  const { t } = useTranslation();
  return (
    <Modal
      open={hotkeysModalOpen}
      onClose={handleHotkeysModalClose}
      slotProps={{
        backdrop: { sx: { background: 'transparent' } },
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: {
            xs: 'translate(-50%, -45%)',
            md: 'translate(-50%, -55%)',
          },
          minWidth: '300px',
          maxWidth: '720px',
          bgcolor: '#fff',
          border: 'none',
          borderRadius: '12px',
          boxShadow: 5,
        }}
      >
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          padding="24px"
        >
          <Typography
            sx={{
              color: 'rgb(59, 76, 104)',
              fontSize: '22px',
              fontWeight: '500',
            }}
          >
            {t('Short Keys')}
          </Typography>
          <IconButton
            sx={{ borderRadius: '4px' }}
            onClick={handleHotkeysModalClose}
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider />
        <div className="main-table">
          <table className="hotkeys-table">
            <thead>
              <tr>
                <th>{t('Short Key')}</th>
                <th>{t('Function')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="key">CTRL</span> +{' '}
                  <span className="key">ALT</span> +{' '}
                  <span className="key">ENTER</span>
                </td>
                <td>{t('Execute Query')}</td>
              </tr>
              <tr>
                <td>
                  <span className="key">CTRL</span> +{' '}
                  <span className="key">ALT</span> +{' '}
                  <span className="key">P</span>
                </td>
                <td>{t('Prettify Request Editor')}</td>
              </tr>
              <tr>
                <td>
                  <span className="key">CTRL</span> +{' '}
                  <span className="key">ALT</span> +{' '}
                  <span className="key">C</span>
                </td>
                <td>{t('Copy Query')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </Modal>
  );
}

export default HotkeysModal;
