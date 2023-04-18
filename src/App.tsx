import React from 'react';
import PokemonListPagination from './components/PokemonListPagination.ts';
// import PokemonList from './components/PokemonList';

function App() {
  return (
    <>
      <div className='mx-auto mt-10 w-1/2'>
        <PokemonListPagination />
      </div>
    </>
  );
}

export default App;
