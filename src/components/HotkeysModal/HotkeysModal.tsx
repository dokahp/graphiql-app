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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -55%)',
  minWidth: '300px',
  maxWidth: '720px',
  bgcolor: '#fff',
  border: 'none',
  borderRadius: '12px',
  boxShadow: 5,
};

interface HotkeysModalProps {
  hotkeysModalOpen: boolean;
  handleHotkeysModalClose: () => void;
}

function HotkeysModal({
  hotkeysModalOpen,
  handleHotkeysModalClose,
}: HotkeysModalProps) {
  return (
    <Modal
      open={hotkeysModalOpen}
      onClose={handleHotkeysModalClose}
      hideBackdrop
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
            Short Keys
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
                <th>Short Key</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="key">CTRL</span> +{' '}
                  <span className="key">SHIFT</span> +{' '}
                  <span className="key">ENTER</span>
                </td>
                <td>Execute Query</td>
              </tr>
              <tr>
                <td>
                  <span className="key">CTRL</span> +{' '}
                  <span className="key">SHIFT</span> +{' '}
                  <span className="key">P</span>
                </td>
                <td>Prettify Request Editor</td>
              </tr>
              <tr>
                <td>
                  <span className="key">CTRL</span> +{' '}
                  <span className="key">SHIFT</span> +{' '}
                  <span className="key">C</span>
                </td>
                <td>Copy Query</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </Modal>
  );
}

export default HotkeysModal;
