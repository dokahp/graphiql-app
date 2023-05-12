import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import dataAPI from './services/APIservice';
import api from './services/APIserviceReq';

const rootReducer = combineReducers({
  [dataAPI.reducerPath]: dataAPI.reducer,
  [api.reducerPath]: api.reducer,
  authSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dataAPI.middleware, api.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
