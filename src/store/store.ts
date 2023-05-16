import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import dataAPI from './services/APIservice';
import fetchAPI from './services/APIserviceReqData';
import historySliceReducer from './reducers/historySlice';

const rootReducer = combineReducers({
  authSlice,
  historySliceReducer,
  [dataAPI.reducerPath]: dataAPI.reducer,
  [fetchAPI.reducerPath]: fetchAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dataAPI.middleware, fetchAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
