import { combineReducers } from '@reduxjs/toolkit';
import demoAPI from '../services';

const rootReducer = combineReducers({
  [demoAPI.reducerPath]: demoAPI.reducer,
});

export default rootReducer;
