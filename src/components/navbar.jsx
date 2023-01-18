import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const links = [
  {
    id: 1,
    path: '/home',
    navText: 'Home',
  },
  {
    id: 2,
    path: '/calculator',
    navText: 'Calculator',
  },
  {
    id: 3,
    path: '/quotes',
    navText: 'Quotes',
  },
];

const Navbar = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.navText}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
