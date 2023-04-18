import demoAPI from '.';
import { updateIsFetching, updateNameList, updateIsError } from '../reducers/pokemonNamesPagination';

type Pokemon = {
  name: string;
  url: string;
};

export interface PokemonNamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface RequestParams {
  limit: number;
  offset: number;
}

const getPath = ({ limit, offset }: RequestParams) => {
  const queryParams = new URLSearchParams({
    limit: `${limit}`,
    offset: `${offset}`,
  });
  return `pokemon/?${queryParams}`;
};

export const pokemonNamesAPI = demoAPI.injectEndpoints({
  endpoints: (build) => ({
    getNames: build.query<PokemonNamesResponse, RequestParams>({
      query: (requestParams) => getPath(requestParams),
    }),
    // query with custom reducer side effect
    getNamesByPage: build.query<PokemonNamesResponse, RequestParams>({
      query: (requestParams) => getPath(requestParams),
      async onQueryStarted(_args, { dispatch, queryFulfilled, requestId }) {
        try {
          dispatch(updateIsFetching({ requestId }));
          const { data } = await queryFulfilled;
          dispatch(updateNameList({ requestId, data }));
        } catch (error) {
          dispatch(updateIsError({ requestId }));
        }
      },
    }),
  }),
});

export const { useGetNamesQuery } = pokemonNamesAPI;
