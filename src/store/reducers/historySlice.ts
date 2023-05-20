import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IrequestType from '../services/reqType';

export type HistoryObject = {
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
    setSelect(state, action: PayloadAction<number>) {
      const newHistory = state.historyObjArray.map((item) => {
        const newElem: HistoryObject = {
          id: item.id,
          isSelect:
            item.id === +action.payload ? !item.isSelect : item.isSelect,
          requestData: item.requestData,
        };
        return newElem;
      });
      state.historyObjArray = newHistory;
    },
    setCurrentHistoryObject(state, action: PayloadAction<number>) {
      // console.log(state.historyObjArray);
      const newHistory = state.historyObjArray.filter(
        (item) => item.id !== action.payload
      );
      const currentObj = state.historyObjArray.find(
        (item) => item.id === action.payload
      );
      // console.log('currentObj', currentObj);
      if (currentObj) newHistory.push(currentObj);
      state.historyObjArray = newHistory;
      // console.log(state.historyObjArray);
    },
  },
});

export default historySlice.reducer;
