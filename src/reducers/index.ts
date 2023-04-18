import { combineReducers } from '@reduxjs/toolkit';
import pokemonNamesPaginationReducer from './pokemonNamesPagination';
import demoAPI from '../services';

const rootReducer = combineReducers({
  [demoAPI.reducerPath]: demoAPI.reducer,
  pokemonNamesPagination: pokemonNamesPaginationReducer,
});

export default rootReducer;
