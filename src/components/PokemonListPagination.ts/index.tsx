import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppSelector } from '../../store';
import useGetNamesByPage from '../../hooks/useGetPokemonNamesByPage';

const PokemonListPagination = () => {
  const { limit, offset, results, isFetching, isError, next } = useAppSelector((state) => state.pokemonNamesPagination);

  const nextOffset = offset + limit;

  const { getNamesByPage } = useGetNamesByPage({ limit, offset: nextOffset });

  const getNextPage = () => {
    if (isFetching === false && next !== null) {
      getNamesByPage({ limit, offset: nextOffset });
    }
  };

  if (isError === true) {
    return <>Error, Please Try Again!</>;
  }

  return (
    <>
      <InfiniteScroll dataLength={results.length} next={getNextPage} hasMore={next !== null} loader={''}>
        <ul className='bg-teal-500'>
          {results.map(({ name }) => (
            <li key={name} className='flex cursor-pointer justify-between border-b p-3 text-white hover:bg-teal-600'>
              <span>{name}</span>
              <span className='font-bold'>{'>'}</span>
            </li>
          ))}
        </ul>
      </InfiniteScroll>

      {isFetching === true && <>Loading</>}
    </>
  );
};

export default PokemonListPagination;
