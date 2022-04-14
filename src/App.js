import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Pokemon } from './components/Pokemon';
import { Items } from './components/Items';
import Header from './components/Header';
import NavBar from './components/NavBar';
import DetailPokemon from './components/DetailPokemon';
const App = () => {
  const [visibilityDetailCard, setVisibilityDetailCard] = useState(false);
  const [detailInfo, setDetailInfo] = useState([]);
  return (
    <>
      <Header />
      {visibilityDetailCard && (
        <DetailPokemon
          detailInfo={detailInfo}
          setVisibilityDetailCard={setVisibilityDetailCard}
        />
      )}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Pokemon
                setDetailInfo={setDetailInfo}
                setVisibilityDetailCard={setVisibilityDetailCard}
              />
            }
          />
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
