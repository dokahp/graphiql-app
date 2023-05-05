import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dataAPI } from './services/APIservice';

const rootReducer = combineReducers({
  [dataAPI.reducerPath]: dataAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dataAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
