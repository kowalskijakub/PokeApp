import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon/Pokemon';
import Items from './components/Items/Items';
import Header from './components/Header';
import NavBar from './components/NavBar';
const App = () => {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Pokemon />} />
        </Routes>
        <Routes>
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
