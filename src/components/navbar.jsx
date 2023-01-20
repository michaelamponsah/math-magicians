import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const links = [
  {
    id: 1,
    path: '/',
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
    <div className="container nav-wrapper">
      <span className="logo">Math Magicians</span>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="nav-link">{link.navText}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
