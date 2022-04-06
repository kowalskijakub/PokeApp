import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import Loading from '../Loading';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState('');
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1126`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        setPokemon(data.results);
      });
  }, []);
  if (pokemon) {
    const renderedPokemon = pokemon.map(n => {
      return <PokemonCard pokemon={n} key={n.url} />;
    });
    return <div className="container">{renderedPokemon}</div>;
  }
  return <Loading />;
};

export default Pokemon;
