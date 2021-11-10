import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink exact to="/">Books</NavLink>
          <NavLink exact to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  );
}
