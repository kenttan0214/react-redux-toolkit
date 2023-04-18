import { useEffect, useState } from 'react';
import { RequestParams, useLazyGetNamesByPageQuery } from '../services/pokemonNameAPI';

const useGetNamesByPage = (requestParams: RequestParams) => {
  const [hasExecuted, setHasExecuted] = useState(false);

  const [getNamesByPage] = useLazyGetNamesByPageQuery();

  useEffect(() => {
    // ensure the hook only execute one time
    if (hasExecuted === false) {
      getNamesByPage(requestParams);
      setHasExecuted(true);
    }
  }, [getNamesByPage, hasExecuted, requestParams]);

  return {
    getNamesByPage,
  };
};

export default useGetNamesByPage;
