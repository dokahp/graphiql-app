import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
// import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import './aside.css';

function Aside() {
  return (
    <aside className="aside-wrapper">
      <div className="top-block">
        <Tooltip title="Show Documentation Explorer">
          <IconButton
            sx={{
              borderRadius: '4px',
              width: '44px',
              height: '44px',
              margin: '20px 0',
            }}
          >
            <LocalLibraryOutlinedIcon
              sx={{
                color: 'rgba(59, 76, 104, 0.76)',
                boxSizing: 'content-box',
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Show History">
          <IconButton
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
    </aside>
  );
}

export default Aside;
