import React from 'react';
import './historyList.style.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { historySlice } from '../../store/reducers/historySlice';

function shortNameHandler(name: string) {
  if (name.length > 15) {
    return `${name.slice(0, 12)}...`;
  }
  return name;
}

type HistoryListProps = {
  cb: () => void;
};

function HistoryList({ cb }: HistoryListProps) {
  const { historyObjArray } = useAppSelector(
    (state) => state.historySliceReducer
  );
  const { setSelect, setCurrentHistoryObject } = historySlice.actions;
  const dispatch = useAppDispatch();

  const isSelectArr = historyObjArray.filter((item) => item.isSelect);
  const NoSelectArr = historyObjArray.filter((item) => !item.isSelect);

  function selectToggle(e: React.MouseEvent<HTMLElement>) {
    dispatch(setSelect(+e.currentTarget.id));
  }

  function historyRequestHandler(e: React.MouseEvent<HTMLElement>) {
    dispatch(setCurrentHistoryObject(+e.currentTarget.id));
    cb();
  }

  return (
    <div>
      <List
        className="selectElemList"
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
        }}
        aria-label="contacts"
      >
        {isSelectArr.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ paddingLeft: 0 }}>
              <ListItemText
                id={item.id.toString()}
                onClick={(e) => historyRequestHandler(e)}
                primary={shortNameHandler(
                  item.requestData.operationName || '[noname]'
                )}
              />
              <ListItemIcon
                id={item.id.toString()}
                onClick={(e) => selectToggle(e)}
              >
                <StarIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List
        className="noSelectElemItem"
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
        }}
        aria-label="contacts"
      >
        {NoSelectArr.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ paddingLeft: 0 }}>
              <ListItemText
                id={item.id.toString()}
                onClick={(e) => historyRequestHandler(e)}
                primary={shortNameHandler(
                  item.requestData.operationName || '[noname]'
                )}
              />
              <ListItemIcon
                id={item.id.toString()}
                onClick={(e) => selectToggle(e)}
              >
                <StarBorderIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default HistoryList;
