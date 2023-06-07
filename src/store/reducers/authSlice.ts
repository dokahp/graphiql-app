import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Auth {
  email: string;
}

const initialState: Auth = {
  email: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export default authSlice.reducer;
