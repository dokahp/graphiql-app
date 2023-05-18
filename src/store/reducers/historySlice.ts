import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IrequestType from '../services/reqType';

type HistoryObject = {
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
  },
});

export default historySlice.reducer;
