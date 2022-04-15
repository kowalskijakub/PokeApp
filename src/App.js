import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Pokemon, DetailPokemon } from './components/Pokemon';
import { DetailItem, Items } from './components/Items';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Search from './components/Search';

const App = () => {
  const [visibilityDetailCard, setVisibilityDetailCard] = useState(false);
  const [searchVisiblity, setSearchVisiblity] = useState(false);
  const [detailInfo, setDetailInfo] = useState([]);
  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar
          setSearchVisiblity={setSearchVisiblity}
          searchVisiblity={searchVisiblity}
        />
        <Search
          setDetailInfo={setDetailInfo}
          setVisibilityDetailCard={setVisibilityDetailCard}
        />
        <Routes>
          {visibilityDetailCard && (
            <Route
              path="/"
              element={
                <DetailPokemon
                  detailInfo={detailInfo}
                  setVisibilityDetailCard={setVisibilityDetailCard}
                />
              }
            />
          )}
          {visibilityDetailCard && (
            <Route
              path="/items"
              element={
                <DetailItem
                  detailInfo={detailInfo}
                  setVisibilityDetailCard={setVisibilityDetailCard}
                />
              }
            />
          )}
          <Route
            path="/"
            element={
              <Pokemon
                setDetailInfo={setDetailInfo}
                setVisibilityDetailCard={setVisibilityDetailCard}
              />
            }
          />
          <Route
            path="/items"
            element={
              <Items
                setDetailInfo={setDetailInfo}
                setVisibilityDetailCard={setVisibilityDetailCard}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
