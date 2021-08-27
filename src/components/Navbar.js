import React from 'react';
import { NavLink } from 'react-router-dom';
import loginImg from '../assets/userIcon.svg';

const Navbar = () => {
  const links = [
    {
      id: 'books',
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 'categories',
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav>
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.id} className="nav-li">
            <NavLink
              to={link.path}
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="empty" />
      <div className="Oval">
        <img src={loginImg} alt="login icon" />
      </div>
    </nav>
  );
};
export default Navbar;
