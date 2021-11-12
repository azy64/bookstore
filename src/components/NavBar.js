import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

function load() {
  const menu = document.querySelector('.menu');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 82) {
      menu.classList.add('fixed');
    } else menu.classList.remove('fixed');
  });
}
export default function NavBar() {
  useEffect(load, []);
  return (
    <nav className="menu grid col-3 white shadow-bottom">
      <div className="text-end">
        <span className="Bookstore-CMS">Bookstore CMS</span>
      </div>
      <div>
        <ul className="link">
          <li>
            <NavLink to="/">Books</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </div>
      <div className="login">
        <span className="oval">
          <ImUser style={{ color: '#0290ff', marginTop: 10 }} />
        </span>
      </div>
    </nav>
  );
}
