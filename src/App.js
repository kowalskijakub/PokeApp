import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon/Pokemon';
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
      </BrowserRouter>
    </div>
  );
};

export default App;
