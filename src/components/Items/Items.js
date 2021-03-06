import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import ItemCard from './ItemCard';
import ChangePage from '../ChangePage';

const Items = ({ setVisibilityDetailCard, setDetailInfo }) => {
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
    const renderedItems = items.map(item => (
      <ItemCard
        item={item}
        key={item.url}
        setVisibilityDetailCard={setVisibilityDetailCard}
        setDetailInfo={setDetailInfo}
      />
    ));
    return (
      <>
        <div className="container">{renderedItems}</div>
        <div>
          <ChangePage
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            maxPage={maxPage}
          />
        </div>
      </>
    );
  }
  return <Loading />;
};

export default Items;
