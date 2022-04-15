import React from 'react';

const PokemonCard = ({ pokemon, setVisibilityDetailCard, setDetailInfo }) => {
  const pokemonNumb = pokemon.url.split('/')[6];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumb}.png`;

  const onError = ({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
  };

  return (
    <div
      className="card"
      onClick={() => {
        setVisibilityDetailCard(true);
        setDetailInfo(pokemon);
      }}
    >
      <h1>{pokemon.name.split('-').join(' ')}</h1>

      <img src={imgUrl} alt={pokemon.name} onError={onError} />
    </div>
  );
};

export default PokemonCard;
