import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IrequestType from '../services/reqType';

interface IhistoryState {
  requests: IrequestType[];
}

const initialState: IhistoryState = {
  requests: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory(state, action: PayloadAction<IrequestType>) {
      state.requests.push(action.payload);
    },
  },
});

export default historySlice.reducer;
