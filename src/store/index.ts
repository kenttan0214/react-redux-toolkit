import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import demoAPI from '../services';

// https://stackoverflow.com/questions/66315413/type-definitions-for-redux-toolkit-store-with-preloadedstate
export const setupStore = (preloadedState?: PreloadedState<any>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(demoAPI.middleware),
  });

export type Store = ReturnType<typeof setupStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
