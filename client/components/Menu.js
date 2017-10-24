import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Homepage</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
