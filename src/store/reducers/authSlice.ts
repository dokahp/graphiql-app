import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Auth {
  isAuthorized: boolean;
}

const initialState: Auth = {
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsUserAuth(state, action: PayloadAction<boolean>) {
      state.isAuthorized = action.payload;
    },
  },
});

export default authSlice.reducer;
