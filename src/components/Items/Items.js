import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

const Items = () => {
  const [items, setItems] = useState('');
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/item?limit=1607`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setItems(data.results);
      });
  }, []);
  if (items) {
    const renderedItems = items.map(item => {
      return <ItemCard item={item} />;
    });
    return <div className="container">{renderedItems}</div>;
  }
  return <h1>Loading</h1>;
};

export default Items;
