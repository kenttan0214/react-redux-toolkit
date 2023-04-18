import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonNamesResponse, RequestParams } from '../services/pokemonNameAPI';

interface InitialState extends PokemonNamesResponse {
  requestId: string;
  isSuccess: boolean;
  isError: boolean;
  isFetching: boolean;
  limit: number;
  offset: number;
}

const initialState: InitialState = {
  requestId: '',
  results: [],
  count: 0,
  next: null,
  previous: null,
  isSuccess: false,
  isError: false,
  isFetching: false,
  limit: 20,
  offset: 0,
};

const { reducer, actions } = createSlice({
  name: 'pokemonNamesPagination',
  initialState,
  reducers: {
    updateNameList: (
      state,
      { payload }: PayloadAction<{ requestId: string; data: PokemonNamesResponse; args: RequestParams }>,
    ) => {
      const { requestId, data, args } = payload;

      if (state.requestId === requestId) {
        return {
          ...state,
          ...data,
          ...args,
          results: [...state.results, ...data.results],
          isSuccess: true,
          isError: false,
          isFetching: false,
        };
      }
      return state;
    },
    updateIsFetching: (state, { payload }: PayloadAction<{ requestId: string }>) => ({
      ...state,
      ...payload,
      isSuccess: false,
      isError: false,
      isFetching: true,
    }),
    updateIsError: (state, { payload }: PayloadAction<{ requestId: string }>) => {
      const { requestId } = payload;
      if (state.requestId === requestId) {
        return {
          ...state,
          ...payload,
          isError: true,
          isSuccess: false,
          isFetching: false,
        };
      }
      return state;
    },
  },
});

export const { updateNameList, updateIsError, updateIsFetching } = actions;

export default reducer;
