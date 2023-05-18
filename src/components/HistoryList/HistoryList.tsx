import React from 'react';
import './historyList.style.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function HistoryList() {
  return (
    <div>
      <List
        className="selectElemList"
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
        aria-label="contacts"
      >
        <ListItem disablePadding>
          <ListItemButton sx={{ paddingLeft: 0 }}>
            <ListItemText primary="Chelsea Otakan" />
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ paddingLeft: 0 }}>
            <ListItemText primary="Chelsea Otakan" />
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <List
        className="noSelectElemList"
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
        aria-label="contacts"
      >
        <ListItem disablePadding>
          <ListItemButton sx={{ paddingLeft: 0 }}>
            <ListItemText primary="Chelsea Otakan" />
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ paddingLeft: 0 }}>
            <ListItemText primary="Chelsea Otakan" />
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}

export default HistoryList;
