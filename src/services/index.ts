import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 *
 * Configuration -> https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#parameters
 */
const demoAPI = createApi({
  reducerPath: 'demoAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: () => ({}),
});

export default demoAPI;
