import React from "react";
import './Header.css';
import logo from '../../assets/images/logo-header.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo Kasa" className="header__logo" />
      </Link>
      <nav>
        <ul className="header__menu">
          <li className={`header__menu-item`}>
            <NavLink to="/" activeclassname="active-link">Accueil</NavLink>
          </li>
          <li className={`header__menu-item`}>
            <NavLink to="/about" activeclassname="active-link">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
