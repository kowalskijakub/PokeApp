import React from 'react';
import './Pokemon.css';

const Pokemon = ({ pokemon }) => {
  console.log();
  const pokemonNumb = pokemon.url.split('/')[6];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumb}.png`;
  return (
    <div className="pokemon">
      <h1>{pokemon.name}</h1>
      <img
        src={imgUrl}
        alt={pokemon.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
        }}
      />
    </div>
  );
};

export default Pokemon;