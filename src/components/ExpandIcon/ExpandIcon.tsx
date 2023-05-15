import { IconButton, Tooltip } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React from 'react';

function ExpandIcon() {
  return (
    <Tooltip title="Show/Hide Variable Editor">
      <IconButton>
        <ExpandLessIcon />
      </IconButton>
    </Tooltip>
  );
}

export default ExpandIcon;
