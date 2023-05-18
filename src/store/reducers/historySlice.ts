import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IrequestType from '../services/reqType';

type HistoryObject = {
  id: number;
  isSelect: boolean;
  requestData: IrequestType;
};

interface IhistoryState {
  historyObjArray: HistoryObject[];
}

const initialState: IhistoryState = {
  historyObjArray: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory(state, action: PayloadAction<HistoryObject>) {
      state.historyObjArray.push(action.payload);
    },
    // setSelect(state, action: PayloadAction<number>) {
    //   const newHistory = state.historyObjArray;

    //   newHistory.forEach((item) => {
    //     if (item.id === action.payload) {
    //       item.isSelect = !item.isSelect;
    //     }
    //   });
    // },
    setNewHistory(state, action: PayloadAction<HistoryObject[]>) {
      state.historyObjArray = action.payload;
    },
  },
});

export default historySlice.reducer;
