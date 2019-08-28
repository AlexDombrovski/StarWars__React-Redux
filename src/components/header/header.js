import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="container header d-flex">
      <h3>
        <Link to="#">
          Star DB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;