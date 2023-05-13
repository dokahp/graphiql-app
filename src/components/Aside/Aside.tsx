import React, { useState } from 'react';

import { Box, Drawer, IconButton, Tooltip } from '@mui/material';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import useScrollPosition from '../../hooks/useScrollPosition';
import './aside.css';
import DocContainer from '../DocContainer/DocContainer';

function Aside() {
  const [docDrawer, setDocDrawer] = useState(false);
  const offset = useScrollPosition();
  const screenWidth = window.screen.width;
  const drawerPosition = screenWidth > 600 ? 64 - offset : 56 - offset;
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
              onClick={() => setDocDrawer((prev: boolean) => !prev)}
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
            <DocContainer />
          </Box>
        </Drawer>
      </aside>
    </div>
  );
}

export default Aside;
