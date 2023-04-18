import React from 'react';
import { useGetNamesQuery } from '../../services/pokemonNameAPI';

const PokemonList = () => {
  const { data, isFetching } = useGetNamesQuery({ limit: 20, offset: 20 });

  if (data && isFetching === false) {
    const { results } = data;

    return (
      <ul className='bg-teal-500'>
        {results.map(({ name }) => (
          <li key={name} className='flex cursor-pointer justify-between border-b p-3 text-white hover:bg-teal-600'>
            <span>{name}</span>
            <span className='font-bold'>{'>'}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <></>;
};

export default PokemonList;
