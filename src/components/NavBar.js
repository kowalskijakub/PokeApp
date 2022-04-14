import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => (
  <nav className="menu">
    <Link to="/">Pokemon</Link>
    <Link to="/items">Items</Link>
  </nav>
);
export default NavBar;
