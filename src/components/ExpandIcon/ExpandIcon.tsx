import { IconButton, Tooltip } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ExpandIcon() {
  const { t } = useTranslation();
  return (
    <Tooltip title={t('Show/Hide Variable Editor')}>
      <IconButton>
        <ExpandLessIcon />
      </IconButton>
    </Tooltip>
  );
}

export default ExpandIcon;
