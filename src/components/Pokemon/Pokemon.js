import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import Loading from '../Loading';
import ChangePage from '../ChangePage';

const Pokemon = ({ setVisibilityDetailCard, setDetailInfo }) => {
  const [pokemon, setPokemon] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const pokemonOnPage = 50;
  const offsetPokemon = (pageNumber - 1) * pokemonOnPage;
  const maxPage = Math.ceil(1126 / pokemonOnPage);
  useEffect(() => {
    // 1126
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offsetPokemon}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        setPokemon(data.results);
      });
  }, [offsetPokemon]);
  if (pokemon) {
    const renderedPokemon = pokemon.map(n => {
      return (
        <PokemonCard
          pokemon={n}
          key={n.url}
          setVisibilityDetailCard={setVisibilityDetailCard}
          setDetailInfo={setDetailInfo}
        />
      );
    });
    return (
      <div>
        <div className="container">{renderedPokemon}</div>
        <div>
          <ChangePage
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            maxPage={maxPage}
          />
        </div>
      </div>
    );
  }
  return <Loading />;
};

export default Pokemon;
