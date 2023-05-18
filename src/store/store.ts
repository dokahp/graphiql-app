import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import schemaAPI from './services/APIserviceSchema';
import requestAPI from './services/APIserviceReqData';
import historySliceReducer from './reducers/historySlice';

const rootReducer = combineReducers({
  authSlice,
  historySliceReducer,
  [schemaAPI.reducerPath]: schemaAPI.reducer,
  [requestAPI.reducerPath]: requestAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        schemaAPI.middleware,
        requestAPI.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
