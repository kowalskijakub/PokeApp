import React, { useEffect, useRef, useState } from 'react';
import { ItemCard } from './Items';
import { PokemonCard } from './Pokemon';
import './Search.css';
const Search = ({ setVisibilityDetailCard, setDetailInfo }) => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');
  const inputSearch = useRef();
  const [type, setType] = useState('');

  useEffect(() => {
    if (url)
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(() => {});
  }, [url]);

  const onSubmit = e => {
    e.preventDefault();
    if (query) {
      const location = window.location.href.split('?')[0];

      if (location === 'http://localhost:3000/items') {
        setType('item');
        setUrl(
          `https://pokeapi.co/api/v2/item/${query
            .split(' ')
            .join('-')
            .toLowerCase()}`
        );
      } else if (location === 'http://localhost:3000/') {
        setType('pokemon');
        setUrl(
          `https://pokeapi.co/api/v2/pokemon/${query
            .split(' ')
            .join('-')
            .toLowerCase()}`
        );
      }
      console.log(data);
    }
  };

  return (
    <>
      <form className="search_container">
        <input
          ref={inputSearch}
          type="text"
          placeholder="TYPE HERE"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button
          onClick={e => {
            onSubmit(e);
          }}
        >
          SEARCH
        </button>
      </form>

      <div className="search_result">
        {data &&
          (type === 'pokemon' ? (
            <PokemonCard
              pokemon={{
                name: data.name,
                url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
              }}
              setVisibilityDetailCard={setVisibilityDetailCard}
              setDetailInfo={setDetailInfo}
            />
          ) : (
            <ItemCard
              item={{ name: data.name, url: url }}
              setVisibilityDetailCard={setVisibilityDetailCard}
              setDetailInfo={setDetailInfo}
            />
          ))}
      </div>
    </>
  );
};

export default Search;
