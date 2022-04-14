import React from 'react';

const ItemCard = ({ item, setVisibilityDetailCard, setDetailInfo }) => {
  let imgUrl;
  if (item.name.includes('berries')) {
    imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${item.name}.png`;
  } else {
    imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`;
  }

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
        setDetailInfo(item);
      }}
    >
      <h1>{item.name}</h1>

      <img src={imgUrl} alt={item.name} onError={onError} />
    </div>
  );
};

export default ItemCard;
