import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon/Pokemon';
import Items from './components/Items/Items';
import Header from './components/Header';
import NavBar from './components/NavBar';
import DetailCard from './components/DetailCard';
const App = () => {
  const [visibilityDetailCard, setVisibilityDetailCard] = useState(false);
  const [detailInfo, setDetailInfo] = useState([]);
  return (
    <div>
      <Header />
      {visibilityDetailCard ? (
        <DetailCard
          detailInfo={detailInfo}
          setVisibilityDetailCard={setVisibilityDetailCard}
        />
      ) : (
        ''
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
    </div>
  );
};

export default App;
