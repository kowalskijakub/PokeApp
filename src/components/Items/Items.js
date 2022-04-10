import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import ItemCard from './ItemCard';
import ChangePage from '../ChangePage';

const Items = () => {
  const [items, setItems] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const itemsOnPage = 50;
  const offsetItems = (pageNumber - 1) * itemsOnPage;
  const maxPage = Math.ceil(1607 / itemsOnPage);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/item?limit=50&offset=${offsetItems}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setItems(data.results);
      });
  }, [offsetItems]);
  if (items) {
    const renderedItems = items.map(item => {
      return <ItemCard item={item} key={item.url} />;
    });
    return (
      <div>
        <div className="container">{renderedItems}</div>
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

export default Items;
