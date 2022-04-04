import React, { useState } from 'react';
import './Pokemon.css';

const Pokemon = ({ id }) => {
  const [pokemon, setPokemon] = useState('');

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      setPokemon(data);
    });

  return (
    <div className="pokemon">
      <h1>{pokemon.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={pokemon.name}
      />
    </div>
  );
};

export default Pokemon;
