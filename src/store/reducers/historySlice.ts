import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IrequestType from '../services/reqType';

const defaultRequest: IrequestType = {
  operationName: 'GetCountry',
  query: `query GetCountry {
    country(code: "BY") {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}`,
};

export type HistoryObject = {
  id: number;
  isSelect: boolean;
  requestData: IrequestType;
};

interface IhistoryState {
  historyObjArray: HistoryObject[];
  currentRequest: IrequestType;
}

const initialState: IhistoryState = {
  historyObjArray: [],
  currentRequest: defaultRequest,
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
      const currentObj = state.historyObjArray.find(
        (item) => item.id === action.payload
      );
      if (currentObj) state.currentRequest = currentObj?.requestData;
    },
    setCurrentRequset(state, action: PayloadAction<IrequestType>) {
      state.currentRequest = action.payload;
    },
  },
});

export default historySlice.reducer;
