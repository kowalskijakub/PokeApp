import React, { useEffect, useState } from 'react';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState('');
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        console.log(data);
        setPokemon(data);
      });
  }, []);

  return <h1>{pokemon.name}</h1>;
};

export default Pokemon;
