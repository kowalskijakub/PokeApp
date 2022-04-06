import React from 'react';

const ItemCard = ({ item }) => {
  let imgUrl;
  if (item.name.includes('berries')) {
    imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${item.name}.png`;
  } else {
    imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`;
  }

  return (
    <div className="card">
      <h1>{item.name}</h1>

      <img
        src={imgUrl}
        alt={item.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
        }}
      />
    </div>
  );
};

export default ItemCard;
